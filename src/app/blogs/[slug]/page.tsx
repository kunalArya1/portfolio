import { getPostBySlug, getAllPosts } from "@/lib/notion";
import { notFound } from "next/navigation";
import BlogDetailsPage from "@/components/BlogDetails/BlogDetailsPage";
import { Metadata } from "next";
import { Suspense } from "react";
import Shimmer from "@/components/ui/Shimmer";

// Static generation configuration
export const dynamic = 'force-static';
export const revalidate = 60;

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} | Kunal Arya's Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
  };
}

// Generate static paths
export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Main component
export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const post = await getPostBySlug(params.slug);

    if (!post) {
      notFound();
    }

    return (
      <Suspense fallback={<Shimmer />}>
        <BlogDetailsPage post={post} />
      </Suspense>
    );
  } catch (error) {
    console.error('Error rendering blog post:', error);
    throw error; // Let Next.js error boundary handle it
  }
}
