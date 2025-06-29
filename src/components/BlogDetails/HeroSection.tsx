import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface HeroSectionProps {
  category: string;
  title: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  category,
  title,
  date,
  author,
  description,
  tags,
  imageUrl,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 text-white">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-7">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">›</span>
        {/* <Link
          href={`/category/${cate.category.toLowerCase()}`}
          className="hover:underline capitalize"
        >
          {cate.category}
        </Link> */}
        {category}
        <span className="mx-2">›</span>
        <span className="text-gray-300">{title}</span>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-10 items-start">
        {/* Left Text Content */}
        <div className="flex-1">
          <div className="mb-4">
            <span className="text-sm md:text-base uppercase tracking-wider text-gray-400">
              {category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{title}</h1>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={author}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-sm md:text-base">{author}</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-sm md:text-base text-gray-400">{date}</span>
          </div>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#242323] rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[45%]">
          <div className="mt-8 w-full aspect-[16/9] relative rounded-2xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
