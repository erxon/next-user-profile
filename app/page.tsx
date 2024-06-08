export default function Home() {
  return (
    <main>
      <div className="w-1/2 mx-auto mt-12">
        <h1 className="text-4xl mb-3">Next JS Starting Template</h1>
        <div className="mb-5">
          <p>
            Features: MongoDB and NextAuth Authentication
          </p>
          <p className="text-slate-500">Made with ❤️ by Ericson Castasus</p>
        </div>

        <div>
          <a
            role="button"
            className="w-10 bg-teal-900 text-white p-2 rounded mr-1"
            href="/login"
          >
            Login
          </a>
          <a
            role="button"
            href="/signup"
            className="outline outline-teal-900 outline-1 p-2 rounded"
          >
            Sign up
          </a>
        </div>
      </div>
    </main>
  );
}
