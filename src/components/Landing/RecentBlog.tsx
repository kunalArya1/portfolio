import Link from "next/link";

export default function RecentBlog() {
  return (
    <section className="w-full  text-white py-12 px-6">
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
        {/* Featured Blog */}
        <div className="relative rounded-lg overflow-hidden group">
          <img
            src="https://ando.codesupply.co/design/wp-content/uploads/sites/2/2024/09/demo-image-0008-1920x1440.webp" // replace with real path
            alt="Featured"
            className="w-full h-full object-cover absolute inset-0 brightness-75 group-hover:brightness-90 transition"
          />
          <div className="relative p-6 z-10 flex flex-col justify-end h-[300px] md:h-[350px]">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-2">
              My Favorite Resources and Blogs for Self-Development
            </h2>
            <p className="text-gray-300 mb-4">
              Master the art of negative space to create clean, impactful
              designs that resonate.
            </p>
            <p className="text-sm text-gray-400">
              Jul 8, 2024 &bull; <span className="ml-1">3 min read</span>
            </p>
          </div>
        </div>

        {/* Blog List */}
        <div className="flex flex-col justify-between gap-6">
          {[
            {
              title: "Tips for Designing Effective Menus That Users Love",
              date: "Jun 17, 2024",
              time: "6 min read",
            },
            {
              title:
                "A Guide to Designing with Accessibility in Mind for All Users",
              date: "Jun 10, 2024",
              time: "4 min read",
            },
            {
              title:
                "The Role of User Personas in Guiding Your Design Decisions",
              date: "Jun 1, 2024",
              time: "7 min read",
            },
          ].map((post, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <h3 className="font-semibold text-lg md:text-xl mb-1">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400">
                {post.date} &bull; <span className="ml-1">{post.time}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
