"use client";

import Image from "next/image";

const devIcons = [
  {
    src: "/kunal.jpg",
    alt: "React",
  },
  { src: "/icons/java.png", alt: "Java" },
  { src: "/icons/javascript.png", alt: "JavaScript" },
  { src: "/icons/nodejs.png", alt: "Node.js" },
  { src: "/icons/mongodb.png", alt: "MongoDB" },
  { src: "/icons/mysql.png", alt: "MySQL" },
  { src: "/icons/github.png", alt: "GitHub" },
  { src: "/icons/blueprint.png", alt: "Blueprint" },
  { src: "/icons/heroicons.png", alt: "Hero Icons" },
  { src: "/icons/threejs.png", alt: "Three.js" },
  { src: "/icons/html5.png", alt: "HTML5" },
  { src: "/icons/css3.png", alt: "CSS3" },
];

const designIcons = [
  { src: "/icons/xd.png", alt: "Adobe XD" },
  { src: "/icons/photoshop.png", alt: "Photoshop" },
  { src: "/icons/figma.png", alt: "Figma" },
];
const languageIcons = [
  {
    src: "/kunal.jpg",
    alt: "Adobe XD",
  },
  {
    src: "/kunal.jpg",
    alt: "Photoshop",
  },
  {
    src: "/kunal.jpg",
    alt: "Figma",
  },
  {
    src: "/kunal.jpg",
    alt: "Figma",
  },
  {
    src: "/kunal.jpg",
    alt: "Figma",
  },
  { src: "/icons/figma.png", alt: "Figma" },
];

const dataabseIcons = [
  {
    src: "/kunal.jpg",
    alt: "Adobe XD",
  },
  {
    src: "/kunal.jpg",
    alt: "Photoshop",
  },
  {
    src: "/kunal.jpg",
    alt: "Figma",
  },
];

export default function SkillsSection() {
  return (
    <section className="w-full  text-white px-6 py-12 ">
      <div className="max-w-7xl mx-auto text-start">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Things I am <span className="text-blue-400">good</span> at
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          skills, interests, passion and hobbies
        </p>

        {/* Database Section */}
        <div className="my-9">
          <div className="inline-block border-2 border-white rounded-md px-4 py-1 mb-4 text-lg font-medium">
            Language
          </div>
          <div className="flex flex-wrap justify-start gap-6">
            {languageIcons.map((icon, idx) => (
              <Image
                width={100}
                height={100}
                key={idx}
                src={icon.src}
                alt={icon.alt}
                className="w-16 h-12 sm:w-14 sm:h-14 object-cover transition-transform hover:scale-110"
              />
            ))}
          </div>
        </div>
        {/* Development Section */}
        <div className="mb-12">
          <div className="inline-block border-2 border-white rounded-md px-4 py-1 mb-4 text-lg font-medium">
            development
          </div>
          <div className="flex flex-wrap justify-start gap-6">
            {devIcons.map((icon, idx) => (
              <Image
                width={100}
                height={100}
                key={idx}
                src={icon.src}
                alt={icon.alt}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform hover:scale-110"
              />
            ))}
          </div>
        </div>

        {/* Designing Section */}
        <div>
          <div className="inline-block border-2 border-white rounded-md px-4 py-1 mb-4 text-lg font-medium">
            designing
          </div>
          <div className="flex flex-wrap justify-start gap-6">
            {designIcons.map((icon, idx) => (
              <Image
                width={100}
                height={100}
                key={idx}
                src={icon.src}
                alt={icon.alt}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform hover:scale-110"
              />
            ))}
          </div>
        </div>

        {/* Database Section */}
        <div className="mt-9">
          <div className="inline-block border-2 border-white rounded-md px-4 py-1 mb-4 text-lg font-medium">
            Database
          </div>
          <div className="flex flex-wrap justify-start gap-6">
            {dataabseIcons.map((icon, idx) => (
              <Image
                width={100}
                height={100}
                key={idx}
                src={icon.src}
                alt={icon.alt}
                className="w-18 h-12 sm:w-14 sm:h-14 object-cover transition-transform hover:scale-110"
              />
            ))}
          </div>
        </div>

        {/* Back to Top
        <div className="mt-12">
          <a
            href="#top"
            className="text-sm text-white underline hover:text-blue-400"
          >
            BACK TO TOP ☝️
          </a>
        </div> */}
      </div>
    </section>
  );
}
