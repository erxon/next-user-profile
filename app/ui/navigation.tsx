"use client";

import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { UsersIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navigation({className} : {className?: string}) {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <Link
        href="/welcome"
        className={clsx(
          "flex items-center p-2 mb-1 transition hover:bg-gray-100 rounded",
          {
            "bg-gray-100": pathname === "/welcome",
          }
        )}
      >
        <HomeIcon className="w-6 h-6 mr-2" />
        Home
      </Link>
      <Link
        href="/welcome/profile"
        className={clsx(
          "flex items-center p-2 mb-1 transition hover:bg-gray-100 rounded",
          {
            "bg-gray-100": pathname === "/welcome/profile",
          }
        )}
      >
        <UserCircleIcon className="w-6 h-6 mr-2" />
        Profile
      </Link>
      <Link
        href="/welcome/users"
        className={clsx(
          "flex items-center p-2 mb-1 transition hover:bg-gray-100 rounded",
          {
            "bg-gray-100": pathname === "/welcome/users",
          }
        )}
      >
        <UsersIcon className="w-6 h-6 mr-2" />
        Users
      </Link>
    </nav>
  );
}
