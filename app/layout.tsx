import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cafe-brew-haven-nine.vercel.app"),

  title: {
    default: "Brew Haven | Premium Café",
    template: "%s | Brew Haven",
  },

  description:
    "Brew Haven is a modern café serving handcrafted coffee, delicious food, desserts, and refreshing beverages in a warm and cozy atmosphere.",

  keywords: [
    "Cafe",
    "Coffee",
    "Restaurant",
    "Burger",
    "Pizza",
    "Pasta",
    "Dessert",
    "Brew Haven",
  ],

  authors: [
    {
      name: "Guru Prasad",
    },
  ],

  creator: "Guru Prasad",

  openGraph: {
    title: "Brew Haven | Premium Café",
    description:
      "Fresh coffee, delicious food, and a cozy café experience.",

    url: "https://cafe-brew-haven-nine.vercel.app",

    siteName: "Brew Haven",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Brew Haven | Premium Café",
    description:
      "Fresh coffee, delicious food, and a cozy café experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans overflow-x-hidden">
        {children}

        <Analytics />
      </body>
    </html>
  );
}