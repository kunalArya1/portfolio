"use client";

import Link from "next/link";

export default function RecentBlogFallback() {
  return (
    <section className="w-full text-white py-12 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6 flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-400">
          Personal Guides
        </p>
        <Link href={"/blogs"}>
          <p className="text-sm font-semibold cursor-pointer hover:underline">
            View All Blogs
          </p>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Featured Blog Placeholder */}
        <div className="relative rounded-lg overflow-hidden bg-gray-800/50 border border-gray-700">
          <div className="relative p-6 z-10 flex flex-col justify-end h-[300px] md:h-[350px]">
            <div className="mb-2">
              <span className="inline-block bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs font-medium mr-2 mb-2">
                Coming Soon
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-2 text-gray-300">
              Blog posts will appear here soon
            </h2>
            <p className="text-gray-400 mb-4">
              I'm working on some amazing content that will be published here.
              Stay tuned!
            </p>
            <p className="text-sm text-gray-500">Check back soon for updates</p>
          </div>
        </div>

        {/* Blog List Placeholder */}
        <div className="flex flex-col justify-between gap-6">
          {[1, 2, 3].map((index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <div className="mb-2">
                <span className="inline-block bg-gray-700 text-gray-400 px-2 py-1 rounded-full text-xs font-medium mr-2">
                  Category
                </span>
              </div>
              <h3 className="font-semibold text-lg md:text-xl mb-1 text-gray-300">
                Exciting blog post #{index} coming soon
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                This will be an amazing piece of content about technology and
                development.
              </p>
              <p className="text-sm text-gray-500">
                Coming soon &bull; <span className="ml-1">5 min read</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
