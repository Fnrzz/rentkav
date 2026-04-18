"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WhyChoose = () => {
  return (
    <section className="flex flex-col gap-6 py-10 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold"
      >
        Why Thousands Choose Us?
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
      >
        <motion.div
          variants={itemVariants}
          className="w-full h-full flex items-center gap-4 p-6 bg-[#F4F1EB] rounded-2xl shadow"
        >
          <Image
            src={"/check-icon.avif"}
            alt="icon"
            width={60}
            height={60}
            className="w-[60px] h-[60px] object-contain"
          />
          <div className="flex flex-col">
            <h4 className="font-semibold text-md">Always Well-Maintained</h4>
            <p className="text-gray-600 text-xs leading-relaxed">
              Every vehicle undergoes regular servicing and thorough cleaning
              before and after each rental.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full h-full flex items-center gap-4 p-6 bg-[#F4F1EB] rounded-2xl shadow"
        >
          <Image
            src={"/tag-icon.avif"}
            alt="icon"
            width={60}
            height={60}
            className="w-[60px] h-[60px] object-contain"
          />
          <div className="flex flex-col">
            <h4 className="font-semibold text-md">Transparent Pricing</h4>
            <p className="text-gray-600 text-xs leading-relaxed">
              What you see is what you pay. No hidden fees or surprises.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full h-full md:col-span-2 xl:col-span-1 flex items-center md:justify-center xl:justify-start gap-4 p-6 bg-[#F4F1EB] rounded-2xl shadow"
        >
          <Image
            src={"/support-icon.avif"}
            alt="icon"
            width={60}
            height={60}
            className="w-[60px] h-[60px] object-contain"
          />
          <div className="flex flex-col">
            <h4 className="font-semibold text-md">Support When You Need It</h4>
            <p className="text-gray-600 text-xs leading-relaxed">
              Our team is available 24/7 to assist you, even on holidays.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChoose;
