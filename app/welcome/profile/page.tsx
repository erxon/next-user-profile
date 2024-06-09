import FileUpload from "@/app/ui/components/FileUpload";
import PasswordField from "@/app/ui/components/PasswordField";
import TextField from "@/app/ui/components/TextField";
import React from "react";

export default function Page() {
  return (
    <main className="p-3">
      <h1 className="mb-12">Profile</h1>
      <form>
        <div className="flex flex-col w-fit">
          <FileUpload />
          <div className="w-fit">
            {/* Name */}
            <div className="mb-2 flex">
              <TextField
                name="firstName"
                placeholder="First Name"
                style="mr-2"
              />
              <TextField name="lastName" placeholder="Last Name" />
            </div>

            {/* Email */}
            <TextField name="email" placeholder="Email" style="mr-2 mb-2" />
          </div>
          {/* Password fields */}
          <div className="mt-3">
            <p className="font-medium mb-2">Change Password</p>
            <div className="flex">
              <PasswordField
                name="password"
                placeholder="Password"
                style="mr-2"
              />
              <PasswordField name="password" placeholder="Confirm password" />
            </div>
          </div>
        </div>
        <button className="inline-block p-2 mt-3 rounded outline outline-1 outline-gray-900 text-black transition hover:bg-gray-900 hover:text-white">
          Save
        </button>
      </form>
    </main>
  );
}
