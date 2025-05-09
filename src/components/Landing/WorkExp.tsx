"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

type Experience = {
  role: string;
  company: string;
  year: string;
  description?: string;
};

const experiences: Experience[] = [
  {
    role: "Designer",
    year: "2024 — Present",
    company: "Ando Studio",
    description: `At Ando Studio, I led creative projects from concept to completion. My primary focus was designing user-friendly, responsive websites for a variety of clients. I worked closely with developers, ensuring that every design was implemented seamlessly.

Additionally, I managed client presentations and provided post-launch support, ensuring long-term success.

In this role, I handled everything from client briefings to final product delivery. I collaborated with the development team on creating custom WordPress themes and eCommerce solutions. My focus was on ensuring that design and functionality merged perfectly to create a seamless user experience.`,
  },
  {
    role: "Analyst",
    year: "2023 — 2024",
    company: "Hero Collective",
    description: `At Ando Studio, I led creative projects from concept to completion. My primary focus was designing user-friendly, responsive websites for a variety of clients. I worked closely with developers, ensuring that every design was implemented seamlessly.

Additionally, I managed client presentations and provided post-launch support, ensuring long-term success.

In this role, I handled everything from client briefings to final product delivery. I collaborated with the development team on creating custom WordPress themes and eCommerce solutions. My focus was on ensuring that design and functionality merged perfectly to create a seamless user experience.`,
  },
  {
    role: "Designer",
    year: "2023 — 2023",
    company: "Start Craft Company",
    description: `At Ando Studio, I led creative projects from concept to completion. My primary focus was designing user-friendly, responsive websites for a variety of clients. I worked closely with developers, ensuring that every design was implemented seamlessly.

Additionally, I managed client presentations and provided post-launch support, ensuring long-term success.

In this role, I handled everything from client briefings to final product delivery. I collaborated with the development team on creating custom WordPress themes and eCommerce solutions. My focus was on ensuring that design and functionality merged perfectly to create a seamless user experience.`,
  },
];

export default function WorkExperience() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full  px-6 py-10   text-white">
      <h2 className="text-sm font-semibold text-purple-400 uppercase mb-8">
        Work Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-t border-[#3a3a3a] pt-6">
            <div className="flex items-start justify-between gap-4 lg:gap-[45vh] flex-wrap sm:flex-nowrap">
              {/* Role Badge */}
              <span className="bg-[#3a3a3a] text-sm px-4 py-1 rounded-full mb-2 sm:mb-0">
                {exp.role}
              </span>

              <div className="flex-1">
                <p className="text-sm text-gray-300">{exp.year}</p>
                <h3 className="text-lg font-semibold">{exp.company}</h3>

                {openIndex === index && exp.description && (
                  <p className="text-sm text-gray-400 mt-2 whitespace-pre-line">
                    {exp.description}
                  </p>
                )}
              </div>

              {/* Toggle Button */}
              <button
                onClick={() => toggle(index)}
                className="text-gray-400 hover:text-white transition p-1 bg-[#3d3c3c] rounded-2xl"
              >
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
