"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { vehicleData, Vehicle } from "@/lib/dummyData";
import { useSearchParams } from "next/navigation";
import VehicleModal from "./VehicleModal";

const ListVehicles = () => {
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "MPV";

  const [showAll, setShowAll] = useState(false);

  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const [prevCategory, setPrevCategory] = useState(currentCategory);
  if (currentCategory !== prevCategory) {
    setPrevCategory(currentCategory);
    setShowAll(false);
  }

  const filteredVehicles = vehicleData.filter(
    (car) => car.category === currentCategory,
  );
  const displayedVehicles = showAll
    ? filteredVehicles
    : filteredVehicles.slice(0, 4);

  const getTitleLabel = () => {
    if (currentCategory === "MPV") return "MPV & SUV";
    if (currentCategory === "Sedan") return "Compact & Sedan";
    return "Motorcycle";
  };

  return (
    <section className="flex flex-col gap-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0A2540] mb-6 ">
        Featured {getTitleLabel()}
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {displayedVehicles.map((car) => {
          const isAvailable = car.isAvailable;
          const cardBg = isAvailable ? "bg-[#FAF7F2]" : "bg-[#F3F4F6]";
          const badgeBg = isAvailable ? "bg-[#10A37F]" : "bg-[#FADBD8]";
          const badgeBorder = isAvailable
            ? "border-[#0B6F57]"
            : "border-[#C0392B]";
          const badgeText = isAvailable ? "text-white" : "text-[#C0392B]";

          const infoBoxBg = isAvailable ? "bg-white" : "bg-[#E5E7EB]";
          const btnMoreInfo = isAvailable
            ? "border-[#C9A66B] text-[#0A2540] hover:bg-[#C9A66B] hover:text-white"
            : "border-gray-400 text-gray-500 hover:bg-gray-200";
          const btnBookNow = isAvailable
            ? "bg-[#0A2540] text-white hover:bg-[#153a61]"
            : "bg-gray-500 text-white cursor-not-allowed opacity-80";

          return (
            <div
              key={car.id}
              className={`w-full flex flex-col items-center p-3 md:p-5 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 relative pt-8 md:pt-8 mt-4 ${cardBg}`}
            >
              <div
                className={`absolute -top-3 md:-top-3 px-2 md:px-4 py-1 border-2 rounded-full ${badgeBg} ${badgeBorder} shadow-sm z-10`}
              >
                <p
                  className={`text-[9px] md:text-xs font-semibold tracking-wide text-center leading-tight ${badgeText}`}
                >
                  {isAvailable ? "Available Today" : "Not Available Today"}
                </p>
              </div>

              <Image
                src={car.image}
                alt={car.name}
                width={250}
                height={160}
                className="w-full h-[80px] sm:h-[120px] md:h-[160px] object-contain drop-shadow-md mb-2 md:mb-4"
              />
              <hr className="w-full border-gray-200 mb-2 md:mb-4" />

              <h6 className="font-bold text-sm md:text-lg text-[#0A2540] text-center line-clamp-1">
                {car.name}
              </h6>
              <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 mb-2 md:mb-4">
                <p className="text-[10px] md:text-xs text-gray-500 font-medium">
                  {car.type}
                </p>
                <p className="hidden md:block text-[10px] md:text-xs text-gray-500 font-medium">
                  {car.year}
                </p>
              </div>

              <div className="w-full flex flex-col md:flex-row items-center justify-between px-1 md:px-2 mb-2 md:mb-4 gap-1 md:gap-0">
                <p className="text-[10px] md:text-xs text-gray-500">
                  {car.fuel}
                </p>
                <p className="text-[10px] md:text-xs text-gray-500">
                  {car.transmission}
                </p>
                <p className="text-[10px] md:text-xs text-gray-500">
                  {car.seats}
                </p>
              </div>

              <div
                className={`w-full flex flex-col md:flex-row p-2 md:p-3 rounded-lg md:rounded-xl mb-3 md:mb-5 gap-2 md:gap-0 ${infoBoxBg}`}
              >
                <div className="flex flex-col flex-1 items-center md:border-r border-gray-300 px-1 border-b md:border-b-0 pb-1 md:pb-0">
                  <p className="text-[9px] md:text-[11px] text-gray-600 font-medium mb-0.5 md:mb-1 text-center leading-tight">
                    {car.price1Label}
                  </p>
                  <p className="text-[11px] md:text-sm font-bold text-[#0A2540]">
                    {car.price1}
                  </p>
                </div>
                <div className="flex flex-col flex-1 items-center px-1 pt-1 md:pt-0">
                  <p className="text-[9px] md:text-[11px] text-gray-600 font-medium mb-0.5 md:mb-1 text-center leading-tight">
                    {car.price2Label}
                  </p>
                  <p className="text-[11px] md:text-sm font-bold text-[#0A2540]">
                    {car.price2}
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-col gap-2 mt-auto">
                {/* UBAH Link menjadi Button untuk memicu Modal */}
                <button
                  onClick={() => setSelectedVehicle(car)}
                  className={`w-full text-center text-xs md:text-sm p-2 md:p-3 rounded-lg md:rounded-xl border-2 transition-colors font-bold ${btnMoreInfo}`}
                >
                  More Info
                </button>
                {isAvailable ? (
                  <Link
                    href={`/booking/${car.id}`} // Anda bisa ganti link booking
                    className={`w-full text-center text-xs md:text-sm p-2 md:p-3 rounded-lg md:rounded-xl transition-colors font-bold ${btnBookNow}`}
                  >
                    Book Now
                  </Link>
                ) : (
                  <button
                    disabled
                    className={`w-full text-center text-xs md:text-sm p-2 md:p-3 rounded-lg md:rounded-xl font-bold ${btnBookNow}`}
                  >
                    Book Now
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredVehicles.length > 4 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base rounded-xl border-2 border-[#C9A66B] text-[#0A2540] font-bold hover:bg-[#C9A66B] hover:text-white transition-colors"
          >
            {showAll ? "Show Less" : `Browse All ${getTitleLabel()}`}
          </button>
        </div>
      )}

      <VehicleModal
        isOpen={!!selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
        vehicle={selectedVehicle}
      />
    </section>
  );
};

export default ListVehicles;
