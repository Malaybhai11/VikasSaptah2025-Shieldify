'use server';
import { redirect } from 'next/dist/server/api-utils';
import { createServerSupabase } from '../utils/supabase/server';

export async function signUp(formData: FormData) {
  const email = String(formData.get('email') ?? '');
  const password = String(formData.get('password') ?? '');

  const supabase = await createServerSupabase();
  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    throw new Error(error.message);
  }
}
