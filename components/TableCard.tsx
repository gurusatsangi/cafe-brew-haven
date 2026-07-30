"use client";

import Image from "next/image";

type Props = {
  id: number;
  name: string;
  image: string;
  capacity: string;
  location: string;
  reservationFee: number;
  description: string;
  badge?: string;
  onBook: (id: number) => void;
};

export default function TableCard({
  id,
  name,
  image,
  capacity,
  location,
  reservationFee,
  description,
  badge,
  onBook,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      
      {/* Left Content */}
      <div className="flex-1 w-full">
        {badge && (
          <span className="mb-2 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
            🔥 {badge}
          </span>
        )}

        <h3 className="text-2xl font-bold text-gray-900">
          {name}
        </h3>

        <p className="mt-3 text-sm text-gray-600">
          👥 {capacity}
        </p>

        <p className="mt-1 text-sm text-gray-600">
          📍 {location}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-lg font-bold text-orange-600">
            {reservationFee === 0
              ? "FREE Reservation"
              : `₹${reservationFee} Reservation`}
          </span>

          <button
            onClick={() => onBook(id)}
            className="rounded-xl bg-orange-600 px-6 py-2 font-semibold text-white transition hover:bg-orange-700"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative h-40 w-full overflow-hidden rounded-2xl md:h-40 md:w-60 flex-shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}