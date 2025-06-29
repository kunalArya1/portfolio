"use client";

import React from "react";

const OptimizedGithubLoading = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-10 px-4 md:px-8 lg:px-20">
      {/* Profile Loading Skeleton */}
      <div className="w-full bg-[#111111] border border-gray-800 rounded-xl p-6 md:p-8 mb-10">
        <div className="flex flex-col gap-6 md:flex-row md:gap-10">
          {/* Profile Image Skeleton */}
          <div className="flex-shrink-0">
            <div className="w-[150px] h-[150px] bg-gray-800 rounded-full animate-pulse"></div>
          </div>

          {/* Profile Info Skeleton */}
          <div className="flex-grow">
            <div className="h-8 bg-gray-800 rounded-lg animate-pulse mb-4 w-48"></div>
            <div className="h-6 bg-gray-800 rounded-lg animate-pulse mb-6 w-32"></div>
            <div className="h-4 bg-gray-800 rounded-lg animate-pulse mb-2 w-full"></div>
            <div className="h-4 bg-gray-800 rounded-lg animate-pulse mb-6 w-3/4"></div>

            {/* Stats Skeleton */}
            <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-[#0a0a0a] p-4 rounded-lg">
                  <div className="h-6 bg-gray-800 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-800 rounded animate-pulse w-16"></div>
                </div>
              ))}
            </div>

            {/* Links Skeleton */}
            <div className="flex flex-wrap gap-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-5 bg-gray-800 rounded animate-pulse w-20"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout Skeleton */}
      <div className="mt-10 flex flex-col lg:flex-row gap-8">
        {/* Stats Sidebar Skeleton */}
        <div className="w-full lg:w-1/4 space-y-6">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-gray-800 rounded-xl p-6"
            >
              <div className="h-6 bg-gray-800 rounded-lg animate-pulse mb-4 w-32"></div>
              <div className="space-y-3">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="space-y-1">
                    <div className="flex justify-between">
                      <div className="h-4 bg-gray-800 rounded animate-pulse w-16"></div>
                      <div className="h-4 bg-gray-800 rounded animate-pulse w-12"></div>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Skeleton */}
        <div className="w-full lg:w-3/4">
          {/* Filters Skeleton */}
          <div className="mb-6 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <div className="h-12 bg-gray-800 rounded-xl animate-pulse"></div>
              </div>
              <div className="flex gap-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-10 w-20 bg-gray-800 rounded-lg animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Repository Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-[#111111] border border-gray-800 rounded-xl p-6 h-64"
              >
                <div className="h-6 bg-gray-800 rounded-lg animate-pulse mb-3 w-3/4"></div>
                <div className="h-4 bg-gray-800 rounded-lg animate-pulse mb-2 w-full"></div>
                <div className="h-4 bg-gray-800 rounded-lg animate-pulse mb-4 w-5/6"></div>
                <div className="flex gap-2 mb-4">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className="h-6 w-16 bg-gray-800 rounded-full animate-pulse"
                    ></div>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <div className="h-5 bg-gray-800 rounded animate-pulse w-20"></div>
                  <div className="h-5 bg-gray-800 rounded animate-pulse w-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizedGithubLoading;
