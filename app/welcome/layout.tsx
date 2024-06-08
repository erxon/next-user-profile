import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Header */}
      <div className="h-16 flex items-center pl-10">
        <p className="font-bold text-xl">Next Skeleton Project</p>
      </div>
      {/* Side navigation */}
      <div className="grid grid-cols-12">
        <nav className="col-span-2">
            <Link href="#">Home</Link>
            <Link href="#">Profile</Link>
            <Link href="#">Users</Link>
        </nav>
        <div className="col-span-10">{children}</div>
      </div>
    </>
  );
}
