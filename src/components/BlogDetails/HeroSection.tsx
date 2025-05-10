import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface HeroProps {
  category: string;
  title: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export const HeroSection: FC<HeroProps> = (cate) => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 text-white">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-7">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">›</span>
        <Link
          href={`/category/${cate.category.toLowerCase()}`}
          className="hover:underline capitalize"
        >
          {cate.category}
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">{cate.title}</span>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-10 items-start">
        {/* Left Text Content */}
        <div className="flex-1">
          <p className="text-sm mb-2 text-gray-400">
            <span className="font-semibold text-white">{cate.author}</span> on{" "}
            {cate.date}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {cate.title}
          </h1>
          <p className="text-lg text-gray-300 mb-6">{cate.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {cate.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#1f1e1e] border border-[#3a3a3a] px-3 py-1 text-sm rounded-full"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[45%]">
          <div className="overflow-hidden rounded-2xl w-full aspect-[16/12]">
            <Image
              src={cate.imageUrl}
              alt="Blog hero image"
              width={800}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
