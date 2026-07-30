import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-6 lg:py-20">

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left Content */}
        <div className="max-w-2xl text-center lg:pr-8 lg:text-left">

          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold tracking-wide text-orange-600 shadow-sm sm:px-5 sm:text-sm lg:mb-8">
            ☕ Freshly Brewed Every Day
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-[-0.03em] text-gray-900 sm:text-5xl lg:text-7xl lg:leading-[1.08]">
            Fresh Coffee
            <br />
            &
            <span className="text-orange-600"> Delicious Food</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0 lg:mt-8 lg:text-[20px] lg:leading-10">
            Discover handcrafted coffee, delicious meals, and a warm atmosphere
            where every cup is brewed with passion and every bite is unforgettable.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start lg:gap-6 lg:mt-12">

            <Link
              href="/menu"
              className="rounded-xl bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl"
            >
              View Menu
            </Link>

            <Link href="/book-table">
              <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Book Table
              </button>
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-4 text-center lg:mt-20 lg:flex lg:gap-10 lg:text-left">

            <div>
              <h3 className="text-3xl font-bold text-gray-900">10K+</h3>
              <p className="text-gray-500">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-500">Menu Items</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">4.9★</h3>
              <p className="text-gray-500">Customer Rating</p>
            </div>

          </div>

        </div>

        {/* Right Image */}
         <div className="order-first relative flex justify-center lg:order-last lg:justify-end">

          <div className="absolute -z-10 h-72 w-72 rounded-full bg-orange-100 opacity-70 blur-3xl sm:h-96 sm:w-96 lg:h-[420px] lg:w-[420px]"></div>

          <Image
            src="/images/hero.jpg"
            alt="Cafe Interior"
            width={560}
            height={700}
            priority
            className="h-[420px] w-full max-w-sm rounded-[28px] object-cover shadow-2xl sm:h-[520px] sm:max-w-md lg:h-[680px] lg:max-w-[560px] lg:rounded-[32px]"
          />

        </div>

      </div>
    </section>
  );
}