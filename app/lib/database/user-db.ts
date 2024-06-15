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
  hash?: string;
  salt?: string;
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

export async function update(
  email: string | null | undefined,
  updates: UpdateParams
) {
  try {
    await dbConnect();
    const updateUser = await User.findOneAndUpdate(
      { email: email },
      { ...updates }
    );
    return updateUser;
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export async function getAll(query: string) {
  try {
    await dbConnect();

    let users;
    if (query) {
      const regex = new RegExp(String.raw`${query}`, "i");
      users = await User.find({ name: regex });
    } else {
      users = await User.find();
    }
    return users;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
