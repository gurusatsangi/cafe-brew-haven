export type TableType = {
  id: number;
  name: string;
  image: string;
  capacity: string;
  location: string;
  reservationFee: number;
  description: string;
};

export const tables: TableType[] = [
  {
    id: 1,
    name: "Couple Table",
    image: "/tables/couple.jpg",
    capacity: "2 Guests",
    location: "Window Side",
    reservationFee: 0,
    description: "Perfect for couples.",
  },
  {
    id: 2,
    name: "Family Table",
    image: "/tables/family.jpg",
    capacity: "4–6 Guests",
    location: "AC Hall",
    reservationFee: 200,
    description: "Best for family dining.",
  },
  {
    id: 3,
    name: "Birthday Table",
    image: "/tables/birthday.jpg",
    capacity: "6–8 Guests",
    location: "Decorated Area",
    reservationFee: 500,
    description: "Birthday decoration included.",
  },
  {
    id: 4,
    name: "Outdoor Table",
    image: "/tables/outdoor.jpg",
    capacity: "2–4 Guests",
    location: "Garden",
    reservationFee: 100,
    description: "Open-air seating.",
  },
];