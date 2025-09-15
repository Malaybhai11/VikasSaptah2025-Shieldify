"use server";

import { createServerSupabase } from "../utils/supabase/server";

export async function signInWithGoogle() {
  const supabase = await createServerSupabase();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: process.env.NEXT_PUBLIC_SITE_URL + "/auth/callback",
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data; // contains redirect URL
}
