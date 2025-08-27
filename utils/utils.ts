import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isTokenExpired(exp: number): boolean {
  const now = Math.floor(Date.now() / 1000);
  return exp < now;
}
