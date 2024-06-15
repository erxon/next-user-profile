"use client";

import React, { useState, useEffect } from "react";
import Navigation from "../ui/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { signOutTrigger } from "../lib/actions";
import { UserIcon } from "@heroicons/react/24/outline";
import MobileNav from "../ui/components/MobileNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/* Header */}
      <div className="h-16 flex items-center pl-10 lg:shadow-sm">
        <p className="font-bold text-xl grow">Next Skeleton Project</p>
        <form action={signOutTrigger}>
          <button className="block mx-5 p-1.5 rounded bg-gray-200 text-sm ">
            Sign out
          </button>
        </form>
      </div>
      {/* Side navigation */}
      <div className="grid grid-cols-12 relative">
        <div className="col-span-3 p-5 h-screen hidden lg:block">
          <Navigation />
        </div>
        <MobileNav className="w-screen lg:hidden shadow-sm pb-3" />
        <div className="col-span-12 lg:col-span-9 p-5">{children}</div>
      </div>
    </section>
  );
}
