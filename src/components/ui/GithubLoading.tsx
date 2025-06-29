'use client';

const GithubLoading = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-10 px-4 md:px-8 lg:px-20">
      {/* Header Shimmer */}
      <div className="mb-10">
        <div className="h-8 w-48 bg-gray-800 rounded-lg animate-pulse mb-4"></div>
        <div className="h-4 w-96 bg-gray-800 rounded animate-pulse"></div>
      </div>

      {/* Repository Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="border border-gray-800 rounded-lg p-6 bg-[#111111] animate-pulse"
          >
            {/* Repo Title */}
            <div className="h-6 w-3/4 bg-gray-800 rounded mb-4"></div>

            {/* Description */}
            <div className="space-y-2 mb-4">
              <div className="h-4 w-full bg-gray-800 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-800 rounded"></div>
            </div>

            {/* Stats */}
            <div className="flex gap-4">
              <div className="h-4 w-16 bg-gray-800 rounded"></div>
              <div className="h-4 w-16 bg-gray-800 rounded"></div>
              <div className="h-4 w-16 bg-gray-800 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default GithubLoading; 