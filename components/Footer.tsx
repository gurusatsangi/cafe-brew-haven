import Link from "next/link";
import {
  Coffee,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#2B1D17] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-orange-500 p-3">
                <Coffee size={28} />
              </div>

              <h2 className="text-3xl font-bold">
                Brew Haven
              </h2>
            </div>

            <p className="mt-5 leading-8 text-gray-300">
              Freshly brewed coffee, handcrafted beverages, and delicious
              food served in a cozy atmosphere where every visit feels
              special.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 transition hover:text-orange-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="mt-1 text-orange-400"
                />
                <p className="text-gray-300">
                  123 Coffee Street
                  <br />
                  Darbhanga, Bihar
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="text-orange-400"
                />
                <p className="text-gray-300">
                  +91 98765 43210
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="text-orange-400"
                />
                <p className="text-gray-300">
                  hello@brewhaven.com
                </p>
              </div>

            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold">
              Opening Hours
            </h3>

            <div className="mt-6 space-y-5">

              <div>
                <p className="font-medium">
                  Monday – Friday
                </p>

                <p className="mt-1 text-gray-300">
                  8:00 AM – 10:00 PM
                </p>
              </div>

              <div>
                <p className="font-medium">
                  Saturday – Sunday
                </p>

                <p className="mt-1 text-gray-300">
                  9:00 AM – 11:00 PM
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

          <div className="text-center md:text-left">

            <p className="text-sm text-gray-400">
              © 2026 Brew Haven. All Rights Reserved.
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Designed & Developed by{" "}
              <span className="font-semibold text-orange-400">
                Guru Prasad
              </span>
            </p>

          </div>

          <div className="flex items-center gap-4">

            <a
              href="#"
              className="rounded-full bg-white/10 p-3 transition duration-300 hover:bg-orange-500"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="rounded-full bg-white/10 p-3 transition duration-300 hover:bg-orange-500"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="rounded-full bg-white/10 p-3 transition duration-300 hover:bg-orange-500"
            >
              <FaXTwitter size={18} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}