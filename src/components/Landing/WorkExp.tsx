"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { experiences } from "@/utils/Data/Experience";

export default function WorkExperience() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full px-4 py-8 mt-8 text-white sm:px-6 sm:py-10 sm:mt-0">
      <h2 className="mb-6 text-sm font-semibold text-purple-400 uppercase sm:mb-8">
        Work Experience
      </h2>

      <div className="space-y-4 sm:space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="pt-4 border-t border-[#3a3a3a] sm:pt-6">
            <div className="flex items-start justify-between gap-3 sm:gap-4 lg:gap-[45vh] flex-wrap sm:flex-nowrap">
              {/* Role Badge */}
              <span className="bg-[#3a3a3a] text-xs sm:text-sm px-3 py-1 sm:px-4 rounded-full mb-2 sm:mb-0 whitespace-nowrap">
                {exp.role}
              </span>

              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-300 sm:text-sm">{exp.year}</p>
                <h3 className="text-base font-semibold sm:text-lg">
                  {exp.company}
                </h3>

                {openIndex === index && exp.description && (
                  <p className="mt-2 text-xs text-gray-400 whitespace-pre-line sm:text-sm">
                    {exp.description}
                  </p>
                )}
              </div>

              {/* Toggle Button */}
              <button
                onClick={() => toggle(index)}
                className="flex-shrink-0 p-1 text-gray-400 transition bg-[#3d3c3c] rounded-2xl hover:text-white"
              >
                {openIndex === index ? (
                  <Minus size={18} className="sm:w-5 sm:h-5" />
                ) : (
                  <Plus size={18} className="sm:w-5 sm:h-5" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
