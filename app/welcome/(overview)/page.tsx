import { redirect } from "next/navigation";
import { signOut, auth } from "@/auth";
import { Suspense } from "react";
import { UserLoading } from "@/app/ui/loading";
import User from "@/app/ui/user";

export default async function Page() {
  const session = await auth();

  console.log(session)

  if (!session?.user) return null;
  const email = session?.user?.email;

  return (
    <main>
      <div className="mt-12 w-2/3 sm:w-1/2 lg:w-1/3 mx-auto rounded p-5 shadow-lg text-center">
        <p className="font-medium text-lg mb-4">Welcome</p>
        <Suspense fallback={<UserLoading />}>
          <User email={email} />
        </Suspense>
        {/* Signout */}
        <form
          action={async () => {
            "use server";

            await signOut({ redirect: false });
            redirect("/login");
          }}
          className="mt-4"
        >
          <button className="font-semibold text-teal-900">Sign out</button>
        </form>
      </div>
    </main>
  );
}
