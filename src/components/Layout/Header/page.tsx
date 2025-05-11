"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaAngleRight } from "react-icons/fa6";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
  { name: "Github", path: "/github" },
  { name: "Connect", path: "/connect" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Full Navbar at Top */}
      <header className="w-full bg-black border-b border-[#3a3a3a] px-6 py-4 lg:px-20 z-40">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 text-white text-lg font-semibold">
            <div className="h-8 w-8 bg-amber-400 rounded-sm overflow-hidden">
              <Image
                src="/logo2.jpg"
                alt="Kunal Arya"
                width={100}
                height={100}
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

          {/* Resume */}
          <div className="hidden lg:flex items-center gap-4 text-white">
            <Link
              href={
                "https://drive.google.com/file/d/1RqAGVhchh9y99SNKcEVXFAX6dCCEWmPn/view?usp=sharing"
              }
              target="blank"
            >
              <button className="bg-[#7728bc] text-white px-5 py-2 rounded-2xl cursor-pointer">
                Resume <FaAngleRight className=" inline-block" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="lg:hidden text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
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
            <div className="mt-4 flex justify-start px-4">
              <button className="bg-[#7728bc] text-white px-4 py-2 rounded-xl">
                Resume <FaAngleRight className=" inline-block" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* kkk */}

      {isScrolled && (
        <div className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit bg-[#1f1e1e]/60 backdrop-blur-md border border-[#3a3a3a] px-4 py-2 rounded-3xl shadow-lg">
          <nav className="flex gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-3 py-1 md:px-4 md:py-2 rounded-xl text-white text-sm md:text-base font-medium ${
                  pathname === link.path ? "bg-[#3a3a3a]" : "hover:bg-[#2a2a2a]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
