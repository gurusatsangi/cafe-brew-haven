import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FFF9F5] px-6">
      <div className="max-w-xl text-center">

        <div className="text-8xl">☕</div>

        <h1 className="mt-6 text-6xl font-extrabold text-orange-600">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Oops! Page Not Found
        </h2>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Looks like this page has gone for a coffee break.
          Let's get you back to something delicious.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-xl bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}