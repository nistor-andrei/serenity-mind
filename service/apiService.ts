type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export const fetchWithAuth = async <T>(
  url: string,
  method: HttpMethod
): Promise<T> => {
  const res = await fetch(url, {
    method: method,
    credentials: "include",
  });
  return res.json();
};
