"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import {
  hashPassword,
  isEmailExist,
  isPasswordMatch,
} from "./utilities/auth-utils";
import { isEmpty } from "./utilities/for-form";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { create } from "./database/user-db";

const FormSchema = z.object({
  firstName: z.string({
    invalid_type_error: "Please add a first name.",
  }),
  lastName: z.string({
    invalid_type_error: "Please add a last name.",
  }),
  email: z.string({
    invalid_type_error: "Please add an email.",
  }),
  password: z.string({
    invalid_type_error: "Please add a password.",
  }),
  confirmPassword: z.string({
    invalid_type_error: "Confirm your password.",
  }),
});

export type State = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string | null;
};

export async function createUser(prevState: State, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    firstName: isEmpty("firstName", formData)
      ? null
      : formData.get("firstName"),
    lastName: isEmpty("firstName", formData) ? null : formData.get("lastName"),
    email: isEmpty("email", formData) ? null : formData.get("email"),
    password: isEmpty("password", formData) ? null : formData.get("password"),
    confirmPassword: isEmpty("confirmPassword", formData)
      ? null
      : formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User",
    };
  }

  const { firstName, lastName, email, password, confirmPassword } =
    validatedFields.data;

  //check if email is unique
  if (await isEmailExist(email)) {
    return {
      message: "Email already exists",
    };
  }
  //compare confirm password and password
  if (!isPasswordMatch(password, confirmPassword)) {
    return {
      message: "Password didn't match",
    };
  }

  //encrypt password
  let id: string;
  try {
    const encryptedPassword = await hashPassword(password);
    const newUser = await create({
      email: email,
      name: `${firstName} ${lastName}`,
      hash: encryptedPassword.hash,
      salt: encryptedPassword.salt,
    });

    id = newUser.id;
  } catch (error) {
    return { message: `${error}` };
  }

  revalidatePath("/welcome");
  redirect(`/welcome`);
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    revalidatePath("/welcome");
    redirect("/welcome");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}


export async function signOutTrigger() {
  const result = await signOut({ redirect: false, redirectTo: "/login" });
  redirect(result.redirect);
}
