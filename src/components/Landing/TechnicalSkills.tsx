"use client";

import { useState } from "react";
import {
  FaReact,
  FaNode,
  FaPython,
  FaAws,
  FaGitAlt,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiDocker,
  SiVercel,
  SiPrisma,
  SiRedis,
  SiGraphql,
  SiFlutter,
  SiFirebase,
  SiLinux,
  SiAdobexd,
} from "react-icons/si";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, level: "Expert" },
      { name: "Next.js", icon: <SiNextdotjs />, level: "Advanced" },
      { name: "TypeScript", icon: <SiTypescript />, level: "Advanced" },
      { name: "JavaScript", icon: <FaJs />, level: "Expert" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Advanced" },
      { name: "HTML5", icon: <FaHtml5 />, level: "Expert" },
      { name: "CSS3", icon: <FaCss3Alt />, level: "Expert" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNode />, level: "Advanced" },
      { name: "Express.js", icon: <SiExpress />, level: "Advanced" },
      { name: "Python", icon: <FaPython />, level: "Intermediate" },
      { name: "GraphQL", icon: <SiGraphql />, level: "Intermediate" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql />, level: "Advanced" },
      { name: "MongoDB", icon: <SiMongodb />, level: "Advanced" },
      { name: "Prisma", icon: <SiPrisma />, level: "Advanced" },
      { name: "Redis", icon: <SiRedis />, level: "Intermediate" },
      { name: "Firebase", icon: <SiFirebase />, level: "Advanced" },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "Flutter", icon: <SiFlutter />, level: "Beginner" },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", icon: <SiDocker />, level: "Intermediate" },
      { name: "AWS", icon: <FaAws />, level: "Intermediate" },
      { name: "Git", icon: <FaGitAlt />, level: "Expert" },
      { name: "Vercel", icon: <SiVercel />, level: "Advanced" },
      { name: "Linux", icon: <SiLinux />, level: "Advanced" },
    ],
  },
  {
    name: "Design",
    skills: [
      { name: "Figma", icon: <FaFigma />, level: "Advanced" },
      { name: "Adobe XD", icon: <SiAdobexd />, level: "Advanced" },
    ],
  },
];

export default function TechnicalSkills() {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const currentSkills =
    skillCategories.find((cat) => cat.name === selectedCategory)?.skills || [];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "text-green-400";
      case "Advanced":
        return "text-blue-400";
      case "Intermediate":
        return "text-yellow-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <section className="w-full px-6 py-10 text-white">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-sm font-semibold text-purple-400 uppercase">
          Technical Skills
        </h2>
        <div className="text-sm font-semibold text-white">
          {currentSkills.length} Technologies
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {skillCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`bg-[#3a3a3a] text-xs px-3 py-1 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category.name
                ? "text-purple-400 bg-purple-500/20"
                : "text-gray-200 hover:text-purple-400"
            }`}
          >
            {category.name.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="space-y-6">
        {currentSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="flex flex-col sm:flex-row gap-4 border-t border-[#3a3a3a] pt-6"
          >
            {/* Left: Icon */}
            <div className="min-w-[40px] flex justify-center items-start pt-2">
              <div className="text-3xl text-purple-400 transition-transform duration-200 hover:scale-110">
                {skill.icon}
              </div>
            </div>

            {/* Right: Info */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-1">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold ${getLevelColor(
                    skill.level
                  )} bg-gray-800/50`}
                >
                  {skill.level.toUpperCase()}
                </span>
              </div>
              <h3 className="mb-1 text-lg font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-400">
                Proficient in {skill.name} development with hands-on experience
                in building production applications.
              </p>

              {/* CTA */}
              <div className="mt-2 sm:self-start sm:mt-0">
                <span className="text-xs text-gray-500">
                  {skill.level} Level
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
