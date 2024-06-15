import SignupForm from "@/app/ui/auth/signup-form";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Signup</h1>
      <div className="mt-5">
        <SignupForm />
      </div>
      <p className="text-center mt-2 text-sm">
        Already have an account?{" "}
        <Link className="text-teal-900 font-medium" href="/login">
          Login
        </Link>
      </p>
    </>
  );
}
