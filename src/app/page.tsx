import Hero from "@/components/pages/home/Hero";
import ListVehicles from "@/components/pages/home/ListVehicles";
import Search from "@/components/pages/home/Search";
import WhyChoose from "@/components/pages/home/WhyChoose";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="px-4 md:px-10 pb-20 pt-4">
      <Suspense fallback={<div className="min-h-screen">Loading...</div>}>
        <Hero />
        <div className="relative z-30 hidden lg:flex justify-center w-full md:-mt-16 lg:-mt-20">
          <Search />
        </div>
        <WhyChoose />
        <ListVehicles />
      </Suspense>
    </main>
  );
}
