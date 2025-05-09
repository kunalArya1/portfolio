"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaAngleRight } from "react-icons/fa6";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/features" },
  { name: "Blogs", path: "/reasoning" },
  { name: "About", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-[#000000] border-b border-[#3a3a3a] px-6 py-4 lg:px-20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 text-white text-lg font-semibold">
          <div className="h-8 w-8 bg-amber-400 rounded-sm">
            <img
              src="./logo2.jpg" // replace with your image path
              alt="Kunal Arya"
              className="w-full h-full object-cover"
            />
          </div>
          Kunal Arya
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-2 bg-[#1f1e1e] border border-[#3a3a3a] rounded-3xl px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-4 py-2 rounded-xl text-white font-medium ${
                pathname === link.path ? "bg-[#3a3a3a]" : "hover:bg-[#2a2a2a]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4 text-white">
          {/* <p className="cursor-pointer">Search</p> */}
          <button className="bg-[#7728bc] text-white px-5 py-2 rounded-2xl">
            Resume <FaAngleRight className=" inline-block" />
          </button>
        </div>

        {/* Hamburger - Mobile */}
        <button onClick={toggleMenu} className="lg:hidden text-white">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block w-full text-white py-2 px-4 rounded-xl ${
                pathname === link.path ? "bg-[#3a3a3a]" : "hover:bg-[#2a2a2a]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 flex justify-between items-center px-4">
            {/* <p className="text-white">Search</p> */}
            <button className="bg-[#7728bc] text-white px-4 py-2 rounded-xl">
              Resume <FaAngleRight className=" inline-block" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
