"use client";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

type MenuCardProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function MenuCard({
  id,
  name,
  description,
  price,
  image,
}: MenuCardProps){
    const { addToCart } = useCart();
  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Food Image */}
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={320}
         className="h-56 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-64"
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 lg:p-7">

        <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
          {name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between gap-3 sm:mt-8">

          <span className="text-2xl font-bold text-orange-600 sm:text-3xl">
            ₹{price}
          </span>

          <button
            onClick={() =>
              addToCart({
                id,
                name,
                price,
              })
            }
            className="rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-700 hover:shadow-lg active:scale-95 sm:px-5 sm:py-3 sm:text-base"
          >
            Add to Cart
          </button>

        </div>

      </div>

    </article>
  );
}