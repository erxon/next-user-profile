import Link from "next/link";
import LoginForm from "../ui/auth/login-form";
import { signIn } from "@/auth-with-provider";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Page() {
  return (
    <main>
      <div className="w-fit mx-auto mt-12 text-center">
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
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button className="mt-3 outline outline-1 rounded p-3 flex items-center w-full transition-colors hover:bg-gray-900 hover:text-white">
              <Image
                width={24}
                height={24}
                src="/google.png"
                alt="Google Icon"
                className="mr-4"
              />{" "}
              Continue with Google
            </button>
          </form>
          {/* <form
            action={async () => {
              "use server";
              await signIn("facebook");
            }}
          >
            <button
              className="mt-3 outline outline-1 rounded p-3 flex items-center w-full transition-colors hover:bg-gray-900 hover:text-white"
              type="submit"
            >
              <Image
                width={24}
                height={24}
                src="/facebook.png"
                alt="Facebook Icon"
                className="mr-4"
              />{" "}
              Continue with Facebook
            </button>
          </form> */}
        </div>
      </div>
    </main>
  );
}
