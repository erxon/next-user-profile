import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { UsersIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function MobileNav({ className }: { className: string }) {
  const pathname = usePathname();

  return (
    <nav className={`flex gap-4 px-5 ${className}`}>
      <Link
        href="/welcome"
        className={clsx(
          "hover:bg-gray-100 flex flex-col items-center rounded p-2",
          pathname === "/welcome" && "bg-gray-100"
        )}
      >
        <HomeIcon className="w-6 h-6" />
        Home
      </Link>
      <Link
        href="/welcome/profile"
        className={clsx(
          "hover:bg-gray-100 flex flex-col items-center rounded p-2",
          pathname === "/welcome/profile" && "bg-gray-100"
        )}
      >
        <UserCircleIcon className="w-6 h-6" />
        Profile
      </Link>
      <Link
        href="/welcome/users"
        className={clsx(
          "hover:bg-gray-100 flex flex-col items-center rounded p-2",
          pathname === "/welcome/users" && "bg-gray-100"
        )}
      >
        <UsersIcon className="w-6 h-6" />
        Users
      </Link>
    </nav>
  );
}
