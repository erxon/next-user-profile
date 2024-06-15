"use client";

import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { createUser } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import Loading from "../components/Loading";

export default function SignupForm() {
  // const initialState = { message: "", passwordError: "", errors: {} };
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createUser, initialState);

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  function SignUp() {
    const { pending } = useFormStatus();
    return (
      <button className="flex justify-center items-center gap-2 bg-teal-900 text-white p-2 rounded mt-3 disabled:opacity-75" disabled={pending} aria-disabled={pending}>
        Signup
        {pending && <Loading />}
      </button>
    );
  }

  return (
    <>
      <form action={dispatch} className="flex flex-col">
        <div className="flex mb-2 ">
          <div>
            <input
              className="mr-2 p-2 outline outline-1 opacity-50 rounded focus:outline-teal-900 focus:outline-2 focus:opacity-100"
              name="firstName"
              type="text"
              placeholder="First name"
              aria-describedby="firstname-error"
            />
            <div id="firstname-error" aria-live="polite" aria-atomic="true">
              {state.errors?.firstName &&
                state.errors.firstName.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div>
            <input
              className="p-2 outline outline-1 opacity-50 rounded focus:outline-teal-900 focus:outline-2 focus:opacity-100"
              name="lastName"
              type="text"
              placeholder="Last name"
              aria-describedby="lastname-error"
            />
            <div id="lastname-error" aria-live="polite" aria-atomic="true">
              {state.errors?.lastName &&
                state.errors.lastName.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>

        <div className="relative mb-2">
          <EmailIcon className="pointer-events-none absolute top-5 left-1 transform -translate-y-1/2 left-3" />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-2 pl-10 outline outline-1 opacity-50 rounded focus:outline-teal-900 focus:outline-2 focus:opacity-100"
            aria-describedby="email-error"
          />
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Password */}
        <div className="mb-2">
          <div className="relative">
            <KeyIcon className="pointer-events-none w-6 h-6 absolute top-5 left-1 transform -translate-y-1/2 left-3" />
            <input
              name="password"
              type={showPassword.password ? "text" : "password"}
              placeholder="Password"
              className="peer w-full block p-2 pl-10 appearance-none outline outline-1 opacity-50 rounded focus:outline-teal-900 focus:outline-2 focus:opacity-100"
              aria-describedby="password-error"
            />
            <button
              onClick={() =>
                setShowPassword({
                  password: !showPassword.password,
                  confirmPassword: showPassword.confirmPassword,
                })
              }
              type="button"
              className="absolute right-1 bottom-2"
            >
              {showPassword.password ? (
                <VisibilityOffIcon className="ml-2 text-teal-900" />
              ) : (
                <VisibilityIcon className="ml-2 text-teal-900" />
              )}
            </button>
          </div>
          <div id="password-error" aria-live="polite" aria-atomic="true">
            {state.errors?.password &&
              state.errors.password.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <div className="relative">
            <KeyIcon className="pointer-events-none w-6 h-6 absolute top-5 left-1 transform -translate-y-1/2 left-3" />
            <input
              name="confirmPassword"
              type={showPassword.confirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="peer w-full block p-2 pl-10 appearance-none outline outline-1 opacity-50 rounded focus:outline-teal-900 focus:outline-2 focus:opacity-100"
              aria-describedby="confirmPassword-error"
            />
            <button
              onClick={() =>
                setShowPassword({
                  confirmPassword: !showPassword.confirmPassword,
                  password: showPassword.password,
                })
              }
              type="button"
              className="absolute right-1 bottom-2"
            >
              {showPassword.confirmPassword ? (
                <VisibilityOffIcon className="ml-2 text-teal-900" />
              ) : (
                <VisibilityIcon className="ml-2 text-teal-900" />
              )}
            </button>
          </div>
          <div id="confirmPassword-error" aria-live="polite" aria-atomic="true">
            {state.errors?.confirmPassword &&
              state.errors.confirmPassword.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <SignUp />

        {/* Error Message */}
        <div id="message" aria-live="polite" aria-atomic="true">
          {state.message && (
            <p className="mt-2 text-sm text-red-500" key={state.message}>
              {state.message}
            </p>
          )}
        </div>
      </form>
    </>
  );
}
