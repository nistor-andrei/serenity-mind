"use server";
import { createClient } from "lib/supabaseServer";
import { redirect } from "next/navigation";

type Provider = "google" | "github" | "facebook";

const signInWith = (provider: Provider) => async () => {
  const supabase = await createClient();

  const auth_callback_url = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`;
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: auth_callback_url,
    },
  });

  if (data.url) {
    redirect(data.url);
  } else {
    console.error(error);
    redirect("/login");
  }
};

const signInWithGoogle = signInWith("google");

export { signInWithGoogle };
