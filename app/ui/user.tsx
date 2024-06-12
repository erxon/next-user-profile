import { signOut } from "@/auth";
import { fetchUserByEmail, fetchAccount } from "../lib/data";
import { UserIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { auth } from "@/auth";
import { signOutTrigger } from "../lib/actions";

export default async function User() {
  const session = await auth();
  const email = session?.user?.email;
  const user = await fetchUserByEmail(email);
  const account = await fetchAccount(user?.id);

  if (user) {
    return (
      <div className="flex items-center mb-3 bg-white shadow-md p-2 rounded">
        <div className="mr-3 bg-teal-100 rounded-full">
          {account ? (
            <Image
              className="w-[48px] h-[48px] rounded-full"
              width={1000}
              height={1000}
              alt="avatar"
              src={user?.image}
            />
          ) : user?.image ? (
            <Image
              className="w-[48px] h-[48px] rounded-full avatar"
              width={1000}
              height={1000}
              alt="avatar"
              src={user?.image}
            />
          ) : (
            <UserIcon className="w-[48px] h-[48px]" />
          )}
        </div>
        <p className="font-semibold text-sm flex-auto w-54">Hi, {user.name}</p>
        <form
          action={signOutTrigger}
        >
          <button className="text-sm bg-gray-100 transition hover:bg-gray-200 p-1 rounded">
            Sign out
          </button>
        </form>
      </div>
    );
  }
}
