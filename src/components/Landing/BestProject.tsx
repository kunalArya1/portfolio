import Link from "next/link";
import { projectData } from "@/utils/Data/ProjectData";
import Image from "next/image";
import ProjectImage from "@/components/ui/ProjectImage";

export default function BestProjects() {
  // Get the top 4 most recent projects based on date
  const recentProjects = projectData
    .filter((project) => project && project.date) // Filter out projects without dates
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  // Format date helper function
  const formatDate = (dateString: string) => {
    try {
      if (!dateString) return "No date";
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Invalid date";
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid date";
    }
  };

  // If no projects available, show placeholder
  if (recentProjects.length === 0) {
    return (
      <section className="w-full px-6 py-12 text-white">
        <div className="flex items-center justify-between mx-auto mb-6 max-w-7xl">
          <p className="text-sm font-semibold tracking-wide text-purple-400 uppercase">
            Best Projects
          </p>
          <Link href={"/projects"}>
            <p className="text-sm font-semibold cursor-pointer hover:underline">
              View All Projects
            </p>
          </Link>
        </div>
        <div className="pt-8 mx-auto border-t border-gray-700 max-w-7xl">
          <p className="py-10 text-center text-gray-400">
            No projects available at the moment.
          </p>
        </div>
      </section>
    );
  }

  const featuredProject = recentProjects[0];
  const otherProjects = recentProjects.slice(1);

  return (
    <section className="w-full px-6 py-12 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mx-auto mb-6 max-w-7xl">
        <p className="text-sm font-semibold tracking-wide text-purple-400 uppercase">
          Best Projects
        </p>
        <Link href={"/projects"}>
          <p className="text-sm font-semibold cursor-pointer hover:underline">
            View All Projects
          </p>
        </Link>
      </div>

      <div className="grid items-start grid-cols-1 gap-6 pt-8 mx-auto border-t border-gray-700 max-w-7xl md:gap-8 lg:grid-cols-2">
        {/* Featured Project */}
        <div className="h-full group">
          <Link
            href={featuredProject.demoLink || featuredProject.githubLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <div className="relative rounded-lg overflow-hidden h-[350px] sm:h-[400px] md:h-[450px]">
              <ProjectImage
                src={featuredProject.image || ""}
                alt={featuredProject.title || "Project"}
                title={featuredProject.title || "Untitled Project"}
                className="absolute inset-0 object-cover w-full h-full transition brightness-75 group-hover:brightness-90"
              />
              <div className="relative z-10 flex flex-col justify-end h-full p-4 sm:p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="mb-2 sm:mb-3">
                  {(featuredProject.tags || [])
                    .slice(0, 2)
                    .map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 mb-1 mr-2 text-xs font-medium text-purple-300 rounded-full sm:mb-2 bg-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium text-gray-300 bg-gray-700 rounded-full">
                    {featuredProject.category}
                  </span>
                </div>
                <h2 className="mb-2 text-xl font-bold leading-snug transition-colors sm:mb-3 sm:text-2xl md:text-3xl group-hover:text-purple-400">
                  {featuredProject.title || "Untitled Project"}
                </h2>
                <p className="mb-3 text-sm text-gray-300 sm:mb-4 sm:text-base line-clamp-2">
                  {featuredProject.description || "No description available."}
                </p>
                <p className="text-xs text-gray-400 sm:text-sm">
                  {featuredProject.date
                    ? formatDate(featuredProject.date)
                    : "No date"}{" "}
                  &bull;{" "}
                  <span className="ml-1">
                    {featuredProject.featured ? "Featured" : "Project"}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Project List */}
        <div className="min-h-[350px] sm:min-h-[400px] md:h-[450px]">
          <div className="flex flex-col h-full justify-between space-y-4 md:space-y-0">
            {otherProjects.map((project, index) => (
              <Link
                key={project.id || index}
                href={project.demoLink || project.githubLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group"
              >
                <div className="flex flex-col justify-center h-full py-4 pb-4 transition-colors border-b border-gray-700 md:py-3 hover:border-purple-500/30 last:border-b-0 md:last:border-b">
                  <div className="mb-2">
                    {(project.tags || []).slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block px-2 py-1 mr-2 text-xs font-medium text-gray-300 bg-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 text-base font-semibold transition-colors sm:text-lg md:text-xl group-hover:text-purple-400 line-clamp-2">
                    {project.title || "Untitled Project"}
                  </h3>
                  <p className="mb-3 text-sm text-gray-400 line-clamp-2">
                    {project.description || "No description available."}
                  </p>
                  <p className="text-xs text-gray-400 sm:text-sm">
                    {project.date ? formatDate(project.date) : "No date"} &bull;{" "}
                    <span className="ml-1">{project.category}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
