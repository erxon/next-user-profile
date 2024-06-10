import { signOut } from "@/auth";
import { fetchUserByEmail, fetchAccount } from "../lib/data";
import { UserIcon } from "@heroicons/react/20/solid";

export default async function User({
  email,
}: {
  email: string | undefined | null;
}) {
  const user = await fetchUserByEmail(email);
  
  if (user) {
    return (
      <div className="flex items-center mb-3 bg-white shadow-md p-2 rounded">
        <div className="mr-3 bg-teal-100 rounded-full">
          <UserIcon className="w-8 h-8"/>
        </div>
        <p className="font-semibold text-sm flex-auto w-54">Hi, {user.name}</p>
        <form action={async () => {
          'use server';
          await signOut();
        }}>
          <button className="text-sm bg-gray-100 transition hover:bg-gray-200 p-1 rounded">Sign out</button>
        </form>
      </div>
    );
  }
}
