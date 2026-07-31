"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { totalItems, openCart } = useCart();
  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-[#FFF9F5]/90 backdrop-blur-xl shadow-sm rounded-b-2xl">
      <nav className="max-w-7xl mx-auto h-16 lg:h-[72px] px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
         className="text-[2rem] font-extrabold tracking-tight text-orange-600 transition-colors hover:text-orange-700"
        >
          Brew Haven
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10">
         {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`relative inline-block py-2 text-[17px] font-medium transition-colors duration-300
                    after:absolute after:left-0 after:bottom-0 after:h-[2px]
                    after:bg-orange-600 after:transition-all after:duration-300
                    ${
                      isActive
                        ? "text-orange-600 after:w-full"
                        : "text-gray-700 hover:text-orange-600 after:w-0 hover:after:w-full"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
          <button
            onClick={openCart}
            className="relative hidden md:flex items-center justify-center rounded-xl p-3 transition hover:bg-orange-100"
          >
            <ShoppingCart size={28} />

            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>
        {/* Mobile Menu Button */}

        <button
          onClick={() => setMobileMenuOpen(true)}
          className="rounded-xl p-2 text-gray-700 transition hover:bg-orange-100 md:hidden"
          aria-label="Open menu"
        >
          <Menu size={30} />
        </button>
      </nav>
      {/* Mobile Drawer */}

      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
           className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden"
          />

          {/* Drawer */}
          <aside
            className="fixed top-0 right-0 z-50 flex h-screen w-80 translate-x-0 flex-col bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden"
          >

            {/* Header */}
            <div className="flex items-center justify-between border-b border-orange-100 p-6">

             <div>
              <h2 className="text-2xl font-extrabold text-orange-600">
                Brew Haven
              </h2>

              <p className="text-sm tracking-[0.2em] uppercase text-gray-500">
                Premium Café
              </p>
            </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-2 hover:bg-orange-100"
              >
                <X size={28} />
              </button>

            </div>

            {/* Links */}

            <nav className="flex flex-1 flex-col p-6">

              {navLinks.map((link) => {

                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                   className={`rounded-xl px-5 py-4 text-lg font-medium transition-all duration-300 ${
                      isActive
                        ? 
                        "border-l-4 border-orange-600 bg-orange-50 font-semibold text-orange-600"
                        : "text-gray-700 hover:bg-orange-100 hover:translate-x-2 hover:text-orange-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                );

              })}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCart();
                }}
                className="relative mt-auto flex items-center justify-center gap-2 rounded-xl border border-orange-200 py-4 text-lg font-semibold text-orange-600"
              >
                <ShoppingCart size={24} />

                Cart

                {totalItems > 0 && (
                  <span className="rounded-full bg-orange-600 px-2 py-1 text-xs text-white">
                    {totalItems}
                  </span>
                )}
              </button>

            </nav>

          </aside>
        </>
      )}

    </header>
  );
}