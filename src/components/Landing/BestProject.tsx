"use client";

type Project = {
  id: number;
  image?: string;
  tags: string[];
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    image:
      "https://ando.codesupply.co/design/wp-content/uploads/sites/2/2024/09/demo-image-0004-1920x1440.webp", // Replace with actual path
    tags: ["Design"],
    title: "Victory Mode",
    description:
      "Discover the latest trends in design and how they can inspire your creative journey.",
  },
  {
    id: 2,
    image:
      "https://ando.codesupply.co/design/wp-content/uploads/sites/2/2024/09/demo-image-0004-1920x1440.webp",
    tags: ["Branding", "Product Design"],
    title: "Breathing Sound Experience",
    description:
      "Unlock the power of color theory to make your designs more engaging and effective.",
  },
  {
    id: 3,
    image:
      "https://ando.codesupply.co/design/wp-content/uploads/sites/2/2024/09/demo-image-0004-1920x1440.webp",
    tags: ["Research"],
    title: "Amore Pacific",
    description:
      "Dive into the essentials of typography and elevate your design projects with precision.",
  },
];

export default function BestProjects() {
  return (
    <section className="w-full px-6 py-10 text-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-sm font-semibold text-purple-400 uppercase">
          Best Projects
        </h2>
        <button className="text-white text-sm font-semibold hover:underline">
          View All Projects
        </button>
      </div>

      <div className="space-y-10">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="flex flex-col sm:flex-row gap-4 border-t lg:gap-[25vh] border-[#3a3a3a] pt-6"
          >
            {/* Left: Image or Dot */}
            <div className="min-w-[40px] flex justify-center items-start pt-2">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[100%] lg:w-40 h-30 object-cover rounded-lg scale-100 lg:hover:scale-140 transition-all duration-100 hover:scale-120"
                />
              ) : (
                <span
                  className={`w-3 h-3 rounded-full mt-2 ${
                    idx === 0 ? "bg-purple-500" : "bg-gray-500"
                  }`}
                />
              )}
            </div>

            {/* Right: Info */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-1">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#3a3a3a] text-xs px-3 py-1 rounded-full text-gray-200 font-semibold"
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-400 mt-1">
                {project.description}
              </p>
            </div>

            {/* CTA */}
            <div className="sm:self-start mt-2 sm:mt-0">
              <button className="text-white text-sm font-semibold hover:underline whitespace-nowrap">
                Discover More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
