import { fetchWithAuth } from "@/lib/api/client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface UserRegister {
  name: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export type UserInfo = Omit<UserRegister, "password">;

export async function createUser(url: string, { arg }: { arg: UserRegister }) {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || data.message || "Failed to register user");
  }

  return data;
}

export async function loginUser(url: string, { arg }: { arg: UserLogin }) {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.error || data.message || "Something went wrong at the login"
    );
  }

  return { data, ok: res.ok };
}

export const handleLogout = async (
  navigation: AppRouterInstance,
  toast: { success: (msg: string) => void; error: (msg: string) => void }
) => {
  try {
    const res = await fetchWithAuth<{ message: string }>(
      "/api/auth/logout",
      "POST"
    );
    toast.success(res.message);
    navigation.push("/login");
  } catch {
    toast.error("Something happened");
  }
};
