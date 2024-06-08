import React, {Suspense} from "react";
import { auth } from "@/auth";
import Navigation from "../ui/navigation";
import { UserLoading } from "../ui/loading";
import User from "../ui/user";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const user = session?.user;

  return (
    <>
      {/* Header */}
      <div className="h-16 flex items-center pl-10">
        <p className="font-bold text-xl">Next Skeleton Project</p>
      </div>
      {/* Side navigation */}
      <div className="grid grid-cols-12">
        <div className="col-span-3 p-5 h-screen hidden lg:block">
          <Suspense fallback={<UserLoading />}>
            <User email={user?.email} />
          </Suspense>
          <Navigation />
        </div>
        <div className="col-span-9">{children}</div>
      </div>
    </>
  );
}
