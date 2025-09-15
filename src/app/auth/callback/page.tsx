"use client";

import { useEffect } from "react";
import { createBrowserClient } from "@supabase/ssr";

export default function AuthCallback() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );

  useEffect(() => {
    const handleSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Session error:", error.message);
        return;
      }

      if (data.session) {
        console.log("User logged in:", data.session.user);
        // ✅ user is authenticated
        window.location.href = "/dashboard";
      }
    };

    handleSession();
  }, []);

  return <p>Completing sign in...</p>;
}
