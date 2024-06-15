import Users from "@/app/ui/users";
import { Suspense } from "react";
import Search from "@/app/ui/search";

export default async function Page({searchParams} : {
  searchParams?: {
    query?: string;
  }
}) {
  const query = searchParams?.query || '';
  console.log(query)
  return (
    <main className="p-3">
      <h1 className="mb-3">Users</h1>
      <Search />
      <Suspense fallback={<div>Loading...</div>}>
        <Users query={query} />
      </Suspense>
    </main>
  );
}
