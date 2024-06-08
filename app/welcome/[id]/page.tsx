import { fetchUserById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const user = await fetchUserById(params.id);

  if (!user) {
    notFound();
  }

  const { email, firstName, lastName } = user;

  return (
    <>
      <div className="w-1/2 mx-auto mt-12">
        <Link href="/welcome" className="text-teal-900 font-medium">
          Back
        </Link>
        <h1 className="mb-2 font-medium">User</h1>
        <p>
          {firstName} {lastName}
        </p>
        <p>{email}</p>
      </div>
    </>
  );
}
