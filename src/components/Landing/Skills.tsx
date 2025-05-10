"use client";

import { FaJsSquare, FaJava, FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import {
  TbBrandCpp,
  TbBrandReact,
  TbBrandThreejs,
  TbBrandNodejs,
} from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";
import {
  SiMysql,
  SiMongodb,
  SiAdobephotoshop,
  SiAdobexd,
  SiNextdotjs,
  SiAppwrite,
  SiExpress,
  SiHibernate,
  SiHtml5,
  SiFlask,
} from "react-icons/si";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { IoLogoFigma } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const devIcons = [
  { src: <TbBrandReact />, alt: "React" },
  { src: <SiNextdotjs />, alt: "Next js" },
  { src: <TbBrandNodejs />, alt: "Node.js" },
  { src: <SiExpress />, alt: "Express" },
  { src: <BiLogoSpringBoot />, alt: "SpringBoot" },
  { src: <SiHibernate />, alt: "Hibernate" },
  { src: <SiFlask />, alt: "CSS3" },
  { src: <SiAppwrite />, alt: "Appwrite" },
  { src: <SiHtml5 />, alt: "HTML5" },
  { src: <IoLogoCss3 />, alt: "CSS" },
  { src: <RiTailwindCssFill />, alt: "Tailwind CSS" },
  { src: <TbBrandThreejs />, alt: "Three.js" },
];
const designIcons = [
  { src: <IoLogoFigma />, alt: "Adobe XD" },
  { src: <SiAdobephotoshop />, alt: "Photoshop" },
  { src: <SiAdobexd />, alt: "Figma" },
];
const languageIcons = [
  { src: <TbBrandCpp />, alt: "Cpp" },
  { src: <FaJava />, alt: "Java" },
  { src: <FaPython />, alt: "Pyhton" },
  { src: <FaGolang />, alt: "Golang" },
  { src: <FaJsSquare />, alt: "Javascript" },
  { src: <SiTypescript />, alt: "Typescript" },
];
const dataabseIcons = [
  {
    src: <SiMysql />,
    alt: "Mysql",
  },
  {
    src: <SiMongodb />,
    alt: "MongoDB",
  },
  {
    src: <BiLogoPostgresql />,
    alt: "PostgressSQL",
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

        {/* Language Section */}
        <div className="my-9">
          <div className="inline-block border-2 border-white rounded-md px-4 py-1 mb-4 text-lg font-medium">
            Language
          </div>
          <div className="flex flex-wrap justify-start gap-6">
            {languageIcons.map((icon, idx) => (
              <div
                key={idx}
                className="w-20 h-12 sm:w-14 sm:h-14 object-cover transition-transform text-[7vh] hover:scale-110 mt-4"
              >
                {icon.src}
              </div>
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
              <div
                key={idx}
                className="w-20 h-12 sm:w-14 sm:h-14 object-cover transition-transform text-[7vh] hover:scale-110 mt-4"
              >
                {icon.src}
              </div>
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
              <div
                key={idx}
                className="w-20 h-12 sm:w-14 sm:h-14 object-cover transition-transform text-[7vh] hover:scale-110 mt-4"
              >
                {icon.src}
              </div>
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
              <div
                key={idx}
                className="w-20 h-12 sm:w-14 sm:h-14 object-cover transition-transform text-[7vh] hover:scale-110 mt-4"
              >
                {icon.src}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
