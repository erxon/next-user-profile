import bcrypt from "bcrypt";
import User from "../models/User";
import dbConnect from "../db-connect";
import { errors } from "./errors";

export async function hashPassword(password: string) {
  try {
    const salt = await bcrypt.genSalt(1);
    const hash = await bcrypt.hash(password, salt);

    return { salt: salt, hash: hash };
  } catch (error) {
    throw new Error("Encryption Error");
  }
}

export async function isEmailExist(email: string) {
  try {
    await dbConnect();
    const user = await User.findOne({ email: email });
    if (user) return true;
  } catch (error) {
    throw new Error(errors.fetchUserError);
  }
}

export function isPasswordMatch(password: string, confirmPassword: string) {
  if (password !== confirmPassword) {
    return false;
  }
  return true;
}
