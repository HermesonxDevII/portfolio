import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import bcrypt from 'bcryptjs';
import Swal from 'sweetalert2'
import { NotifyData } from "@/types/Notify";

// UI functions
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateText(text: string, maxLength: number) {
  if (!text) return

  if (text.length <= maxLength) return text

  return text.slice(0, maxLength).trimEnd() + '...'
}

export function notify(data: NotifyData) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: data?.timer || 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: data.icon,
    title: data.title
  })
}

// Async functions
export async function hashPassword(password: string): Promise<string> {
  if (!password) return ''

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  return hashedPassword
}
