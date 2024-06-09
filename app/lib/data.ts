import User from "./models/User";
import Account from "./models/Account";
import dbConnect from "./db-connect";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchUserById(id: string) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    return null;
  }
}

export async function fetchUserByEmail(email: string | undefined | null) {
  try {
    noStore();
    await dbConnect();
    const user = await User.findOne({ email: email });
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: email,
      name: user.name,
      image: user.image,
    };
  } catch (error) {
    return null;
  }
}

export async function fetchAccount(id: string){
  try {
    noStore();
    const account = await Account.findOne({userId: id});

    console.log(account)
    return {
      provider: account.provider
    }
  } catch (error) {
    return null;
  }
}

export async function fetchUsers() {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("No users");
  }
}
