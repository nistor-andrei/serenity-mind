"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function AppPage() {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push("/login");
      }
    });
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Platform!</h1>
      <p>You are logged in.</p>
    </div>
  );
}
