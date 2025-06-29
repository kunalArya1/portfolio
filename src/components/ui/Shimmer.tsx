'use client';

import { FC } from 'react';

const Shimmer: FC = () => {
  return (
    <div className="animate-pulse max-w-4xl mx-auto py-8 px-4">
      {/* Header shimmer */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          {/* Title shimmer */}
          <div className="h-12 bg-gray-700 rounded-lg w-3/4"></div>

          {/* Meta info shimmer */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="px-4 py-2 bg-gray-700 rounded-lg w-24 h-16"></div>
            <div className="px-4 py-2 bg-gray-700 rounded-lg w-24 h-16"></div>
            <div className="px-4 py-2 bg-gray-700 rounded-lg w-24 h-16"></div>
          </div>
        </div>

        <div className="border-b border-gray-700 my-8"></div>
      </div>

      {/* Content shimmer */}
      <div className="space-y-6">
        {/* Paragraph shimmers */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-3">
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-[90%]"></div>
            <div className="h-4 bg-gray-700 rounded w-[95%]"></div>
          </div>
        ))}

        {/* Image shimmer */}
        <div className="h-64 bg-gray-700 rounded-lg w-full"></div>

        {/* More paragraph shimmers */}
        {[...Array(2)].map((_, i) => (
          <div key={i + 3} className="space-y-3">
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-[85%]"></div>
            <div className="h-4 bg-gray-700 rounded w-[92%]"></div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
      `}</style>
    </div>
  );
};

export default Shimmer; 