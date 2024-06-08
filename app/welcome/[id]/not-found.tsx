import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-center gap-2">
        <h1>404 Page not found</h1>
        <Link className="bg-teal-900 p-2 rounded text-white" href="/welcome">Home</Link>
      </main>
    </>
  );
}
