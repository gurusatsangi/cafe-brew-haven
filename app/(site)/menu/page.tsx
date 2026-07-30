import fullMenu from "@/data/fullMenu";
import MenuCard from "@/components/MenuCard";

export default function MenuPage() {
  return (
    <main className="bg-[#FFF9F5] min-h-screen">

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pt-14 sm:px-6 sm:pt-16 lg:px-6 lg:pt-24">

       <div className="text-center">

          {/* Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-gradient-to-r from-orange-50 to-orange-100 px-5 py-2.5 shadow-md sm:gap-3 sm:px-8 sm:py-4">

              <span className="text-lg sm:text-2xl">☕</span>

              <span className="text-sm font-extrabold uppercase tracking-[0.15em] text-orange-600 sm:text-xl sm:tracking-[0.2em]">
                OUR MENU
              </span>

            </span>
          </div>

          {/* Heading */}

          <h1 className="mt-6 text-3xl font-extrabold leading-tight text-gray-900 sm:mt-8 sm:text-5xl md:text-6xl">
            Freshly Brewed Coffee
            <br />

            <span className="text-orange-600">
              & Delicious Food
            </span>

          </h1>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-9">
            Explore our handcrafted coffee, freshly prepared meals,
            signature burgers, artisan pizzas, creamy pasta,
            delicious desserts and refreshing beverages,
            made fresh every single day.
          </p>

        </div>
      </section>

      {/* Menu Grid */}

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-6 lg:py-20">

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">

          {fullMenu.map((item) => (
            <MenuCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}

        </div>

      </section>

    </main>
  );
}