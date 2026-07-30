import menu from "@/data/menu";
import MenuCard from "./MenuCard";

export default function Menu() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 pb-36">

      <div className="mt-16 text-center lg:mt-40">

        <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold text-orange-600 sm:px-5 sm:text-sm">
          Our Special Menu
        </span>

        <h2 className="mt-5 text-3xl font-black text-gray-900 sm:text-4xl lg:text-5xl">
          Popular Dishes
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:mt-6">
          Carefully prepared with fresh ingredients and rich flavors to give
          you the perfect café experience.
        </p>

      </div>

     <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">

          {menu.map((item) => (
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
  );
}