import { signUp } from './actions';
import Link from 'next/link';

export default function GetStartedPage() {
  return (
    <>
        <div>
        <h1>Create Account</h1>
        <form>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button formAction={signUp}>Sign Up</button>
        </form>
        </div>
        <Link href="/signin">
            <div>
                <h1>Already have an Account Login</h1>
            </div>
        </Link>
    </>
  );
}
