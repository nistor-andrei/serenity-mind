import { neon } from "@neondatabase/serverless";

function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} environment variable is not set`);
  }
  return value;
}
export const sql = neon(getEnvVar("DATABASE_URL"));
