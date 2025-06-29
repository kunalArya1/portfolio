"use client";
import { useEffect } from "react";

import WorkExperience from "@/components/Landing/WorkExp";
import BestProjects from "@/components/Landing/BestProject";
import SkillsSection from "@/components/Landing/Skills";
import RecentBlog from "@/components/Landing/RecentBlog";
import CaseStudies from "@/components/Landing/CaseStudies";
import HeroSection from "@/components/Landing/HeroSection";

export default function Home() {
  return (
    <div className="h-full w-full px-3 md:px-10 lg:px-20">
      {/* hero section */}
      <HeroSection />
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
        <RecentBlog />
      </section>

      {/* my reasoning section */}
      <section></section>
      {/* skills section */}
      <section>
        <SkillsSection />
      </section>
      {/* work exprenice section */}
      <section>
        <WorkExperience />
      </section>
      {/* newsletter section */}
      <section>{/* <NewLetter /> */}</section>
    </div>
  );
}
