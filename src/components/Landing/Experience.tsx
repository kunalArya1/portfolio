"use client";

import { useState, useEffect } from "react";
import {
  Minus,
  Plus,
  Briefcase,
  Calendar,
  GraduationCap,
  Award,
  Heart,
  Trophy,
} from "lucide-react";
import { experiences } from "@/utils/Data/Experience";
import { Experience } from "@/types/Experience";

export default function ExperienceSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Work Experience");
  const [filteredExperiences, setFilteredExperiences] =
    useState<Experience[]>(experiences);
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(experiences.map((exp) => exp.category))),
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Category icons mapping
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Work Experience":
        return <Briefcase size={16} />;
      case "Education":
        return <GraduationCap size={16} />;
      case "Certifications":
        return <Award size={16} />;
      case "Volunteer Experience":
        return <Heart size={16} />;
      case "Awards & Recognition":
        return <Trophy size={16} />;
      default:
        return <Briefcase size={16} />;
    }
  };

  // Category colors mapping
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Work Experience":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Education":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Certifications":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Volunteer Experience":
        return "bg-pink-500/10 text-pink-400 border-pink-500/20";
      case "Awards & Recognition":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  // Filter experiences based on selected category
  useEffect(() => {
    setFilteredExperiences(
      experiences.filter((exp) => exp.category === selectedCategory)
    );
    setOpenIndex(-1); // Close any open experience when filtering
  }, [selectedCategory]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full px-4 py-12 text-white md:px-6 md:py-16">
      {/* Header */}
      <div className="flex flex-col gap-4 mb- mt-9 md:mb-12">
        <div className="text-left">
          <h2 className="mb-2 text-sm font-semibold text-purple-400 uppercase">
            My Journey
          </h2>
          <h3 className="mb-2 text-xl font-bold md:text-2xl lg:text-3xl md:mb-4">
            Professional Experience & Education
          </h3>
          <p className="max-w-2xl text-sm text-gray-400">
            A comprehensive view of my professional journey, education, and
            achievements
          </p>
        </div>

        {/* Category Counter - Left aligned */}
        <div className="flex items-center gap-2 text-gray-400">
          {getCategoryIcon(selectedCategory)}
          <span className="text-sm font-medium">{selectedCategory}</span>
        </div>
      </div>

      {/* Category Filter - Left aligned */}
      <div className="mb-6 md:mb-8">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {categories
            .filter((cat) => cat !== "All")
            .map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 border flex items-center gap-1.5 md:gap-2 ${
                  selectedCategory === category
                    ? "bg-purple-500/20 text-purple-400 border-purple-500/50 scale-105"
                    : "text-gray-400 border-[#2a2a2a] hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/5"
                }`}
              >
                <span className="text-xs md:text-sm">
                  {getCategoryIcon(category)}
                </span>
                <span className="hidden sm:inline">{category}</span>
                <span className="text-xs sm:hidden">
                  {category.split(" ")[0]}
                </span>
              </button>
            ))}
        </div>
      </div>

      {/* Experience List - Mobile optimized */}
      <div className="space-y-3 md:space-y-4">
        {filteredExperiences.length > 0 ? (
          filteredExperiences.map((exp, index) => (
            <div
              key={`${exp.company}-${index}`}
              className="group border border-[#2a2a2a] rounded-lg md:rounded-xl bg-[#1a1a1a] hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Main Content */}
              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between gap-3 md:gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Category Badge and Date - Mobile optimized */}
                    <div className="flex flex-wrap items-center gap-2 mb-2 md:gap-3 md:mb-3">
                      <span
                        className={`flex items-center gap-1 md:gap-1.5 text-xs px-2 py-1 md:px-3 md:py-1.5 rounded-full border ${getCategoryColor(
                          exp.category
                        )}`}
                      >
                        <span className="text-xs">
                          {getCategoryIcon(exp.category)}
                        </span>
                        <span className="hidden text-xs sm:inline">
                          {exp.category}
                        </span>
                        <span className="text-xs sm:hidden">
                          {exp.category.split(" ")[0]}
                        </span>
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar size={10} className="md:hidden" />
                        <Calendar size={12} className="hidden md:block" />
                        <span className="text-xs">{exp.year}</span>
                      </div>
                    </div>

                    {/* Role and Company - Mobile optimized */}
                    <h3 className="mb-1 text-lg font-bold leading-tight text-white transition-colors md:text-xl group-hover:text-purple-400">
                      {exp.role}
                    </h3>
                    <p className="mb-2 text-sm font-medium text-gray-400 md:mb-3 md:text-base">
                      {exp.company}
                    </p>

                    {/* Skills - Mobile optimized */}
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                        {exp.skills.slice(0, 4).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 md:py-1 rounded-full border border-gray-700 hover:border-purple-500/30 hover:bg-purple-500/5 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                        {exp.skills.length > 4 && (
                          <span className="text-xs text-gray-500 px-2 py-0.5">
                            +{exp.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Description Preview - Mobile optimized */}
                    {exp.description && openIndex !== index && (
                      <p className="overflow-hidden text-sm leading-relaxed text-gray-400">
                        {exp.description.split("\n")[0].length >
                        (isMobile ? 80 : 120)
                          ? exp.description
                              .split("\n")[0]
                              .substring(0, isMobile ? 80 : 120) + "..."
                          : exp.description.split("\n")[0]}
                      </p>
                    )}
                  </div>

                  {/* Toggle Button - Mobile optimized */}
                  <button
                    onClick={() => toggle(index)}
                    className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#2a2a2a] border border-[#3a3a3a] text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center group"
                  >
                    {openIndex === index ? (
                      <Minus
                        size={14}
                        className="transition-transform md:hidden group-hover:scale-110"
                      />
                    ) : (
                      <Plus
                        size={14}
                        className="transition-transform md:hidden group-hover:scale-110"
                      />
                    )}
                    {openIndex === index ? (
                      <Minus
                        size={16}
                        className="hidden transition-transform md:block group-hover:scale-110"
                      />
                    ) : (
                      <Plus
                        size={16}
                        className="hidden transition-transform md:block group-hover:scale-110"
                      />
                    )}
                  </button>
                </div>

                {/* Expanded Description - Mobile optimized */}
                {openIndex === index && exp.description && (
                  <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-[#2a2a2a] animate-in slide-in-from-top-2 duration-300">
                    <div className="prose prose-gray max-w-none">
                      <p className="text-sm leading-relaxed text-gray-300 whitespace-pre-line">
                        {exp.description}
                      </p>
                    </div>

                    {/* Show all skills when expanded on mobile */}
                    {exp.skills && exp.skills.length > 4 && (
                      <div className="mt-3 md:hidden">
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.slice(4).map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full border border-gray-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="py-8 text-center md:py-12">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full md:w-16 md:h-16 md:mb-4 bg-purple-500/10">
              {getCategoryIcon(selectedCategory)}
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">
              No items found
            </h3>
            <p className="text-sm text-gray-400">
              No items found in the {selectedCategory} category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
