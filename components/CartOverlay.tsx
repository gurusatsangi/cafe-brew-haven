"use client";

import { useState } from "react";
import CartDrawer from "./CartDrawer";
import FloatingCart from "./FloatingCart";

export default function CartOverlay() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <FloatingCart
        open={cartOpen}
        onClick={() => setCartOpen(true)}
        />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
}