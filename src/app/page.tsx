import NewLetter from "@/components/Newsletter";
import { CiLocationOn } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="h-full w-full px-3 md:px-10 lg:px-20">
      {/* hero section */}
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
              UI Designer passionate about crafting creative digital
              experiences.
            </h4>

            {/* Status & Location */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 text-sm font-medium">
              <span className="bg-gray-700 px-3 py-1 rounded-full flex items-center gap-1">
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>{" "}
                Available
              </span>
              <span className="flex items-center gap-1">
                <CiLocationOn /> Bhopal, India
              </span>
            </div>
          </div>

          {/* Right: Introduction */}
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
              Hello! I'm Ando Sato <br />
              Modern Creative Designer
            </h1>
            <h4 className="text-gray-400 text-lg mb-6">
              I am a design leader, advisor, and operator with expertise in
              brand, product, and design systems.
            </h4>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300">
              Get in Touch
              <FaAngleRight className=" inline-block font-bold" />
            </button>
          </div>
        </div>
      </section>

      {/* case studies section */}
      <section className="min-h-[60vh] w-full  py-10 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-purple-500">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <p>Case Studies</p>
            </div>
            <hr className="border-gray-700 mt-2" />
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card */}
            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-14 h-14 bg-green-100 flex items-center justify-center rounded-lg">
                  <span className="text-green-500 font-bold text-xl">W</span>{" "}
                  {/* Replace with actual icon */}
                </div>
              </div>
              <h2 className="text-lg font-semibold mb-1">
                UX Odyssey <span className="inline-block ml-1">→</span>
              </h2>
              <p className="text-sm text-gray-400 mb-2">double studio.com</p>
              <p className="text-gray-300 text-sm">
                The strategic objective was to attract upmarket audiences by
                targeting specific.
              </p>
            </div>

            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-14 h-14 bg-green-100 flex items-center justify-center rounded-lg">
                  <span className="text-green-500 font-bold text-xl">W</span>{" "}
                  {/* Replace with actual icon */}
                </div>
              </div>
              <h2 className="text-lg font-semibold mb-1">
                UX Odyssey <span className="inline-block ml-1">→</span>
              </h2>
              <p className="text-sm text-gray-400 mb-2">double studio.com</p>
              <p className="text-gray-300 text-sm">
                The strategic objective was to attract upmarket audiences by
                targeting specific.
              </p>
            </div>

            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-14 h-14 bg-green-100 flex items-center justify-center rounded-lg">
                  <span className="text-green-500 font-bold text-xl">W</span>{" "}
                  {/* Replace with actual icon */}
                </div>
              </div>
              <h2 className="text-lg font-semibold mb-1">
                UX Odyssey <span className="inline-block ml-1">→</span>
              </h2>
              <p className="text-sm text-gray-400 mb-2">double studio.com</p>
              <p className="text-gray-300 text-sm">
                The strategic objective was to attract upmarket audiences by
                targeting specific.
              </p>
            </div>

            {/* Repeat for other cards... */}
          </div>
        </div>
      </section>

      {/* featured section */}
      <section></section>
      {/* project section */}
      <section></section>
      {/* recent blog section */}
      <section className="w-full  text-white py-12 px-6">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-6 flex items-center justify-between">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-400">
            Personal Guides
          </p>
          <p className="text-sm font-semibold cursor-pointer hover:underline">
            View All Posts
          </p>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-700 pt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Blog */}
          <div className="relative rounded-lg overflow-hidden group">
            <img
              src="https://ando.codesupply.co/design/wp-content/uploads/sites/2/2024/09/demo-image-0008-1920x1440.webp" // replace with real path
              alt="Featured"
              className="w-full h-full object-cover absolute inset-0 brightness-75 group-hover:brightness-90 transition"
            />
            <div className="relative p-6 z-10 flex flex-col justify-end h-[300px] md:h-[350px]">
              <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-2">
                My Favorite Resources and Blogs for Self-Development
              </h2>
              <p className="text-gray-300 mb-4">
                Master the art of negative space to create clean, impactful
                designs that resonate.
              </p>
              <p className="text-sm text-gray-400">
                Jul 8, 2024 &bull; <span className="ml-1">3 min read</span>
              </p>
            </div>
          </div>

          {/* Blog List */}
          <div className="flex flex-col justify-between gap-6">
            {[
              {
                title: "Tips for Designing Effective Menus That Users Love",
                date: "Jun 17, 2024",
                time: "6 min read",
              },
              {
                title:
                  "A Guide to Designing with Accessibility in Mind for All Users",
                date: "Jun 10, 2024",
                time: "4 min read",
              },
              {
                title:
                  "The Role of User Personas in Guiding Your Design Decisions",
                date: "Jun 1, 2024",
                time: "7 min read",
              },
            ].map((post, index) => (
              <div key={index} className="border-b border-gray-700 pb-4">
                <h3 className="font-semibold text-lg md:text-xl mb-1">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {post.date} &bull; <span className="ml-1">{post.time}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* my reasoning section */}
      <section></section>
      {/* skills section */}
      <section></section>
      {/* work exprenice section */}
      <section></section>
      {/* newsletter section */}
      <NewLetter />
    </div>
  );
}
