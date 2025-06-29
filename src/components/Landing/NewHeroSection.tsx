"use client";

import { CiLocationOn } from "react-icons/ci";
import { FaAngleRight, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function NewHeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as any,
      },
    },
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94] as any,
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1] as any,
    },
  };

  if (!mounted) {
    return (
      <section className="min-h-[80vh] w-full text-white py-20 px-6 relative overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-16 mx-auto max-w-7xl lg:flex-row lg:items-start lg:justify-between">
          <div className="text-center lg:text-left lg:flex-1 lg:max-w-md">
            <div className="relative mx-auto mb-6 w-36 h-36 lg:w-40 lg:h-40 lg:mx-0">
              <img
                src="./kunal.jpg"
                alt="Kunal Arya"
                className="object-cover w-full h-full rounded-full shadow-2xl"
              />
              <span className="absolute flex items-center justify-center text-xs text-white bg-green-500 rounded-full w-7 h-7 bottom-1 right-1 ring-3 ring-white">
                ✓
              </span>
            </div>
            <h1 className="mb-3 text-2xl font-bold lg:text-3xl">Kunal Arya</h1>
            <h4 className="max-w-sm mx-auto mb-6 text-base text-gray-400 lg:text-lg lg:mx-0">
              Full-stack developer passionate about building smooth and scalable
              web experiences.
            </h4>
            <div className="flex flex-col items-center justify-center gap-3 text-sm font-medium sm:flex-row lg:justify-start">
              <span className="flex items-center gap-2 px-3 py-2 text-green-500 border rounded-full bg-gray-800/50 backdrop-blur-sm border-green-500/20">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                Available for Work
              </span>
              <span className="flex items-center gap-2 text-gray-300">
                <CiLocationOn className="text-purple-400" /> Bengaluru, India
              </span>
            </div>
          </div>
          <div className="relative max-w-4xl text-center lg:text-left lg:flex-1 lg:max-w-2xl xl:max-w-3xl">
            {/* Decorative elements */}
            <div className="absolute hidden w-20 h-20 rounded-full -top-4 -right-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-xl lg:block"></div>
            <div className="absolute hidden w-32 h-32 rounded-full -bottom-8 -left-8 bg-gradient-to-tr from-purple-600/10 to-pink-500/10 blur-2xl lg:block"></div>

            <h1 className="relative mb-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-4xl xl:text-5xl">
              <span className="hidden text-white sm:inline">
                Hello! I'm{" "}
                <span className="relative inline-block font-black text-white">
                  Kunal Arya
                  <div className="absolute left-0 right-0 h-1 rounded-full bottom-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                </span>
                <br />
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-3xl xl:text-4xl">
                <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">
                  Turning Ideas into Code
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
                  and Code into Impact
                </span>
              </span>
            </h1>

            <div className="relative mb-8">
              <h4 className="relative z-10 max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 sm:text-xl lg:text-lg lg:mx-0">
                Developer, builder, and problem-solver with a passion for{" "}
                <span className="font-semibold text-purple-300">
                  clean code
                </span>
                ,{" "}
                <span className="font-semibold text-blue-300">
                  product thinking
                </span>
                , and{" "}
                <span className="font-semibold text-pink-300">
                  scalable tech
                </span>
                .
              </h4>
              <div className="absolute -bottom-2 left-0 w-32 h-0.5 bg-gradient-to-r from-purple-500 to-transparent rounded-full hidden lg:block"></div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 sm:flex-row lg:justify-start lg:gap-4">
              <div className="relative w-full group sm:w-auto">
                <div className="absolute transition duration-300 rounded-full -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 blur opacity-30"></div>
                <Link href="/linktree">
                  <button className="relative w-full px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 rounded-full shadow-lg sm:w-auto lg:px-6 lg:py-3 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span className="text-lg font-bold text-transparent sm:text-base bg-gradient-to-r from-white to-purple-100 bg-clip-text">
                        Get in Touch
                      </span>
                      <FaAngleRight className="w-5 h-5 text-white sm:w-4 sm:h-4 drop-shadow-sm" />
                    </span>
                  </button>
                </Link>
              </div>
              <div className="flex gap-4 sm:gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-3 overflow-hidden text-gray-400 transition-all duration-300 border border-gray-700 rounded-full shadow-lg group sm:p-2 bg-gray-800/50 backdrop-blur-sm hover:text-white hover:scale-110 hover:border-purple-500/50 hover:shadow-purple-500/20"
                >
                  <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:opacity-100"></div>
                  <FaGithub className="relative z-10 w-5 h-5 sm:w-4 sm:h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-3 overflow-hidden text-gray-400 transition-all duration-300 border border-gray-700 rounded-full shadow-lg group sm:p-2 bg-gray-800/50 backdrop-blur-sm hover:text-white hover:scale-110 hover:border-blue-500/50 hover:shadow-blue-500/20"
                >
                  <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 group-hover:opacity-100"></div>
                  <FaLinkedin className="relative z-10 w-5 h-5 sm:w-4 sm:h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-3 overflow-hidden text-gray-400 transition-all duration-300 border border-gray-700 rounded-full shadow-lg group sm:p-2 bg-gray-800/50 backdrop-blur-sm hover:text-white hover:scale-110 hover:border-pink-500/50 hover:shadow-pink-500/20"
                >
                  <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20 group-hover:opacity-100"></div>
                  <FaTwitter className="relative z-10 w-5 h-5 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[80vh] w-full text-white py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-32 h-32 rounded-full top-20 left-10 bg-purple-600/10 blur-3xl"></div>
        <div className="absolute w-40 h-40 rounded-full bottom-20 right-10 bg-blue-600/10 blur-3xl"></div>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-purple-600/5 blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      <motion.div
        animate={floatingAnimation}
        className="absolute w-2 h-2 bg-purple-400 rounded-full top-1/4 right-1/4 opacity-60"
      ></motion.div>
      <motion.div
        animate={floatingAnimation}
        style={{ animationDelay: "1s" }}
        className="absolute w-3 h-3 bg-blue-400 rounded-full bottom-1/3 left-1/4 opacity-40"
      ></motion.div>
      <motion.div
        animate={floatingAnimation}
        style={{ animationDelay: "2s" }}
        className="absolute w-1 h-1 bg-purple-300 rounded-full top-1/3 left-1/6 opacity-80"
      ></motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center gap-16 mx-auto max-w-7xl lg:flex-row lg:items-start lg:justify-between"
      >
        {/* Left: Profile Section */}
        <motion.div
          variants={itemVariants}
          className="text-center lg:text-left lg:flex-1 lg:max-w-md"
        >
          {/* Profile Image + Status Badge */}
          <motion.div
            variants={profileVariants}
            className="relative mx-auto mb-6 w-36 h-36 lg:w-40 lg:h-40 lg:mx-0 group"
          >
            <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-75 bg-gradient-to-r from-purple-600 to-blue-600 blur-md group-hover:opacity-100"></div>
            <img
              src="./kunal.jpg"
              alt="Kunal Arya"
              className="relative object-cover w-full h-full transition-transform duration-300 border-4 rounded-full shadow-2xl border-white/10 group-hover:scale-105"
            />
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              className="absolute flex items-center justify-center text-xs text-white bg-green-500 rounded-full shadow-lg w-7 h-7 bottom-1 right-1 ring-3 ring-white"
            >
              ✓
            </motion.span>
          </motion.div>

          {/* Name & Bio */}
          <motion.h1
            variants={itemVariants}
            className="mb-3 text-2xl font-bold lg:text-3xl"
          >
            Kunal Arya
          </motion.h1>
          <motion.h4
            variants={itemVariants}
            className="max-w-sm mx-auto mb-6 text-base leading-relaxed text-gray-400 lg:text-lg lg:mx-0"
          >
            Full-stack developer passionate about building smooth and scalable
            web experiences.
          </motion.h4>

          {/* Status & Location */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-3 text-sm font-medium sm:flex-row lg:justify-start"
          >
            <span className="flex items-center gap-2 px-3 py-2 text-green-500 transition-colors duration-300 border rounded-full bg-gray-800/50 backdrop-blur-sm border-green-500/20 hover:border-green-500/40">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
              Available for Work
            </span>
            <span className="flex items-center gap-2 text-gray-300 transition-colors duration-300 hover:text-white">
              <CiLocationOn className="text-purple-400" /> Bengaluru, India
            </span>
          </motion.div>
        </motion.div>

        {/* Right: Introduction */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-4xl text-center lg:text-left lg:flex-1 lg:max-w-2xl xl:max-w-3xl"
        >
          {" "}
          {/* Decorative elements */}
          <div className="absolute hidden w-20 h-20 rounded-full -top-4 -right-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-xl lg:block"></div>
          <div className="absolute hidden w-32 h-32 rounded-full -bottom-8 -left-8 bg-gradient-to-tr from-purple-600/10 to-pink-500/10 blur-2xl lg:block"></div>
          <motion.h1
            variants={itemVariants}
            className="relative mb-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-4xl xl:text-5xl"
          >
            <span className="hidden text-white sm:inline">
              Hello! I'm{" "}
              <span className="relative inline-block font-black text-white">
                Kunal Arya
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="absolute left-0 right-0 h-1 origin-left rounded-full bottom-1 bg-gradient-to-r from-purple-500 to-blue-500"
                />
              </span>
              <br />
            </span>
            <motion.span
              className="block text-2xl sm:text-3xl lg:text-3xl xl:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">
                Turning Ideas into Code
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
                and Code into Impact
              </span>
            </motion.span>
          </motion.h1>
          <motion.div variants={itemVariants} className="relative mb-8">
            <h4 className="relative z-10 max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 sm:text-xl lg:text-lg lg:mx-0">
              Developer, builder, and problem-solver with a passion for{" "}
              <span className="font-semibold text-purple-300">clean code</span>,{" "}
              <span className="font-semibold text-blue-300">
                product thinking
              </span>
              , and{" "}
              <span className="font-semibold text-pink-300">scalable tech</span>
              .
            </h4>
            <div className="absolute -bottom-2 left-0 w-32 h-0.5 bg-gradient-to-r from-purple-500 to-transparent rounded-full hidden lg:block"></div>
          </motion.div>
          {/* Call to Action + Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-6 sm:gap-8 sm:flex-row lg:justify-start lg:gap-4"
          >
            <div className="relative w-full group sm:w-auto">
              <div className="absolute transition duration-300 rounded-full -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 blur opacity-30"></div>
              <Link href="/linktree">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="relative w-full px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 rounded-full shadow-lg sm:w-auto group lg:px-6 lg:py-3 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className="text-lg font-bold text-transparent sm:text-base bg-gradient-to-r from-white to-purple-100 bg-clip-text">
                      Get in Touch
                    </span>
                    <FaAngleRight className="w-5 h-5 text-white sm:w-4 sm:h-4 drop-shadow-sm" />
                  </span>
                </motion.button>
              </Link>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-4 sm:gap-3">
              <motion.a
                whileHover={{ scale: 1.15, y: -3, rotateZ: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 overflow-hidden text-gray-400 transition-all duration-300 border border-gray-700 rounded-full shadow-lg group sm:p-2 bg-gray-800/50 backdrop-blur-sm hover:text-white hover:border-purple-500/50 hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:opacity-100"></div>
                <FaGithub className="relative z-10 w-5 h-5 sm:w-4 sm:h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15, y: -3, rotateZ: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 overflow-hidden text-gray-400 transition-all duration-300 border border-gray-700 rounded-full shadow-lg group sm:p-2 bg-gray-800/50 backdrop-blur-sm hover:text-white hover:border-blue-500/50 hover:shadow-blue-500/20"
              >
                <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 group-hover:opacity-100"></div>
                <FaLinkedin className="relative z-10 w-5 h-5 sm:w-4 sm:h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15, y: -3, rotateZ: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 overflow-hidden text-gray-400 transition-all duration-300 border border-gray-700 rounded-full shadow-lg group sm:p-2 bg-gray-800/50 backdrop-blur-sm hover:text-white hover:border-pink-500/50 hover:shadow-pink-500/20"
              >
                <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20 group-hover:opacity-100"></div>
                <FaTwitter className="relative z-10 w-5 h-5 sm:w-4 sm:h-4" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
