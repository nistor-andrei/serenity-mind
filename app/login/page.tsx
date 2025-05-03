"use client";
import Image from "next/image";
import { supabase } from "../../lib/supabaseClient";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin + "/platform",
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden w-full max-w-3xl h-110">
        <div className="hidden md:flex items-center justify-center bg-[var(--light-violet)] w-full md:w-1/2 p-8">
          <Image
            src="/meditate.png"
            alt="Meditate Illustration"
            width={300}
            height={300}
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-[var(--violet)] mb-2">
            Welcome Back
          </h1>
          <p className="text-md text-[var(--light-gray)] mb-8 text-center">
            Sign in to SerenityMind to start your journey to inner peace.
          </p>
          <button
            onClick={handleGoogleLogin}
            className="flex items-center gap-2 text-black border border-gray-200 bg-white cursor-pointer px-6 py-3 rounded-xl font-medium transition hover:bg-gray-50 shadow"
          >
            <Image
              src="/google-auth.svg"
              alt="google-logo"
              width={20}
              height={20}
            />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
