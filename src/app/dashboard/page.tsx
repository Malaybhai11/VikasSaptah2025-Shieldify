import { createServerSupabase } from '../utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {

    const supabase = await createServerSupabase();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect('/signin');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-">
            <h1>If you can see this you are logged in</h1>
        </div>
    );
}