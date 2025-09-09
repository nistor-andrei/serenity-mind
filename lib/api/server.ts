import { HttpMethod } from "@/types/types";
import { cookies } from "next/headers";

export const fetchServerSide = async <T>(
  url: string,
  method: HttpMethod
): Promise<T> => {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.get("Authorization")?.value ?? "";
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}${url}`, {
    method,
    headers: {
      cookie: `Authorization=${cookieHeader}`,
    },
  });
  return res.json();
};
