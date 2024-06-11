import React from "react";
import EditProfileForm from "@/app/ui/edit-profile";
import { auth } from "@/auth";
import { fetchAccount, fetchUserByEmail } from "@/app/lib/data";

export default async function Page() {
  const session = await auth();
  if (!session?.user) return;

  const user = await fetchUserByEmail(session?.user?.email);
  const userId = user ? user.id : null;
  const account = await fetchAccount(userId);
  const withProvider : boolean = account && account.provider;
  const name = user?.name.split(" ");

  return (
    <main className="p-3 relative">
      <h1 className="mb-12">Profile</h1>
      <EditProfileForm
        firstName={name[0]}
        lastName={name[1]}
        image={user?.image}
        withProvider={withProvider}
      />
    </main>
  );
}
