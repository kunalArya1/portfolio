"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Prefetch all routes for faster navigation
const RoutePrefetcher = () => {
  const router = useRouter();

  useEffect(() => {
    const routes = [
      "/",
      "/projects",
      "/blogs",
      "/github",
      "/connect",
      "/vlog",
      "/linktree",
    ];

    // Prefetch routes with a small delay to avoid blocking initial load
    const prefetchWithDelay = async () => {
      for (const route of routes) {
        try {
          router.prefetch(route);
          // Small delay between prefetches to avoid overwhelming the browser
          await new Promise((resolve) => setTimeout(resolve, 100));
        } catch (error) {
          console.warn(`Failed to prefetch route ${route}:`, error);
        }
      }
    };

    // Start prefetching after a delay to ensure the current page loads first
    const timer = setTimeout(prefetchWithDelay, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return null; // This component doesn't render anything
};

export default RoutePrefetcher;
