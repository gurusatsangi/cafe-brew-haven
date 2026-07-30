"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

type Props = {
  onClick: () => void;
  open: boolean;
};

export default function FloatingCart({
  onClick,
  open,
}: Props) {
  const { totalItems} = useCart();

  if (totalItems === 0 || open) return null;
  return (
    <button
      onClick={onClick}
      aria-label="Open Cart"
      className="
      fixed
      right-5
      bottom-5
      z-[9999]
      lg:hidden
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-full
      bg-orange-600
      text-white
      shadow-2xl
      transition-all
      hover:scale-105
      active:scale-95
      "
    >
      <ShoppingCart size={28} />

      <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white ring-2 ring-white">
        {totalItems}
      </span>
    </button>
  );
}