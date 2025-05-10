"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "@/components/BlogDetails/HeroSection";
import AutoSliderCard from "@/components/BlogDetails/AutoSliderCard";
import Workexperi from "@/components/BlogDetails/WorkExp";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  category: string;
  title: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

const cate: HeroProps = {
  category: "tech",
  title: "The Future of Work: Tech and Remote Trends",
  date: "6 Aug 2025 ",
  author: "Kunal Arya",
  description:
    "Find out why 2024 is predicted to be a pivotal year for sports technology and its impact on the industry.",
  tags: ["react", "next"],
  imageUrl: "/kunal.jpg",
};

const Hero = () => {
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const triggerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const triggerRef2 = useRef<HTMLDivElement>(null);
  const pinRef2 = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Update progress based on window scroll between triggerRef and endRef
  useEffect(() => {
    const handleScroll = () => {
      if (!triggerRef.current || !endRef.current) return;

      // Get the position of start and end elements
      const startPosition =
        triggerRef.current.getBoundingClientRect().top + window.scrollY;
      const endPosition =
        endRef.current.getBoundingClientRect().top + window.scrollY;
      const totalDistance = endPosition - startPosition;

      // Get current scroll position
      const scrollPosition = window.scrollY;

      // Calculate progress only when we're between start and end
      if (scrollPosition < startPosition) {
        // Before the start point, progress is 0%
        setProgress(0);
      } else if (scrollPosition > endPosition) {
        // After the end point, progress is 100%
        setProgress(100);
      } else {
        // Between start and end, calculate percentage
        const currentProgress =
          ((scrollPosition - startPosition) / totalDistance) * 100;
        setProgress(Math.min(Math.max(currentProgress, 0), 100));
      }
    };

    // Add scroll event listener to window
    window.addEventListener("scroll", handleScroll);

    // Initial calculation
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Skip GSAP setup for mobile devices
    if (isMobile) return;

    // Clear existing ScrollTriggers before creating new ones
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (triggerRef.current && pinRef.current && endRef.current) {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top -3%",
        endTrigger: endRef.current,
        end: "top 40%",
        pin: pinRef.current,
        pinSpacing: true,
        markers: false, // Set to true for debugging
      });
    }

    if (triggerRef2.current && pinRef2.current && endRef.current) {
      ScrollTrigger.create({
        trigger: pinRef2.current,
        start: "top 3%",
        endTrigger: endRef.current,
        end: "top 80%",
        pin: pinRef2.current,
        pinSpacing: true,
        markers: false, // Set to true for debugging
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  return (
    <div className="px-4 md:px-8 lg:px-20" ref={mainContentRef}>
      <HeroSection {...cate} />
      {/* Details */}
      <div
        ref={triggerRef}
        className="h-[1px] w-full bg-[#2c2a2a] my-6 md:my-10"
      ></div>

      {/* Main Content Section */}
      <section
        className={`flex flex-col md:flex-row justify-between items-start w-full h-full ${
          isMobile ? "gap-8" : ""
        }`}
      >
        {/** Left part - Progress & Social */}
        <div
          ref={pinRef}
          className={`flex ${
            isMobile
              ? "flex-row justify-between"
              : "flex-col items-center justify-center"
          } 
                    w-full md:w-[10vh] ${isMobile ? "mb-6" : ""}`}
        >
          {/* Progress Circle */}
          <div className="relative w-16 h-16 mb-0 md:mb-6">
            <svg className="transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-gray-800"
                stroke="currentColor"
                strokeWidth="2"
                fill="black"
                d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
              />
              <path
                className="text-white-500"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeDasharray={`${progress}, 100`}
                d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white">
              3 min
            </div>
          </div>

          <div className={`flex ${isMobile ? "flex-row" : "flex-col"} gap-4`}>
            <a href="#" className="text-2xl md:text-3xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl md:text-3xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl md:text-3xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/** Center part - Main Content */}
        <div className="w-full md:w-[60%] lg:w-[95vh]">
          <div className="text-base md:text-lg">
            personal development and lifestyle, it encourages readers to explore
            topics that touch on their emotions and experiences. Stories that
            Matter At the core of Revision is a commitment to delivering stories
            that matter. Unlike traditional media platforms or news, Revision
            invites readers into a world of deeply personal narratives. The
            websites title, Heartfelt Reflections: Stories of Love, Loss, and
            Growth, signals this intent clearly, inviting you to journey through
            the most intimate aspects of human experience. But were not just
            talking about written content — there are many ways that Revision
            fosters connection and creativity. The different types of features
            include: Author Profiles: Each contributor has a detailed profile,
            allowing readers to connect with their personal journey and social
            media presence. Experience Widgets: Contributors showcase their
            professional growth and skills, giving readers insight into their
            expertise. Technologies Section: Creators highlight the tools they
            use, such as Figma, Photoshop, and more, providing transparency in
            their creative processes. Creating Widget: A space where
            contributors can link to external projects and portfolios, expanding
            their reach beyond the platform. creativity. The different types of
            features include: Author Profiles: Each contributor has a detailed
            profile, allowing readers to connect with their personal journey and
            their expertise. Technologies Section: Creators highlight the tools
            they use, such as Figma, Photoshop, and more, providing transparency
            in their creative processes. Creating Widget: A space where
            contributors can link to external projects and portfolios, expanding
            their reach beyond the platform. creativity. The different types of
            features include: Author Profiles: Each contributor has a detailed
            profile, allowing readers to connect with their personal journey and
            social media presence. Experience Widgets: Contributors personal
            development and lifestyle, it encourages readers to explore topics
            that touch on their emotions and experiences. Stories that Matter At
            the core of Revision is a commitment to delivering stories that
            matter. Unlike traditional media platforms or news, Revision invites
            readers into a world of deeply personal narratives. The websites
            title, Heartfelt Reflections: Stories of Love, Loss, and Growth,
            signals this intent clearly, inviting you to journey through the
            most intimate aspects of human experience. But were not just
            talking about written content — there are many ways that Revision
            fosters connection and creativity. The different types of features
            include: Author Profiles: Each contributor has a detailed profile,
            allowing readers to connect with their personal journey and social
            media presence. Experience Widgets: Contributors showcase their
            professional growth and skills, giving readers insight into their
            expertise. Technologies Section: Creators highlight the tools they
            use, such as Figma, Photoshop, and more, providing transparency in
            their creative processes. Creating Widget: A space where
            contributors can link to external projects and portfolios, expanding
            their reach beyond the platform. creativity. The different types of
            features include: Author Profiles: Each contributor has a detailed
            profile, allowing readers to connect with their personal journey and
            their expertise. Technologies Section: Creators highlight the tools
            they use, such as Figma, Photoshop, and more, providing transparency
            in their creative processes. Creating Widget: A space where
            contributors can link to external projects and portfolios, expanding
            their reach beyond the platform. creativity. The different types of
            features include: Author Profiles: Each contributor has a detailed
            profile, allowing readers to connect with their personal journey and
            social media presence. Experience Widgets: Contributors showcase
            their professional growth and skills, they use, such as Figma,
            Photoshop, and more, providing transparency in their creative
            processes. Creating Widget: A space where contributors can link to
            external projects and portfolios, expanding their reach beyond the
            platform. creativity. The different types of features include:
            Author Profiles: Each contributor has a detailed profile, allowing
            readers to connect with their personal journey and social media
            presence. Experience Widgets: Contributors showcase their
            professional growth and skills, giving readers insight into their
            expertise. Technologies Section: Creators highlight the tools they
            use, such as Figma, Photoshop, and more, providing transparency in
            their creative processes. Creating Widget: A space where
            contributors can link to external projects and portfolios, expanding
            their reach beyond the platform.
          </div>
          <div ref={endRef} className="h-[1px] w-full bg-[#000000]"></div>
        </div>

        {/** Right part - About & Cards */}
        <div className="w-full md:w-[30%] lg:w-[55vh] mt-8 md:mt-0">
          <div className="flex flex-col gap-6 md:gap-8">
            {/* About Card */}
            <div className="w-full bg-[#242323] rounded-xl md:rounded-3xl p-6 md:p-10">
              <p className="text-lg md:text-xl mb-4">About</p>
              <div className="flex items-center gap-4 md:gap-10 mb-4">
                <div className="h-[8vh] w-[8vh] md:h-[10vh] md:w-[10vh] rounded-[50%] overflow-hidden">
                  <Image
                    src="/kunal.jpg"
                    alt="Kunal Arya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <Link href={`/profile/${cate.author}`}>
                    <h1 className="text-lg md:text-xl font-semibold cursor-pointer">
                      Kunal Arya
                    </h1>
                  </Link>
                  <h3 className="text-sm md:text-base text-gray-300">
                    Web Developer
                  </h3>
                </div>
              </div>
              <p className="text-sm md:text-base mb-4">
                Ethan Caldwell shares thoughtful insights and reflections on
                life, culture, and personal growth. His work explores the
                intersections of creativity and experience, offering readers
                unique perspectives.
              </p>

              <div className="my-2">
                <p className="text-sm md:text-base">📌 India</p>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-xl md:text-2xl">
                  <FaFacebook />
                </a>
                <a href="#" className="text-xl md:text-2xl">
                  <FaTwitter />
                </a>
                <a href="#" className="text-xl md:text-2xl">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Additional Cards - These will stack on mobile */}
            <AutoSliderCard />
            <Workexperi />
            <div
              ref={triggerRef2}
              className="w-full h-40 md:h-60 bg-[#242323] rounded-xl md:rounded-3xl"
            ></div>
            <div
              ref={pinRef2}
              className="w-full h-40 md:h-60 bg-[#242323] rounded-xl md:rounded-3xl"
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
