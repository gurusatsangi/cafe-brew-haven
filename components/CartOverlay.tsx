"use client";

import FloatingCart from "./FloatingCart";
import CartDrawer from "./CartDrawer";
import { useCart } from "@/context/CartContext";

export default function CartOverlay() {
  const {
    isCartOpen,
    openCart,
    closeCart,
  } = useCart();

  return (
    <>
      <FloatingCart
        open={isCartOpen}
        onClick={openCart}
      />

      <CartDrawer
        open={isCartOpen}
        onClose={closeCart}
      />
    </>
  );
}