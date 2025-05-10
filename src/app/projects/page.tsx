"use client";

import { useEffect, useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const tags = ["React", "Node", "Next.js", "Tailwind", "JavaScript"];
const authors = ["Kunal Arya", "John Doe", "Jane Smith"];
const initialBlogs = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  title: `Project Title ${i + 1}`,
  author: authors[i % authors.length],
  tags: [tags[i % tags.length]],
  date: `2024-05-${(i % 28) + 1}`,
  description: "This is a brief description of the project.",
  image:
    "https://ando.codesupply.co/design/wp-content/uploads/sites/2/2024/09/demo-image-0005-1920x1440.webp",
}));

export default function Projects() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showAdvancedFilter, setShowAdvancedFilter] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(initialBlogs);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    let filtered = initialBlogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.description.toLowerCase().includes(search.toLowerCase());
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => blog.tags.includes(tag));
      const matchesAuthor =
        selectedAuthor === "" || blog.author === selectedAuthor;
      const matchesDate = selectedDate === "" || blog.date === selectedDate;
      return matchesSearch && matchesTags && matchesAuthor && matchesDate;
    });
    setFilteredBlogs(filtered);
  }, [search, selectedTags, selectedAuthor, selectedDate]);

  return (
    <div className="px-6 lg:px-20 py-10 text-white  min-h-screen">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-4">
        <Link href="/">Home</Link> / <span>Projects</span>
      </div>

      {/* Heading and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold">All Projects</h1>
        <div className="flex items-center border border-[#3a3a3a] rounded-3xl px-4 py-2 bg-[#1f1e1e] w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-white flex-grow"
          />
          <FaSearch />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="flex gap-2 flex-wrap">
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
              className={`px-4 py-2 rounded-2xl text-sm border border-[#3a3a3a] ${
                selectedTags.includes(tag) ? "bg-[#3a3a3a]" : "bg-[#1f1e1e]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowAdvancedFilter(!showAdvancedFilter)}
          className="flex items-center gap-2 border border-[#3a3a3a] px-4 py-2 rounded-2xl text-sm bg-[#1f1e1e]"
        >
          <FaFilter /> Filters
        </button>
      </div>

      {/* Advanced Filters */}
      {showAdvancedFilter && (
        <div className="mb-6 border border-[#3a3a3a] bg-[#1f1e1e] p-4 rounded-lg">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1 text-sm">Author</label>
              <select
                className="w-full p-2 bg-[#0e0e0e] border border-[#3a3a3a] rounded"
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
              >
                <option value="">All</option>
                {authors.map((author) => (
                  <option key={author} value={author}>
                    {author}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 text-sm">Date</label>
              <input
                type="date"
                className="w-full p-2 bg-[#0e0e0e] border border-[#3a3a3a] rounded"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Contains Text</label>
              <input
                type="text"
                className="w-full p-2 bg-[#0e0e0e] border border-[#3a3a3a] rounded"
                placeholder="Search text in content"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredBlogs.slice(0, visibleCount).map((blog) => (
          <div
            key={blog.id}
            className="border border-[#3a3a3a] bg-[#1f1e1e] rounded-lg overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex gap-2 text-sm text-amber-400 mb-2">
                {blog.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
              <h2 className="text-xl font-semibold mb-1">{blog.title}</h2>
              <p className="text-sm text-gray-400 mb-2">
                By {blog.author} — {blog.date}
              </p>
              <p className="text-sm text-gray-300">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < filteredBlogs.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="bg-[#7728bc] text-white px-6 py-2 rounded-2xl"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
