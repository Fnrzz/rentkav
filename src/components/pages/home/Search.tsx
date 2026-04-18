"use client";

import Image from "next/image";
import React, { Fragment, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    id: "MPV",
    label: "MPV, SUV & Van",
    icon: "/suv-car.avif",
    width: 40,
    height: 40,
  },
  {
    id: "Sedan",
    label: "Compact & Sedan",
    icon: "/small-car.avif",
    width: 40,
    height: 40,
  },
  {
    id: "Motorcycle",
    label: "Motorcycle",
    icon: "/vespa.avif",
    width: 32,
    height: 32,
  },
];

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentCategoryQuery = searchParams.get("category") || "MPV";
  const activeCategory =
    categories.find((cat) => cat.id === currentCategoryQuery) || categories[0];

  const handleCategoryChange = (cat: (typeof categories)[0]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", cat.id);
    router.push(`/?${params.toString()}`, { scroll: false });
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full lg:w-4/5 xl:w-3/4 px-5 py-5 md:px-10 md:py-8 bg-white rounded-2xl shadow-lg flex flex-col gap-4 md:gap-6 relative">
      <div className="relative md:hidden w-full z-40">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between border border-gray-300 px-4 py-3 rounded-xl bg-white focus:outline-none"
        >
          <div className="flex items-center gap-3">
            <Image
              src={activeCategory.icon}
              alt="icon"
              width={activeCategory.width}
              height={activeCategory.height}
              className="object-contain"
            />
            <h6 className="font-semibold text-sm text-gray-800">
              {activeCategory.label}
            </h6>
          </div>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden flex flex-col">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => handleCategoryChange(cat)}
                className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <Image
                  src={cat.icon}
                  alt="icon"
                  width={cat.width}
                  height={cat.height}
                  className="object-contain"
                />
                <h6 className="font-semibold text-sm text-gray-700">
                  {cat.label}
                </h6>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="hidden md:flex flex-row items-center justify-between gap-0 w-full">
        {categories.map((cat, index) => (
          <Fragment key={cat.id}>
            <div
              onClick={() => handleCategoryChange(cat)}
              className={`flex items-center gap-3 w-full justify-center cursor-pointer transition-opacity duration-300 ${
                activeCategory.id === cat.id
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              <Image
                src={cat.icon}
                alt="icon"
                width={cat.width}
                height={cat.height}
                className="object-contain"
              />
              <h6 className="font-semibold text-sm">{cat.label}</h6>
            </div>
            {index < categories.length - 1 && (
              <div className="w-[2px] h-10 bg-gray-200 rounded-full mx-4"></div>
            )}
          </Fragment>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full relative z-10">
        <input
          type="text"
          placeholder="Pick up location"
          className="w-full border border-gray-300 px-5 py-3 md:py-2 text-sm rounded-xl outline-none focus:border-[#C9A66B]"
        />
        <input
          type="text"
          placeholder="Pick up date"
          className="w-full border border-gray-300 px-5 py-3 md:py-2 text-sm rounded-xl outline-none focus:border-[#C9A66B]"
        />
        <input
          type="text"
          placeholder="Drop off date"
          className="w-full border border-gray-300 px-5 py-3 md:py-2 text-sm rounded-xl outline-none focus:border-[#C9A66B]"
        />
        <button className="w-full bg-[#C9A66B] hover:bg-[#b08e55] px-6 py-3 md:py-2 transition-colors rounded-xl text-white font-semibold shadow-md">
          Find Vehicle
        </button>
      </div>
    </div>
  );
};

export default Search;
