'use client';

import { FC } from 'react';

const GlobalLoading: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
      <div className="relative">
        {/* Main loading circle */}
        <div className="w-20 h-20 border-4 border-gray-800 rounded-full animate-spin border-t-purple-500"></div>
        
        {/* Inner pulsing circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 bg-purple-500/20 rounded-full animate-pulse"></div>
        </div>

        {/* Loading text */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <span className="text-gray-400 text-sm animate-pulse">Loading...</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
      `}</style>
    </div>
  );
};

export default GlobalLoading; 