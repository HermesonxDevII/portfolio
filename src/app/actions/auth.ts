'use server'

import bcrypt from 'bcryptjs';

import { prisma } from "@/lib/prisma";
import { createSession, deleteSession } from "@/lib/auth";
import { hashPassword } from "@/lib/utils";

import { ActionResponse } from "@/types/ActionResponse";
import { RegisterData, LoginData } from "@/types/auth";
import { redirect } from 'next/navigation';

/**
 * Register the user and create a secure session using cookies.
 *
 * @param {RegisterData} data
 * Access data. For more information, check the `RegisterData` type.
 *
 * @returns
 * A promise with `ActionResponse` containing the user's data (without the password) or an error message.
 *
 * @example
 * import { register } from "@/app/actions/auth"
 *
 * const data = {
 *  name: 'user',
 *  email: "user@example.com",
 *  password: "123"
 * };
 *
 * const res = await register(data);
 */
export async function register(data: RegisterData): Promise<ActionResponse> {
  try {
    if (!data.name || !data.email || !data.password)
      return { success: false, message: "Os campos 'nome', 'email' e 'senha' são obrigatórios." }

    // Step 1
    // Creates a hash of the password.
    const hashedPassword = await hashPassword(data.password)

    if (!hashedPassword)
      return { success: false, message: "Ocorreu um erro ao tentar encriptar a senha." }

    // Step 2
    // Creates the user in the database.
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword
      }
    })

    // Step 3
    // Creates the user session.
    const session = await createSession(user.id)

    if (!session)
      return { success: false, message: "Ocorreu um erro ao tentar criar sessão." }

    // Step 4
    // Remove the password to send the data to the client.
    const { password: _unused, ...safeUser } = user

    // Step 5
    // Returns the data to the client.
    return {
      success: true,
      message: "Usuário registrado com sucesso!",
      data: { user: safeUser }
    }
  } catch (error) {
    console.error('actions/auth.ts - register()', error)
    return { success: false, message: "Ocorreu um erro ao tentar registrar usuário." }
  }
}

/**
 * It authenticates the user and create a secure session using cookies.
 *
 * @param {LoginData} data
 * Access data. For more information, check the `LoginData` type.
 *
 * @returns
 * A promise with `ActionResponse` containing the user's data (without the password) or an error message.
 *
 * @example
 * import { login } from "@/app/actions/auth"
 *
 * const data = {
 *  email: "user@example.com",
 *  password: "123"
 * };
 *
 * const res = await login(data);
 */
export async function login(data: LoginData): Promise<ActionResponse> {
  try {
    if (!data.email || !data.password)
      return { success: false, message: "Os campos 'email' e 'senha' são obrigatórios." }

    // Step 1
    // Search for the user in the database.
    const user = await prisma.user.findUnique({
      where: { email: data.email }
    })

    if (!user)
      return { success: false, message: "Email ou senha inválidos." }

    // Step 2
    // Compare the passwords.
    const isPasswordValid = await bcrypt.compare(data.password, user.password)

    if (!isPasswordValid)
      return { success: false, message: "Email ou senha inválidos." }

    // Step 3
    // Creates the user session.
    const session = await createSession(user.id)

    if (!session)
      return { success: false, message: "Ocorreu um erro ao tentar criar sessão." }

    // Step 4
    // Remove the password to send the data to the client.
    const { password: _unused, ...safeUser } = user;

    // Step 5
    // Returns the data to the client.
    return {
      success: true,
      message: "Usuário logado com sucesso!",
      data: { user: safeUser }
    }
  } catch (error) {
    console.error('actions/auth.ts - login()', error)
    return { success: false, message: "Ocorreu um erro ao tentar logar usuário." }
  }
}

/**
 * Logout the user destroying their session.
 *
 * @example
 * import { logout } from "@/app/actions/auth"
 *
 * await logout();
 */
export async function logout() {
  await deleteSession()
  redirect("/");
}
