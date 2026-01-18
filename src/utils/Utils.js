// Configuration for third-party libraries.
// Pure helper functions (like date formatting, currency math) that don't rely on React state or hooks.


//this is shadcn configuration 
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}