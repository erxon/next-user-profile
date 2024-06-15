"use client";

import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/actions";
import Loading from "../components/Loading";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const [showPassword, setShowPassword] = useState(false);

  function LoginButton() {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        className="mt-4 w-full bg-teal-900 text-white p-2 rounded flex justify-center items-center gap-2 disabled:opacity-75"
        aria-disabled={pending}
        disabled={pending}
      >
        Log in
        {pending && <Loading />}
      </button>
    );
  }

  return (
    <>
      <form action={dispatch}>
        <div className="flex flex-col">
          <div className="relative">
            <EmailIcon className="pointer-events-none text-gray-700 absolute top-5 left-1 transform -translate-y-1/2 left-3" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full mb-2 p-2 pl-10 outline outline-1 outline-gray-300 rounded focus:outline-teal-900 focus:outline-2"
            />
          </div>
          <div className="relative">
            <KeyIcon className="pointer-events-none text-gray-700 w-6 h-6 absolute top-5 left-1 transform -translate-y-1/2 left-3" />
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="peer w-full block p-2 pl-10 appearance-none outline outline-1 outline-gray-300 rounded focus:outline-teal-900 focus:outline-2"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="absolute right-1 bottom-2"
            >
              {showPassword ? (
                <VisibilityOffIcon className="ml-2 text-teal-900" />
              ) : (
                <VisibilityIcon className="ml-2 text-teal-900" />
              )}
            </button>
          </div>
          <LoginButton />
        </div>
        <div aria-live="polite" aria-atomic="true">
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </form>
    </>
  );
}
