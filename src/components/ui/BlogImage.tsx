"use client";

import Image from "next/image";
import { useState } from "react";

interface BlogImageProps {
  src: string;
  alt: string;
  title: string;
  className: string;
}

export default function BlogImage({
  src,
  alt,
  title,
  className,
}: BlogImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError || !src || src === "/kunal.jpg") {
    return (
      <div
        className={`${className} bg-gradient-to-br from-purple-800/80 to-blue-800/80 flex items-center justify-center p-6`}
      >
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white text-center leading-tight">
            {title}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <Image
      width={600}
      height={400}
      src={src}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
    />
  );
}
