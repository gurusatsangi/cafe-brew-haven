"use client";

import {
  X,
  Minus,
  Plus,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { siteConfig } from "@/lib/site";

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({
  open,
  onClose,
}: CartDrawerProps) {
  const {
    cart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const handleOrder = () => {
  if (cart.length === 0) return;

  const items = cart
    .map(
      (item) =>
        `• ${item.name} x${item.quantity} = ₹${item.price * item.quantity}`
    )
    .join("\n");

  const message = `Hi Brew Haven,

        I'd like to order:

        ${items}

        Total: ₹${totalPrice}

        Thank you!`;

        window.open(
            `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-[120%] pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-2xl font-bold">Your Cart</h2>

          <button onClick={onClose}>
            <X size={28} />
          </button>
        </div>

        <div className="flex h-[calc(100%-80px)] flex-col">
          <div className="flex-1 overflow-y-auto p-5">
            {cart.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="mb-4 text-6xl">🛒</div>

                    <h3 className="text-xl font-semibold">
                        Your cart is empty
                    </h3>

                    <p className="mt-2 text-gray-500">
                        Add something delicious from our menu.
                    </p>

                    <button
                        onClick={onClose}
                        className="mt-6 rounded-lg bg-orange-600 px-6 py-3 font-medium text-white hover:bg-orange-700"
                    >
                        Browse Menu
                    </button>
                    </div>
            ) : (
              cart.map((item) => (
                <div
                    key={item.id}
                    className="mb-3 rounded-xl border border-gray-200 px-4 py-3 shadow-sm"
                >
                    <div className="flex items-center gap-3">
                    {/* Name */}
                    <div className="min-w-0 flex-1">
                        <h3 className="truncate font-medium text-gray-900">
                        ☕ {item.name}
                        </h3>
                    </div>

                    {/* Price */}
                    <span className="font-semibold text-orange-600 whitespace-nowrap">
                        ₹{item.price}
                    </span>

                    {/* Quantity */}
                    <div className="flex items-center rounded-full border">
                        <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-2 py-1 hover:bg-gray-100"
                        >
                        <Minus size={14} />
                        </button>

                        <span className="w-7 text-center text-sm font-semibold">
                        {item.quantity}
                        </span>

                        <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-2 py-1 hover:bg-gray-100"
                        >
                        <Plus size={14} />
                        </button>
                    </div>

                    {/* Remove */}
                    <button
                        onClick={() => removeFromCart(item.id)}
                        className="rounded-full p-1 text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                    >
                        <X size={18} />
                    </button>
                    </div>
                </div>
                ))
            )}
          </div>
            {cart.length > 0 && (
                <div className="border-t p-5">
                    <div className="space-y-2 text-sm">

                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₹{totalPrice}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Packaging</span>
                        <span>₹20</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Delivery</span>
                        <span>FREE</span>
                    </div>

                    <hr />

                    <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>₹{totalPrice + 20}</span>
                    </div>

                    </div>

                    <button
                    onClick={handleOrder}
                    className="mt-5 w-full rounded-xl bg-orange-600 py-4 font-semibold text-white hover:bg-orange-700"
                    >
                    Order Now
                    </button>
                </div>
            )}
        </div>
      </aside>
    </>
  );
}