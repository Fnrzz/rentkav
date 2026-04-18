import Image from "next/image";
import React from "react";
import Search from "./Search";

const Hero = () => {
  return (
    <section className="relative w-full h-[650px] md:h-[500px] lg:h-[400px] xl:h-[500px] rounded-2xl md:rounded-3xl lg:rounded-4xl md:overflow-hidden bg-black/5 flex flex-col justify-between">
      <Image
        src="/hero.avif"
        alt="hero"
        fill
        className="object-cover rounded-2xl md:rounded-none"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 md:bg-gradient-to-r md:from-[#5B8AA5]/90 to-transparent rounded-2xl md:rounded-none"></div>

      <div className="relative z-10 flex flex-col justify-start lg:justify-center gap-4 px-6 md:px-12 lg:px-16 xl:px-20 h-full py-8 lg:py-0 pb-[320px] md:pb-0">
        <h1 className="w-full md:max-w-md lg:max-w-lg xl:max-w-2xl text-4xl md:text-4xl xl:text-6xl font-bold text-white leading-tight transition-all">
          Drive with Confidence
        </h1>

        <p className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl text-gray-200 md:text-white text-sm xl:text-base transition-all">
          Quality cars, transparent pricing, and reliable service in Surakarta
          and beyond. Thousands of happy drivers already trust us.
        </p>

        <p className="text-[#FFC86C] text-xs xl:text-sm font-medium mt-1 md:mt-2 leading-relaxed transition-all">
          ✓ Fully Insured • ✓ Well-Maintained Fleet <br className="md:hidden" />
          • ✓ 24/7 Support • ✓ 4.9/5 from reviews
        </p>
      </div>
      <div className="absolute bottom-4 left-0 w-full px-4 lg:hidden z-20">
        <Search />
      </div>
    </section>
  );
};

export default Hero;
