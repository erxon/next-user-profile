import Link from "next/link";
import LoginForm from "../../ui/auth/login-form";
import SignInWithGoogle from "../../ui/auth/signin-with-google";

export default function Page() {
  return (
    <>
      <h1>Login</h1>
      <div className="mt-5">
        <LoginForm />
        <p className="text-center mt-2 text-sm">
          Do not have an account yet?{" "}
          <Link className="text-teal-900 font-medium" href="/signup">
            Sign up
          </Link>
        </p>
        {/* Add Providers (Google, Facebook, Github) */}
        <SignInWithGoogle />
      </div>
    </>
  );
}
