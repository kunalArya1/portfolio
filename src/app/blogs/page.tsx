// app/blogs/page.tsx (server component)
import { getAllPosts } from "@/lib/notion";
import { Post } from "@/types/postTypes";
import { Metadata } from "next";
import Blog from "@/components/Blog/Blog";

// Metadata configuration
export const metadata: Metadata = {
  title: "Blog | Kunal Arya",
  description: "Read my latest thoughts, tutorials, and insights on technology, programming, and web development.",
  openGraph: {
    title: "Blog | Kunal Arya",
    description: "Read my latest thoughts, tutorials, and insights on technology, programming, and web development.",
  },
};

export default async function BlogsPage() {
  try {
    const posts: Post[] = await getAllPosts();

    return (
      <div className="px-4 md:px-8 lg:px-20">
        <Blog allPosts={posts} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return (
      <div className="px-4 md:px-8 lg:px-20 py-10">
        <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg">
          <p className="text-red-700 dark:text-red-100">
            Failed to load blog posts. Please try again later.
          </p>
        </div>
      </div>
    );
  }
}
