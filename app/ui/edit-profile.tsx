"use client";

import FileUpload from "./components/FileUpload";
import TextField from "./components/TextField";
import PasswordField from "./components/PasswordField";
import { useFormState } from "react-dom";
import { updateUser } from "../lib/actions";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

interface EditProfileFormProps {
  withProvider?: boolean;
  firstName?: string;
  lastName?: string;
  image?: string;
}

export default function EditProfileForm(props: EditProfileFormProps) {
  const initialState = { message: "", success: false, errors: {} };
  const [state, dispatch] = useFormState(updateUser, initialState);

  return (
    <>
      <form action={dispatch} className="relative">
        <div className="flex flex-col w-1/2">
          {!props.withProvider && <FileUpload image={props.image} />}

          <div className="w-full">
            {/* Name */}
            <div className="mb-2 flex">
              <div className="w-full mr-2">
                <label htmlFor="firstName" className="text-sm">
                  First name
                </label>
                <TextField
                  name="firstName"
                  placeholder="First Name"
                  defaultValue={props.firstName}
                />
                {state.errors?.firstName &&
                  state.errors?.firstName.map((error: string) => {
                    return (
                      <p className="text-red-300" key={uuidv4()}>
                        {error}
                      </p>
                    );
                  })}
              </div>
              <div className="w-full">
                <label htmlFor="lastName" className="text-sm">
                  Last name
                </label>
                <TextField
                  name="lastName"
                  placeholder="Last Name"
                  defaultValue={props.lastName}
                />
              </div>
            </div>
          </div>
          {/* Password fields */}
          <div className="mt-3">
            <p className="font-medium mb-2">Change Panpssword</p>
            <div className="flex mb-1">
              <PasswordField
                name="password"
                placeholder="Password"
                style="mr-2"
                disabled={props.withProvider}
              />
              <PasswordField
                name="password"
                placeholder="Confirm password"
                disabled={props.withProvider}
              />
            </div>
            {props.withProvider && (
              <p className="text-gray-500 text-sm">
                You have signed up using a provider
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="inline-block px-3 py-1 mt-4 rounded outline outline-1 outline-gray-900 text-black transition hover:bg-gray-900 hover:text-white"
        >
          Save
        </button>
      </form>
      {state.success ? (
        <div className="mt-3 text-sm bg-green-300 rounded p-3 shadow w-fit">
          <p>{state.message}</p>
        </div>
      ) : (
        state.message && (
          <div className="mt-3 text-sm bg-red-300 rounded p-3 shadow w-fit">
            <p>{state.message}</p>
          </div>
        )
      )}
    </>
  );
}
