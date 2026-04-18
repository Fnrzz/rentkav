import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "RentKav | Reliable Car & Motorcycle Rental in Surakarta",
  description:
    "Experience peace of mind on every journey with RentKav. We offer well-maintained MPVs, Sedans, and Motorcycles with transparent pricing and 24/7 support in Surakarta and beyond.",
  keywords: [
    "RentKav",
    "Car Rental Surakarta",
    "Sewa Mobil Solo",
    "Motorcycle Rental Surakarta",
    "Sewa Motor Solo",
    "Vehicle Rental",
    "Rent Car",
  ],
  authors: [{ name: "Kavdra Studio" }],
  creator: "Kavdra Studio",
  openGraph: {
    title: "RentKav | Reliable Car & Motorcycle Rental",
    description:
      "Quality cars, transparent pricing, and reliable service in Surakarta. Book your vehicle today!",
    url: "https://rentkav.vercel.app",
    siteName: "RentKav",
    images: [
      {
        url: "/hero.avif",
        width: 1200,
        height: 630,
        alt: "RentKav Car Rental",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RentKav | Reliable Car & Motorcycle Rental",
    description:
      "Quality cars, transparent pricing, and reliable service in Surakarta.",
    images: ["/hero.avif"],
  },
  icons: {
    icon: "/kavdra-logo.avif",
    apple: "/kavdra-logo.avif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body
        className={`${poppins.className} min-h-full flex flex-col overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
