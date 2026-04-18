import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <section className="flex flex-col gap-6 py-10">
      <h2 className="text-3xl font-bold">Why Thousands Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="w-full h-full flex items-center gap-4 p-6 bg-[#F4F1EB] rounded-2xl shadow">
          <Image
            src={"/check-icon.avif"}
            alt="icon"
            width={60}
            height={60}
            className="w-[60px] h-[60px] object-contain"
          />
          <div className="flex flex-col">
            <h4 className="font-semibold text-md">Always Well-Maintened</h4>
            <p className="text-gray-600 text-xs leading-relaxed">
              Every vehicle undergoes regular servicing and thorough cleaning
              before and after each rental.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex items-center gap-4 p-6 bg-[#F4F1EB] rounded-2xl shadow">
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
        </div>
        <div className="w-full h-full md:col-span-2 xl:col-span-1 flex items-center md:justify-center xl:justify-start gap-4 p-6 bg-[#F4F1EB] rounded-2xl shadow">
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
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
