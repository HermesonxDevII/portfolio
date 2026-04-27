'use server'

import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET)

export async function createSession(id: string) {
  try {
    const token = await new SignJWT({ sub: id })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign(SECRET);

    const cookieStore = await cookies();
    cookieStore.set('session', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
    });

    return true
  } catch (error) {
    console.error('lib/auth.ts - createSession()', error)
    return false;
  }
}

export async function deleteSession() {
  try {
    const cookieStore = await cookies();

    cookieStore.delete('session');

    return true;
  } catch (error) {
    console.error('lib/auth.ts - deleteSession()', error);
    return false;
  }
}
