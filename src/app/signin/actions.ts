'use server';
import { createServerSupabase } from '../utils/supabase/server';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const email = String(formData.get('email') ?? '');
  const password = String(formData.get('password') ?? '');

  const supabase = await createServerSupabase();
  
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    throw new Error(error.message);
  }
}
