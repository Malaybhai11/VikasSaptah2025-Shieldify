import { login } from './actions';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
        <div>
        <h1>Login</h1>
        <form>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button formAction={login}>Login</button>
        </form>
        </div>
        <Link href={"/get-started"}>
        <div>
            <h1>Dont have an Account Create one</h1>
        </div>
        </Link>
    </>
  );
}
