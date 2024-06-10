'use client';

import { useState } from "react";
import TextField from "./TextField";
import { FieldTypes } from "./types";
import { EyeIcon } from "@heroicons/react/24/outline";
import { EyeSlashIcon } from "@heroicons/react/24/outline";

export default function PasswordField(props: FieldTypes) {
  const [isVisible, setVisibility] = useState(false);

  return (
    <div className={`relative w-full ${props.style}`}>
      <TextField
        type={isVisible ? "text" : "password"}
        name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
      <button disabled={props.disabled} type="button" onClick={() => setVisibility(!isVisible)} className="text-neutral-900 absolute inset-y-0 right-1 top-0.5">
        {isVisible ? <EyeSlashIcon className="w-6 h-6" /> : <EyeIcon className="w-6 h-6" />}
      </button>
    </div>
  );
}
