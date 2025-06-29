"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaStar } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "@/components/BlogDetails/HeroSection";
import AutoSliderCard from "@/components/BlogDetails/AutoSliderCard";
import Workexperi from "@/components/BlogDetails/WorkExp";
import NotionRenderer from "../NotionRender/NotionRenderer";

gsap.registerPlugin(ScrollTrigger);

interface BlogDetailsPageProps {
  post: {
    id: string;
    title: string;
    coverImage?: string;
    slug: string;
    ReadTime: string;
    Author: string;
    date: string;
    tags: string[];
    description: string;
    category: string;
    Featured?: boolean;
    blocks: any; // Notion blocks
  };
}

const BlogDetailsPage: React.FC<BlogDetailsPageProps> = ({ post }) => {
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const triggerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const triggerRef2 = useRef<HTMLDivElement>(null);
  const pinRef2 = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // Format the hero data
  const heroData = {
    category: post.category || "tech",
    title: post.title,
    date: new Date(post.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    author: post.Author,
    description: post.description,
    tags: post.tags,
    imageUrl: post.coverImage || "/kunal.jpg",
    Featured: post.Featured,
  };

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Update progress based on window scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!triggerRef.current || !endRef.current) return;

      const startPosition = triggerRef.current.getBoundingClientRect().top + window.scrollY;
      const endPosition = endRef.current.getBoundingClientRect().top + window.scrollY;
      const totalDistance = endPosition - startPosition;
      const scrollPosition = window.scrollY;

      if (scrollPosition < startPosition) {
        setProgress(0);
      } else if (scrollPosition > endPosition) {
        setProgress(100);
      } else {
        const currentProgress = ((scrollPosition - startPosition) / totalDistance) * 100;
        setProgress(Math.min(Math.max(currentProgress, 0), 100));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animations
  useEffect(() => {
    if (isMobile) return;

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (triggerRef.current && pinRef.current && endRef.current) {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top -3%",
        endTrigger: endRef.current,
        end: "top 40%",
        pin: pinRef.current,
        pinSpacing: true,
        markers: false,
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
        markers: false,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  return (
    <div className="px-4 md:px-8 lg:px-20" ref={mainContentRef}>
      <HeroSection {...heroData} />
      
      <div ref={triggerRef} className="h-[1px] w-full bg-[#2c2a2a] my-6 md:my-10"></div>

      <section className={`flex flex-col md:flex-row justify-between items-start w-full h-full ${isMobile ? "gap-8" : ""}`}>
        {/* Left part - Progress & Social */}
        <div
          ref={pinRef}
          className={`flex ${
            isMobile ? "flex-row justify-between" : "flex-col items-center justify-center"
          } w-full md:w-[10vh] ${isMobile ? "mb-6" : ""}`}
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
              {post.ReadTime}
            </div>
          </div>

          {/* Featured Badge */}
          {post.Featured && (
            <div className="flex items-center gap-2 bg-purple-500/20 text-purple-400 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
              <FaStar className="w-3.5 h-3.5" />
              Featured
            </div>
          )}

          <div className={`flex ${isMobile ? "flex-row" : "flex-col"} gap-4`}>
            <a href="#" className="text-2xl md:text-3xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl md:text-3xl">
              <FaXTwitter />
            </a>
            <a href="#" className="text-2xl md:text-3xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Center part - Main Content */}
        <div className="w-full md:w-[60%] lg:w-[95vh]">
          <div className="text-base md:text-lg notion-content">
            <NotionRenderer recordMap={post.blocks} />
          </div>
          <div ref={endRef} className="h-[1px] w-full bg-gray-800"></div>
        </div>

        {/* Right part - About & Cards */}
        <div className="w-full md:w-[30%] lg:w-[55vh] mt-8 md:mt-0">
          <div className="flex flex-col gap-6 md:gap-8">
            {/* About Card */}
            <div className="w-full bg-[#242323] rounded-xl md:rounded-3xl p-6 md:p-10">
              <p className="text-lg md:text-xl mb-4">About</p>
              <div className="flex items-center gap-4 md:gap-10 mb-4">
                <div className="h-[8vh] w-[8vh] md:h-[10vh] md:w-[10vh] rounded-[50%] overflow-hidden">
                  <Image
                    height={100}
                    width={100}
                    src="/kunal.jpg"
                    alt={post.Author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <Link href={`/profile/${post.Author}`}>
                    <h1 className="text-lg md:text-xl font-semibold cursor-pointer">
                      {post.Author}
                    </h1>
                  </Link>
                  <h3 className="text-sm md:text-base text-gray-300">
                    Web Developer
                  </h3>
                </div>
              </div>
              <p className="text-sm md:text-base mb-4">
                {post.description}
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

            {/* Additional Cards */}
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

export default BlogDetailsPage; 