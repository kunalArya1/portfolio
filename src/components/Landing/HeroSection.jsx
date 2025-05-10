import { CiLocationOn } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="min-h-[60vh] w-full  text-white py-15 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Profile Section */}
        <div className="text-center md:text-left">
          {/* Profile Image + Status Badge */}
          <div className="relative w-36 h-36 mx-auto md:mx-0 mb-4">
            <img
              src="./kunal.jpg" // replace with your image path
              alt="Kunal Arya"
              className="w-full h-full rounded-full object-cover"
            />
            <span className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs ring-2 ring-white">
              ✓
            </span>
          </div>

          {/* Name & Bio */}
          <h1 className="text-2xl font-bold mb-2">Kunal Arya</h1>
          <h4 className="text-gray-400 text-base mb-4">
            Full-stack developer passionate about <br />
            building smooth and scalable web <br />
            experiences.
          </h4>

          {/* Status & Location */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 text-sm font-medium">
            <span className="bg-gray-700 px-3 py-1 rounded-full flex items-center gap-1 text-green-500">
              <span className="w-2 h-2 bg-green-500 rounded-full "></span>{" "}
              Available
            </span>
            <span className="flex items-center gap-1">
              <CiLocationOn /> Bengaluru, India
            </span>
          </div>
        </div>

        {/* Right: Introduction */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">
            Hello! I’m Kunal Arya <br /> Turning Ideas into Code and Code into
            Impact
          </h1>
          <h4 className="text-gray-400 text-lg mb-6">
            Developer, builder, and problem-solver with a passion for clean
            code, product thinking, and scalable tech.
          </h4>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300">
            Get in Touch
            <FaAngleRight className=" inline-block font-bold" />
          </button>
        </div>
      </div>
    </section>
  );
}
