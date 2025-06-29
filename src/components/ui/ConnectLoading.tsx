"use client";

import React from "react";

const ConnectLoading = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-10 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Loading header */}
        <div className="text-center mb-16">
          <div className="h-12 w-64 bg-gray-800 rounded-lg animate-pulse mx-auto mb-6"></div>
          <div className="h-4 bg-gray-800 rounded-lg animate-pulse max-w-3xl mx-auto mb-2"></div>
          <div className="h-4 bg-gray-800 rounded-lg animate-pulse max-w-2xl mx-auto"></div>
        </div>

        {/* Loading grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Social links loading placeholder */}
          <div className="bg-[#111111] border border-gray-800 rounded-xl p-8">
            <div className="h-8 w-48 bg-gray-800 rounded-lg animate-pulse mb-8"></div>

            {/* Social link placeholders */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg mb-4"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 animate-pulse"></div>
                <div className="flex-grow">
                  <div className="h-4 bg-gray-800 rounded-lg animate-pulse w-24 mb-2"></div>
                  <div className="h-3 bg-gray-800 rounded-lg animate-pulse w-32"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Topmate loading placeholder */}
          <div className="bg-[#111111] border border-gray-800 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-gray-800 animate-pulse"></div>
              <div>
                <div className="h-6 bg-gray-800 rounded-lg animate-pulse w-48 mb-2"></div>
                <div className="h-4 bg-gray-800 rounded-lg animate-pulse w-64"></div>
              </div>
            </div>

            {/* Session cards loading */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-5 mb-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="h-4 bg-gray-800 rounded-lg animate-pulse w-24"></div>
                  <div className="h-4 bg-gray-800 rounded-lg animate-pulse w-12"></div>
                </div>
                <div className="h-3 bg-gray-800 rounded-lg animate-pulse w-full mb-4"></div>
                <div className="h-8 bg-gray-800 rounded-lg animate-pulse w-full"></div>
              </div>
            ))}

            <div className="mt-6 pt-5 border-t border-gray-800">
              <div className="h-10 bg-gray-800 rounded-lg animate-pulse w-full"></div>
            </div>
          </div>
        </div>

        {/* Contact form loading */}
        <div className="max-w-3xl mx-auto bg-[#111111] border border-gray-800 rounded-xl p-8 mb-16">
          <div className="h-8 bg-gray-800 rounded-lg animate-pulse w-48 mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="h-4 bg-gray-800 rounded-lg animate-pulse w-16 mb-2"></div>
              <div className="h-10 bg-gray-800 rounded-lg animate-pulse w-full"></div>
            </div>
            <div>
              <div className="h-4 bg-gray-800 rounded-lg animate-pulse w-16 mb-2"></div>
              <div className="h-10 bg-gray-800 rounded-lg animate-pulse w-full"></div>
            </div>
          </div>

          <div className="mb-6">
            <div className="h-4 bg-gray-800 rounded-lg animate-pulse w-16 mb-2"></div>
            <div className="h-10 bg-gray-800 rounded-lg animate-pulse w-full"></div>
          </div>

          <div className="mb-6">
            <div className="h-4 bg-gray-800 rounded-lg animate-pulse w-16 mb-2"></div>
            <div className="h-24 bg-gray-800 rounded-lg animate-pulse w-full"></div>
          </div>

          <div className="h-10 bg-gray-800 rounded-lg animate-pulse w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ConnectLoading;
