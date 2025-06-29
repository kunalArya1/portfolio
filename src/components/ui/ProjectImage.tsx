"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
  title: string;
  className: string;
}

export default function ProjectImage({
  src,
  alt,
  title,
  className,
}: ProjectImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError || !src) {
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
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
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
