"use client";

import TextField from "./components/TextField";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearchTerm(term: string) {
    const params = new URLSearchParams(searchParams);
    if(term) {
        params.set("query", term);
    } else {
        params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="relative w-full md:w-1/2 mb-4">
      <TextField
        style="pl-10"
        name="name"
        placeholder="Search"
        handleChange={handleSearchTerm}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="w-6 h-6 absolute inset-y-0 top-1.5 left-2 text-gray-500" />
    </div>
  );
}
