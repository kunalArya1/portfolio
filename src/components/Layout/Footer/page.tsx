// components/Footer.jsx

import { FaInstagram, FaFacebookF, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#1f1f1f] text-white">
      {/* Top Footer */}
      <section className="w-full flex flex-col md:flex-row justify-between items-start md:items-center border-y border-[#3a3a3a] px-6 md:px-20 py-10 gap-8 md:gap-0">
        {/* Left - Logo and Description */}
        <div className="w-full md:w-1/3">
          <h1 className="text-white font-bold text-2xl mb-2">Kunal Arya</h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            A modern lightweight WordPress theme with lots of options, making it
            easy to customize.
          </p>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex flex-col md:flex-row gap-3 text-sm font-semibold text-white">
          <a href="#">Home</a>
          <a href="#">Contact Us</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
        </div>

        {/* Right - Social Icons */}
        {/* linkedin */}
        <div className="flex gap-3">
          <Link
            target="blank"
            href={"https://www.linkedin.com/in/kunal-kumar-arya/"}
          >
            <div className="w-10 h-10 bg-[#3d3d3d] rounded-full flex items-center justify-center hover:bg-[#594ead] cursor-pointer transition">
              <IoLogoLinkedin className="text-white text-lg" />
            </div>
          </Link>
          {/* twitter */}
          <Link target="blank" href={"https://x.com/iamkunalarya"}>
            <div className="w-10 h-10 bg-[#3d3d3d] rounded-full flex items-center justify-center hover:bg-[#594ead] cursor-pointer transition">
              <FaXTwitter className="text-white text-lg" />
            </div>
          </Link>
          {/* Github */}
          <Link target="blank" href={"https://github.com/kunalArya1"}>
            <div className="w-10 h-10 bg-[#3d3d3d] rounded-full flex items-center justify-center hover:bg-[#594ead] cursor-pointer transition">
              <FaGithub className="text-white text-lg" />
            </div>
          </Link>

          {/* Instagram */}
          <div className="w-10 h-10 bg-[#3d3d3d] rounded-full flex items-center justify-center hover:bg-[#594ead] cursor-pointer transition">
            <FaInstagram className="text-white text-lg" />
          </div>

          {/* Facebook */}
          <div className="w-10 h-10 bg-[#3d3d3d] rounded-full flex items-center justify-center hover:bg-[#594ead] cursor-pointer transition">
            <FaFacebookF className="text-white text-lg" />
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className="py-6 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4 md:gap-0">
        <p>© 2024 Kunal Arya. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">
            Terms of Use
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </section>
    </div>
  );
}
