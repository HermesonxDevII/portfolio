import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import bcrypt from 'bcryptjs';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateText(text: string, maxLength: number) {
  if (!text) return

  if (text.length <= maxLength) return text

  return text.slice(0, maxLength).trimEnd() + '...'
}

export async function hashPassword(password: string): Promise<string> {
  if (!password) return ''

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  return hashedPassword
}
