import dbConnect from "../db-connect";
import User from "../models/User";

interface User {
  email: string;
  name: string;
  hash: string;
  salt: string;
}

export async function create(user: User) {
  try {
    await dbConnect();
    const newUser = new User({ ...user, createdAt: new Date() });
    const data = await newUser.save();
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
