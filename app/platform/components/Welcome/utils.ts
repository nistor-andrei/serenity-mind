"use server";
import { supabase } from "lib/supabaseClient";

export async function getUser() {
  const res = await supabase.auth.getUser();
  const user = res.data.user;

  return user;
}
