"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaSearch, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { tags, projects } from "@/constants/projectData";
import { getImagePath } from "@/utils/imageUtils";

const ITEMS_PER_PAGE = 6;
const LOADING_DELAY = 2000; // 2 seconds delay

// Forward ref properly for the ProjectCard
const ProjectCard = React.forwardRef(
  ({ project }: { project: any }, ref: any) => {
    const [imageError, setImageError] = useState(false);
    const imagePath = getImagePath(project.image);

    return (
      <div
        ref={ref}
        className="group h-[28rem] relative bg-[#1a1a1a] rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border border-[#2a2a2a] hover:border-purple-500/20 flex flex-col"
      >
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-sm opacity-50"></div>
              <div className="relative px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center gap-1.5">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs font-medium text-white">Featured</span>
              </div>
            </div>
          </div>
        )}

        <div className="relative h-52 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent z-10" />
          {imageError ? (
            <div className="w-full h-full bg-gradient-to-br from-purple-800/80 to-blue-800/80 flex items-center justify-center p-4">
              <span className="text-lg font-semibold text-center text-white">
                {project.title}
              </span>
            </div>
          ) : (
            <Image
              src={imagePath}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          )}
        </div>

        <div className="p-6 flex-1 flex flex-col">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-purple-500/5 text-purple-300 rounded-full text-xs font-medium hover:bg-purple-500/10 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex items-center gap-4 mt-auto">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group"
            >
              <FaExternalLinkAlt className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-300 transition-colors group"
            >
              <FaGithub className="text-sm group-hover:scale-110 transition-transform duration-200" />
              View Code
            </a>
          </div>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [showFeatured, setShowFeatured] = useState(false);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [loading, setLoading] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const observer = useRef<IntersectionObserver>();

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced search function
  const matchesSearchTerm = (project: any, searchTerm: string) => {
    if (!searchTerm.trim()) return true;

    const searchLower = searchTerm.toLowerCase();

    // Search in title and description
    if (
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower)
    ) {
      return true;
    }

    // Search in tags
    if (
      project.tags.some((tag: string) =>
        tag.toLowerCase().includes(searchLower)
      )
    ) {
      return true;
    }

    // Search in tech stack
    if (
      project.techStack.some((tech: string) =>
        tech.toLowerCase().includes(searchLower)
      )
    ) {
      return true;
    }

    return false;
  };

  // Filter projects based on search, project type, and featured status
  const filteredProjects = projects
    .filter((project) => {
      const matchesType = !selectedType || project.type === selectedType;
      const matchesFeatured = !showFeatured || project.featured;
      const matchesSearch = matchesSearchTerm(project, search);

      return matchesType && matchesFeatured && matchesSearch;
    })
    .sort((a, b) => {
      // Sort featured projects first, then by other criteria
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0; // Keep original order for projects with same featured status
    });

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const lastProjectElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
            setLoading(false);
          }, LOADING_DELAY);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [search, selectedType, showFeatured]);

  const projectTypes = ["Frontend", "Backend", "Fullstack"];

  const stats = [
    {
      value: projects.length,
      label: "Total Projects",
      onClick: () => {
        setShowFeatured(false);
        setSelectedType("");
      },
    },
    {
      value: projects.filter((project) => project.featured).length,
      label: "Featured Projects",
      onClick: () => setShowFeatured(true),
    },
    {
      value: [...new Set(projects.flatMap((project) => project.techStack))]
        .length,
      label: "Technologies Used",
      onClick: undefined,
    },
  ];

  return (
    <div className="min-h-screen px-3 sm:px-4 md:px-8 lg:px-20">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Header */}
      <div className="relative pt-4 sm:pt-6 pb-8 sm:pb-12">
        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="hidden md:flex items-center space-x-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <svg
              className="w-4 h-4 opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-purple-400 font-medium">Projects</span>
          </nav>

          {/* Mobile Stats - Only show key stats */}
          <div className="flex md:hidden justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-white">
                {projects.length}
              </div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <button
              onClick={() => setShowFeatured(!showFeatured)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${
                showFeatured
                  ? "border-purple-500/50 bg-purple-500/10 text-purple-400"
                  : "border-[#2a2a2a] text-gray-400"
              } transition-all duration-300`}
            >
              <svg
                className="w-4 h-4"
                fill={showFeatured ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <span className="text-sm">Featured</span>
            </button>
          </div>

          {/* Title and Search Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="max-w-xl">
              <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-center md:text-left">
                Featured Projects
              </h1>
              <p className="text-gray-400 mt-2 text-center md:text-left">
                Exploring innovative solutions through code, design, and
                technology
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md w-full mx-auto md:mx-0 group">
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setVisibleCount(ITEMS_PER_PAGE);
                }}
                className="w-full bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-xl px-5 py-2.5 md:py-3 pl-11 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-300" />
              {search && (
                <button
                  onClick={() => {
                    setSearch("");
                    setVisibleCount(ITEMS_PER_PAGE);
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-400 transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}

              {/* Search Focus Ring */}
              <div className="absolute inset-0 rounded-xl bg-purple-500/5 opacity-0 group-focus-within:opacity-100 -z-10 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Stats and Project Type Filter Container - Hide stats on mobile */}
          <div className="flex flex-col-reverse md:flex-row gap-6 justify-between">
            {/* Stats - Only show on md and up */}
            <div className="hidden md:flex flex-wrap justify-start gap-4">
              {stats.map((stat) => (
                <button
                  key={stat.label}
                  onClick={stat.onClick}
                  disabled={!stat.onClick}
                  className={`px-4 py-2 rounded-xl border ${
                    (stat.label === "Featured Projects" && showFeatured) ||
                    (stat.label === "Total Projects" &&
                      !showFeatured &&
                      !selectedType)
                      ? "border-purple-500/50 bg-purple-500/10"
                      : "border-[#2a2a2a]"
                  } flex items-center gap-3 transition-all duration-300 ${
                    stat.onClick
                      ? "hover:border-purple-500/30 hover:bg-purple-500/5"
                      : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Project Type Filter */}
            <div className="flex flex-wrap justify-center md:justify-end gap-2 md:max-w-[60%]">
              <button
                onClick={() => setSelectedType("")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedType === "" && !showFeatured
                    ? "bg-purple-500/20 text-purple-400 scale-105"
                    : "text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
                } border border-[#2a2a2a]`}
              >
                All
              </button>
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedType(type);
                    setShowFeatured(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedType === type
                      ? "bg-purple-500/20 text-purple-400 scale-105"
                      : "text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
                  } border border-[#2a2a2a]`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto py-8">
        {displayedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, index) => {
              const isLastElement = index === displayedProjects.length - 1;
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  ref={isLastElement ? lastProjectElementRef : null}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              No projects found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search criteria or explore different project
              types
            </p>
          </div>
        )}

        {/* Loading indicator */}
        {loading && (
          <div className="flex justify-center items-center mt-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-purple-500"></div>
            <span className="ml-3 text-gray-400">Loading more projects...</span>
          </div>
        )}
      </div>
    </div>
  );
}
