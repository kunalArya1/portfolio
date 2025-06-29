"use client";

import React, { useEffect, useState } from "react";
import { FaFilter, FaSearch, FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { Post } from "@/types/postTypes";

interface BlogPageProps {
  allPosts: Post[];
}

const tags = ["React", "Node", "Next.js", "Tailwind", "JavaScript"];
const authors = ["Kunal Arya", "John Doe", "Jane Smith"];

const BlogCard = ({ blog }: { blog: Post }) => {
  return (
    <div className="group h-[28rem] relative bg-[#1a1a1a] rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border border-[#2a2a2a] hover:border-purple-500/20">
      <Link href={`/blogs/${blog.slug}`}>
        <div className="relative overflow-hidden h-52">
          {blog.coverImage ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent z-10" />
              <Image
                src={blog.coverImage}
                alt={blog.title}
                width={400}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105"
              />
            </>
          ) : (
            <div className="flex items-center justify-center w-full h-full p-4 bg-gradient-to-br from-purple-800/80 to-blue-800/80">
              <span className="text-lg font-semibold text-center">
                {blog.title}
              </span>
            </div>
          )}
          {/* Reading time badge */}
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-white/90 z-20 flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6l4 2"
              />
            </svg>
            {blog.ReadTime || "5 min read"}
          </div>
          {/* Featured badge */}
          {blog.Featured && (
            <div className="absolute z-20 top-4 right-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-r from-purple-600 to-pink-600 blur-sm"></div>
                <div className="relative px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-medium text-white">
                    Featured
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4 flex flex-col h-[calc(100%-13rem)]">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {blog.tags &&
            blog.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-purple-500/5 text-purple-300 rounded-full text-xs font-medium hover:bg-purple-500/10 transition-colors"
              >
                {tag}
              </span>
            ))}
        </div>

        {/* Title */}
        <Link href={`/blogs/${blog.slug}`}>
          <h2 className="mb-2 text-lg font-bold transition-colors line-clamp-2 group-hover:text-purple-400">
            {blog.title}
          </h2>
        </Link>

        {/* Description */}
        <p className="flex-grow mb-4 text-xs leading-relaxed text-gray-400 line-clamp-3">
          {blog.description}
        </p>

        {/* Author and Date */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10">
              <span className="text-sm font-medium text-purple-300">
                {blog.Author?.charAt(0)}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-300">
                {blog.Author}
              </span>
              <span className="text-xs text-gray-500">
                {new Date(blog.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogPage: React.FC<BlogPageProps> = ({ allPosts }) => {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState<Post[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState("no");

  useEffect(() => {
    if (!allPosts || allPosts.length === 0) return;

    console.log("All posts:", allPosts);
    console.log(
      "Featured posts:",
      allPosts.filter((post) => post.Featured)
    );

    const filtered = allPosts.filter((blog: Post) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.description.toLowerCase().includes(search.toLowerCase());
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => blog.tags.includes(tag));
      const matchesAuthor =
        selectedAuthor === "" || blog.Author === selectedAuthor;
      const matchesDate = selectedDate === "" || blog.date === selectedDate;
      const matchesFeatured = !showFeaturedOnly || blog.Featured;

      if (showFeaturedOnly) {
        console.log("Checking featured for blog:", blog.title, blog.Featured);
      }

      return (
        matchesSearch &&
        matchesTags &&
        matchesAuthor &&
        matchesDate &&
        matchesFeatured
      );
    });

    console.log("Filtered blogs:", filtered);
    setFilteredBlogs(filtered);
  }, [
    allPosts,
    search,
    selectedTags,
    selectedAuthor,
    selectedDate,
    showFeaturedOnly,
  ]);

  // Calculate stats
  const totalBlogs = allPosts?.length || 0;
  const featuredBlogs = allPosts?.filter((blog) => blog.Featured).length || 0;
  const uniqueTags = Array.from(
    new Set(allPosts?.flatMap((blog) => blog.tags) || [])
  ).length;

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="relative pt-6 pb-12">
        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav className="flex items-center mb-6 space-x-2 text-sm text-gray-400">
            <Link href="/" className="transition-colors hover:text-purple-400">
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
            <span className="font-medium text-purple-400">Blog</span>
          </nav>

          {/* Title and Search Section */}
          <div className="flex flex-col gap-6 mb-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold text-transparent md:text-4xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                Tech Insights & Tutorials
              </h1>
              <p className="mt-2 text-gray-400">
                Deep dives into web development, coding best practices, and tech
                innovations
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-[#2a2a2a] rounded-xl px-5 py-2.5 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
              />
              <FaSearch className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row">
            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              <div
                className="px-4 py-2 rounded-xl border border-[#2a2a2a] flex items-center gap-3 cursor-pointer hover:bg-[#2a2a2a] transition-colors"
                onClick={() => setShowFeaturedOnly("no")}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg">
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
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8m-2 12a2 2 0 01-2-2v-1"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">
                    {totalBlogs}
                  </div>
                  <div className="text-xs text-gray-400">Total Articles</div>
                </div>
              </div>

              <div
                className="px-4 py-2 rounded-xl border border-[#2a2a2a] flex items-center gap-3 cursor-pointer hover:bg-[#2a2a2a] transition-colors"
                onClick={() =>
                  setShowFeaturedOnly((prev) => (prev === "no" ? "yes" : "no"))
                }
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg">
                  <FaStar
                    className={`w-4 h-4 ${
                      showFeaturedOnly ? "text-yellow-400" : "text-pink-400"
                    }`}
                  />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">
                    {featuredBlogs}
                  </div>
                  <div className="text-xs text-gray-400">Featured</div>
                </div>
              </div>

              <div className="px-4 py-2 rounded-xl border border-[#2a2a2a] flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg">
                  <svg
                    className="w-4 h-4 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">
                    {uniqueTags}
                  </div>
                  <div className="text-xs text-gray-400">Categories</div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() =>
                    setSelectedTags((prev) =>
                      prev.includes(tag)
                        ? prev.filter((t) => t !== tag)
                        : [...prev, tag]
                    )
                  }
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedTags.includes(tag)
                      ? "bg-purple-500/20 text-purple-400 scale-105"
                      : "text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
                  } border border-[#2a2a2a]`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="pb-12 mx-auto max-w-7xl">
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.slice(0, visibleCount).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full">
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
            <h3 className="mb-2 text-xl font-semibold text-white">
              No articles found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search criteria or explore different tags
            </p>
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredBlogs.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="hover:bg-purple-500/10 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 mx-auto border border-[#2a2a2a] hover:border-purple-500/30 group"
            >
              Load More
              <svg
                className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
