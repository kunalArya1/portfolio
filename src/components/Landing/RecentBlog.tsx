import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/notion";
import { Post } from "@/types/postTypes";
import BlogImage from "@/components/ui/BlogImage";

export default async function RecentBlog() {
  let recentPosts: Post[] = [];

  try {
    // Fetch all posts and get the top 4 most recent ones
    const allPosts = await getAllPosts();

    if (!allPosts || !Array.isArray(allPosts)) {
      throw new Error("Invalid posts data received");
    }

    recentPosts = allPosts
      .filter((post) => post && post.date) // Filter out posts without dates
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 4);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    // Return early with error state
    return (
      <section className="w-full px-6 py-12 text-white">
        <div className="flex items-center justify-between mx-auto mb-6 max-w-7xl">
          <p className="text-sm font-semibold tracking-wide text-purple-400 uppercase">
            Recent Blogs
          </p>
          <Link href={"/blogs"}>
            <p className="text-sm font-semibold cursor-pointer hover:underline">
              View All Blogs
            </p>
          </Link>
        </div>
        <div className="pt-8 mx-auto border-t border-gray-700 max-w-7xl">
          <p className="py-10 text-center text-gray-400">
            Unable to load blog posts. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  // Format date helper function
  const formatDate = (dateString: string) => {
    try {
      if (!dateString) return "No date";
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Invalid date";
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid date";
    }
  };

  // If no posts available, show placeholder
  if (recentPosts.length === 0) {
    return (
      <section className="w-full px-6 py-12 text-white">
        <div className="flex items-center justify-between mx-auto mb-6 max-w-7xl">
          <p className="text-sm font-semibold tracking-wide text-purple-400 uppercase">
            Recent Blogs
          </p>
          <Link href={"/blogs"}>
            <p className="text-sm font-semibold cursor-pointer hover:underline">
              View All Blogs
            </p>
          </Link>
        </div>
        <div className="pt-8 mx-auto border-t border-gray-700 max-w-7xl">
          <p className="py-10 text-center text-gray-400">
            No blog posts available at the moment.
          </p>
        </div>
      </section>
    );
  }

  const featuredPost = recentPosts[0];
  const otherPosts = recentPosts.slice(1);

  // Safety check for featuredPost
  if (!featuredPost) {
    return (
      <section className="w-full px-6 py-12 text-white">
        <div className="flex items-center justify-between mx-auto mb-6 max-w-7xl">
          <p className="text-sm font-semibold tracking-wide text-purple-400 uppercase">
            Personal Guides
          </p>
          <Link href={"/blogs"}>
            <p className="text-sm font-semibold cursor-pointer hover:underline">
              View All Blogs
            </p>
          </Link>
        </div>
        <div className="pt-8 mx-auto border-t border-gray-700 max-w-7xl">
          <p className="py-10 text-center text-gray-400">
            Loading blog posts...
          </p>
        </div>
      </section>
    );
  }
  return (
    <section className="w-full px-6 py-12 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mx-auto mb-6 max-w-7xl">
        <p className="text-sm font-semibold tracking-wide text-purple-400 uppercase">
          Personal Guides
        </p>
        <Link href={"/blogs"}>
          <p className="text-sm font-semibold cursor-pointer hover:underline">
            View All Blogs
          </p>
        </Link>
      </div>

      <div className="grid items-start grid-cols-1 gap-8 pt-8 mx-auto border-t border-gray-700 max-w-7xl lg:grid-cols-2">
        {/* Featured Blog */}
        <div className="h-full group">
          <Link
            href={`/blogs/${featuredPost.slug || ""}`}
            className="block h-full"
          >
            <div className="relative rounded-lg overflow-hidden h-[400px] md:h-[450px]">
              <BlogImage
                src={featuredPost.coverImage || ""}
                alt={featuredPost.title || "Blog post"}
                title={featuredPost.title || "Untitled Post"}
                className="absolute inset-0 object-cover w-full h-full transition brightness-75 group-hover:brightness-90"
              />
              <div className="relative z-10 flex flex-col justify-end h-full p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="mb-3">
                  {(featuredPost.tags || []).slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 mb-2 mr-2 text-xs font-medium text-purple-300 rounded-full bg-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mb-3 text-2xl font-bold leading-snug transition-colors md:text-3xl group-hover:text-purple-400">
                  {featuredPost.title || "Untitled Post"}
                </h2>
                <p className="mb-4 text-gray-300 line-clamp-2">
                  {featuredPost.description || "No description available."}
                </p>
                <p className="text-sm text-gray-400">
                  {featuredPost.date
                    ? formatDate(featuredPost.date)
                    : "No date"}{" "}
                  &bull;{" "}
                  <span className="ml-1">
                    {featuredPost.ReadTime || "5 min read"}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog List */}
        <div className="h-[400px] md:h-[450px]">
          <div className="flex flex-col justify-between h-full">
            {otherPosts.map((post, index) => (
              <Link
                key={post.id || index}
                href={`/blogs/${post.slug || ""}`}
                className="flex-1 group"
              >
                <div className="flex flex-col justify-center h-full py-3 pb-4 transition-colors border-b border-gray-700 hover:border-purple-500/30">
                  <div className="mb-2">
                    {(post.tags || []).slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block px-2 py-1 mr-2 text-xs font-medium text-gray-300 bg-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold transition-colors md:text-xl group-hover:text-purple-400 line-clamp-2">
                    {post.title || "Untitled Post"}
                  </h3>
                  <p className="mb-3 text-sm text-gray-400 line-clamp-2">
                    {post.description || "No description available."}
                  </p>
                  <p className="text-sm text-gray-400">
                    {post.date ? formatDate(post.date) : "No date"} &bull;{" "}
                    <span className="ml-1">
                      {post.ReadTime || "5 min read"}
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
