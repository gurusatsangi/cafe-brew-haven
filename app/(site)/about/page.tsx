import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#FFF9F5] min-h-screen">

      <section className="max-w-7xl mx-auto px-6 py-24">

        {/* Heading */}
        <div className="text-center">

          <span className="inline-flex items-center rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
            ☕ About Brew Haven
          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-gray-900">
            Crafted with Passion Since 2015
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We believe every cup tells a story. From carefully selected coffee
            beans to handcrafted meals, every experience is created with
            passion, quality and genuine hospitality.
          </p>

        </div>

        {/* Image */}

        <div className="mt-16 overflow-hidden rounded-[32px] shadow-2xl">

          <Image
            src="/images/about.png"
            alt="Cafe Interior"
            width={1600}
            height={1000}
            className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
            priority
          />

        </div>

        {/* Features */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-4xl">🌿</div>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Fresh Ingredients
            </h3>

            <p className="mt-3 text-gray-600">
              Every dish is prepared using carefully selected premium
              ingredients.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-4xl">☕</div>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Expert Baristas
            </h3>

            <p className="mt-3 text-gray-600">
              Every coffee is handcrafted with precision by experienced
              baristas.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-4xl">🏡</div>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Cozy Atmosphere
            </h3>

            <p className="mt-3 text-gray-600">
              A warm and relaxing place to enjoy coffee, food and memorable
              moments.
            </p>
          </div>

        </div>

        {/* Button */}

        <div className="mt-16 flex justify-center">

          <Link
            href="/menu"
            className="rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-700"
          >
            Explore Our Menu →
          </Link>

        </div>

      </section>

    </main>
  );
}