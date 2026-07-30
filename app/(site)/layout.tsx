import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import CartOverlay from "@/components/CartOverlay";
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <Navbar />

      <main className="pt-20 overflow-x-hidden">
        {children}
      </main>

      <CartOverlay />

      <Footer />
    </CartProvider>
  );
}