export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FFF9F5]">
      <div className="flex flex-col items-center">

        {/* Coffee Cup */}
        <div className="animate-bounce text-6xl">
          ☕
        </div>

        {/* Brand */}
        <h2 className="mt-6 text-3xl font-extrabold text-orange-600">
          Brew Haven
        </h2>

        <p className="mt-2 text-gray-500">
          Brewing your experience...
        </p>

        {/* Loading Bar */}
        <div className="mt-8 h-2 w-56 overflow-hidden rounded-full bg-orange-100">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-orange-600"></div>
        </div>

      </div>
    </main>
  );
}