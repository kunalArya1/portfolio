import { Suspense } from "react";

import WorkExperience from "@/components/Landing/WorkExp";
import BestProjects from "@/components/Landing/BestProject";
import SkillsSection from "@/components/Landing/Skills";
import RecentBlog from "@/components/Landing/RecentBlog";
import RecentBlogErrorBoundary from "@/components/Landing/RecentBlogErrorBoundary";
import CaseStudies from "@/components/Landing/CaseStudies";
import HeroSection from "@/components/Landing/HeroSection";
import NewHeroSection from "@/components/Landing/NewHeroSection";
import ExperienceSection from "@/components/Landing/Experience";
import TechnicalSkills from "@/components/Landing/TechnicalSkills";
import Newsletter from "@/components/Landing/Newsletter";

// Loading component for RecentBlog
function RecentBlogSkeleton() {
  return (
    <section className="w-full px-6 py-12 text-white">
      <div className="flex items-center justify-between mx-auto mb-6 max-w-7xl">
        <p className="text-sm font-semibold tracking-wide text-purple-400 uppercase">
          Personal Guides
        </p>
        <div className="text-sm font-semibold">View All Blogs</div>
      </div>
      <div className="grid grid-cols-1 gap-8 pt-8 mx-auto border-t border-gray-700 max-w-7xl lg:grid-cols-2">
        {/* Featured Blog Skeleton */}
        <div className="relative overflow-hidden bg-gray-800 rounded-lg animate-pulse">
          <div className="h-[300px] md:h-[350px] bg-gray-700"></div>
        </div>
        {/* Blog List Skeleton */}
        <div className="flex flex-col justify-between gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="pb-4 border-b border-gray-700">
              <div className="h-4 mb-2 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-6 mb-1 bg-gray-800 rounded animate-pulse"></div>
              <div className="h-3 bg-gray-700 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="w-full h-full px-3 md:px-10 lg:px-20">
      {/* hero section */}
      <NewHeroSection />
      {/* case studies section */}
      <section>
        <CaseStudies />
      </section>

      {/* featured section */}
      <section></section>
      {/* project section */}
      <section>
        <BestProjects />
      </section>
      {/* recent blog section */}
      <section>
        <RecentBlogErrorBoundary>
          <Suspense fallback={<RecentBlogSkeleton />}>
            <div className="min-h-[400px]">
              <RecentBlog />
            </div>
          </Suspense>
        </RecentBlogErrorBoundary>
      </section>

      {/* experience section */}
      <section>
        <ExperienceSection />
      </section>

      {/* technical skills section */}
      {/* <section>
        <TechnicalSkills />
      </section> */}

      {/* skills section */}
      <section>
        <SkillsSection />
      </section>

      {/* my reasoning section */}
      <section></section>
      {/* work exprenice section */}
      {/* <section>
        <WorkExperience />
      </section> */}
      {/* newsletter section */}
      {/* <section>
        <Newsletter />
      </section> */}
    </div>
  );
}
