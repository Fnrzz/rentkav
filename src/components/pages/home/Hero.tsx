"use client";

import Image from "next/image";
import React from "react";
import Search from "./Search";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-[650px] md:h-[500px] lg:h-[550px] xl:h-[650px] rounded-2xl md:rounded-3xl lg:rounded-4xl md:overflow-hidden bg-black/5 flex flex-col justify-between">
      <Image
        src="/hero.avif"
        alt="hero"
        fill
        className="object-cover rounded-2xl md:rounded-none"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 md:bg-gradient-to-r md:from-[#5B8AA5]/90 to-transparent rounded-2xl md:rounded-none"></div>

      <div className="relative z-10 flex flex-col justify-start md:justify-center gap-4 px-6 md:px-12 lg:px-16 xl:px-20 h-full py-8 md:py-0 pb-[320px] md:pb-0 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:max-w-md lg:max-w-lg xl:max-w-2xl text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
        >
          Drive with Confidence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl text-gray-200 md:text-white text-sm md:text-base xl:text-lg"
        >
          Quality cars, transparent pricing, and reliable service in Surakarta
          and beyond. Thousands of happy drivers already trust us.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-[#FFC86C] text-xs md:text-sm xl:text-base font-medium mt-1 md:mt-2 leading-relaxed"
        >
          ✓ Fully Insured • ✓ Well-Maintained Fleet <br className="md:hidden" />
          • ✓ 24/7 Support • ✓ 4.9/5 from reviews
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-4 left-0 w-full px-4 md:hidden z-20"
      >
        <Search />
      </motion.div>
    </section>
  );
};

export default Hero;
