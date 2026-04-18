"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { Vehicle } from "@/lib/dummyData";

interface VehicleModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: Vehicle | null;
}

const VehicleModal: React.FC<VehicleModalProps> = ({
  isOpen,
  onClose,
  vehicle,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !vehicle) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="relative bg-white w-full max-w-3xl rounded-2xl md:rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-gray-200 rounded-full transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex-1 overflow-y-auto">
          <div className="w-full h-[250px] md:h-[350px] bg-[#F4F1EB] relative flex items-center justify-center p-6">
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              width={600}
              height={400}
              className="w-full h-full object-contain drop-shadow-xl"
            />
            <div
              className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-md ${vehicle.isAvailable ? "bg-[#10A37F]" : "bg-[#C0392B]"}`}
            >
              {vehicle.isAvailable ? "Available Today" : "Not Available Today"}
            </div>
          </div>

          <div className="p-6 md:p-8 flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0A2540]">
                  {vehicle.name}
                </h3>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-semibold">
                  {vehicle.year}
                </span>
              </div>
              <p className="text-gray-500 font-medium">
                {vehicle.category} • {vehicle.type}
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base">
                {vehicle.description}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg text-[#0A2540] mb-3">
                Specifications
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex flex-col gap-1">
                  <span className="text-xs text-gray-500">Fuel</span>
                  <span className="font-semibold text-[#0A2540]">
                    {vehicle.fuel}
                  </span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex flex-col gap-1">
                  <span className="text-xs text-gray-500">Transmission</span>
                  <span className="font-semibold text-[#0A2540]">
                    {vehicle.transmission}
                  </span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex flex-col gap-1">
                  <span className="text-xs text-gray-500">Capacity</span>
                  <span className="font-semibold text-[#0A2540]">
                    {vehicle.seats}
                  </span>
                </div>
                {vehicle.category !== "Motorcycle" && (
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex flex-col gap-1">
                    <span className="text-xs text-gray-500">Doors</span>
                    <span className="font-semibold text-[#0A2540]">
                      {vehicle.doors}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg text-[#0A2540] mb-3">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {vehicle.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <svg
                      className="w-5 h-5 text-[#C9A66B]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 p-4 md:p-6 bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex w-full md:w-auto gap-4 md:gap-8 justify-between md:justify-start">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium">
                {vehicle.price1Label}
              </span>
              <span className="text-lg md:text-xl font-bold text-[#0A2540]">
                {vehicle.price1}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium">
                {vehicle.price2Label}
              </span>
              <span className="text-lg md:text-xl font-bold text-[#0A2540]">
                {vehicle.price2}
              </span>
            </div>
          </div>

          <button
            disabled={!vehicle.isAvailable}
            className={`w-full md:w-auto px-8 py-3 rounded-xl font-bold transition-colors ${
              vehicle.isAvailable
                ? "bg-[#0A2540] hover:bg-[#153a61] text-white"
                : "bg-gray-400 text-white cursor-not-allowed"
            }`}
          >
            {vehicle.isAvailable ? "Continue Booking" : "Not Available"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleModal;
