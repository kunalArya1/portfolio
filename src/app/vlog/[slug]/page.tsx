import { getPostBySlug, getAllPosts } from "@/lib/notion";
import { notFound } from "next/navigation";
import NotionRenderer from "@/components/NotionRender/NotionRenderer";
import { Suspense } from "react";
import Shimmer from "@/components/ui/Shimmer";

// Metadata generation for Next.js 15
// export async function generateMetadata({ params }) {
//   console.log(params);

//   const post = await getPostBySlug(params.slug);

//   if (!post) {
//     return {
//       title: "Post Not Found",
//     };
//   }

//   return {
//     title: post.title,
//     description: post.description || `Read about ${post.title}`,
//     openGraph: {
//       title: post.title,
//       type: "article",
//       publishedTime: post.date,
//       authors: [post.Author],
//     },
//   };
// }

// Static generation configuration - Next.js 15 approach
export const fetchCache = "force-cache"; // Next.js 15's preferred way to specify caching
export const revalidate = 60; // Revalidate every 60 seconds

// Generate static paths
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Main component
export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params.slug);

  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString()
    : "";

  return (
    <Suspense fallback={<Shimmer />}>
      <article className="max-w-4xl mx-auto py-8 px-4">
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h1 className="text-3xl md:text-4xl font-bold px-5 py-3 bg-amber-400 rounded-lg">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4">
              <div className="px-4 py-2">
                <span className="block text-sm text-gray-500">Author</span>
                <span className="font-medium">{post.Author}</span>
              </div>

              <div className="px-4 py-2 bg-amber-400 rounded-lg">
                <span className="block text-sm text-gray-700">Reading Time</span>
                <span className="font-medium">{post.ReadTime}</span>
              </div>

              {formattedDate && (
                <div className="px-4 py-2">
                  <span className="block text-sm text-gray-500">Published</span>
                  <span className="font-medium">{formattedDate}</span>
                </div>
              )}
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-700" />
        </header>

        <main>
          <NotionRenderer recordMap={post.blocks} />
        </main>
      </article>
    </Suspense>
  );
}
