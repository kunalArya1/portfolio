import { CiLocationOn } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-[60vh] w-full  text-white py-15 px-6">
      <div className="flex flex-col items-center justify-between gap-10 mx-auto max-w-7xl md:flex-row">
        {/* Left: Profile Section */}
        <div className="text-center md:text-left">
          {/* Profile Image + Status Badge */}
          <div className="relative mx-auto mb-4 w-36 h-36 md:mx-0">
            <img
              src="./kunal.jpg" // replace with your image path
              alt="Kunal Arya"
              className="object-cover w-full h-full rounded-full"
            />
            <span className="absolute flex items-center justify-center w-6 h-6 text-xs text-white bg-green-500 rounded-full bottom-2 right-2 ring-2 ring-white">
              ✓
            </span>
          </div>

          {/* Name & Bio */}
          <h1 className="mb-2 text-2xl font-bold">Kunal Arya</h1>
          <h4 className="mb-4 text-base text-gray-400">
            Full-stack developer passionate about building smooth and scalable
            web experiences.
          </h4>

          {/* Status & Location */}
          <div className="flex flex-col items-center justify-center gap-2 text-sm font-medium sm:flex-row md:justify-start">
            <span className="flex items-center gap-1 px-3 py-1 text-green-500 bg-gray-700 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full "></span>{" "}
              Available
            </span>
            <span className="flex items-center gap-1">
              <CiLocationOn /> Bengaluru, India
            </span>
          </div>
        </div>

        {/* Right: Introduction */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-5xl">
            Hello! I'm Kunal Arya <br /> Turning Ideas into Code and Code into
            Impact
          </h1>
          <h4 className="mb-6 text-lg text-gray-400">
            Developer, builder, and problem-solver with a passion for clean
            code, product thinking, and scalable tech.
          </h4>
          <Link href="/linktree">
            <button className="px-6 py-3 font-semibold text-white transition duration-300 bg-purple-600 rounded-full cursor-pointer hover:bg-purple-700">
              Get in Touch
              <FaAngleRight className="inline-block font-bold " />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
