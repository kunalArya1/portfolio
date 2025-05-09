export default function CaseStudies() {
  return (
    <section className="min-h-[60vh] w-full  py-10 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-purple-500">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <p>Case Studies</p>
          </div>
          <hr className="border-gray-700 mt-2" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card */}
          <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <div className="w-14 h-14 bg-green-100 flex items-center justify-center rounded-lg">
                <span className="text-green-500 font-bold text-xl">W</span>{" "}
                {/* Replace with actual icon */}
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-1">
              UX Odyssey <span className="inline-block ml-1">→</span>
            </h2>
            <p className="text-sm text-gray-400 mb-2">double studio.com</p>
            <p className="text-gray-300 text-sm">
              The strategic objective was to attract upmarket audiences by
              targeting specific.
            </p>
          </div>

          <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <div className="w-14 h-14 bg-green-100 flex items-center justify-center rounded-lg">
                <span className="text-green-500 font-bold text-xl">W</span>{" "}
                {/* Replace with actual icon */}
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-1">
              UX Odyssey <span className="inline-block ml-1">→</span>
            </h2>
            <p className="text-sm text-gray-400 mb-2">double studio.com</p>
            <p className="text-gray-300 text-sm">
              The strategic objective was to attract upmarket audiences by
              targeting specific.
            </p>
          </div>

          <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <div className="w-14 h-14 bg-green-100 flex items-center justify-center rounded-lg">
                <span className="text-green-500 font-bold text-xl">W</span>{" "}
                {/* Replace with actual icon */}
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-1">
              UX Odyssey <span className="inline-block ml-1">→</span>
            </h2>
            <p className="text-sm text-gray-400 mb-2">double studio.com</p>
            <p className="text-gray-300 text-sm">
              The strategic objective was to attract upmarket audiences by
              targeting specific.
            </p>
          </div>

          {/* Repeat for other cards... */}
        </div>
      </div>
    </section>
  );
}
