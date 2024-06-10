import dbConnect from "../db-connect";
import User from "../models/User";

interface User {
  email: string;
  name: string;
  hash: string;
  salt: string;
}

interface UpdateParams {
  name?: string;
  image?: string;
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

export async function update(email: string | null | undefined, updates: UpdateParams) {
  try {
    await dbConnect();
    const updateUser = await User.findOneAndUpdate({ email: email }, {...updates});
    return updateUser;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
