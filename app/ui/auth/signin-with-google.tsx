"use client";

import Image from "next/image";
import { signInWithGoogle } from "@/app/lib/actions";
import { useFormStatus } from "react-dom";
import Loading from "../components/Loading";

export default function SignInWithGoogle() {
  function Button() {
    const { pending } = useFormStatus();

    return (
      <button
        className="flex justify-center items-center gap-2 mt-3 outline outline-1 rounded p-3 flex items-center w-full transition-colors hover:bg-gray-900 hover:text-white disabled:opacity-75 disabled:bg-gray-900 disabled:text-white"
        disabled={pending}
      >
        <Image
          width={24}
          height={24}
          src="/google.png"
          alt="Google Icon"
          className="mr-4"
        />{" "}
        Continue with Google
        {pending && <Loading />}
      </button>
    );
  }
  return (
    <form action={signInWithGoogle}>
      <Button />
    </form>
  );
}
