"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NavigationProgress = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Simulate navigation start
    handleStart();

    // Simulate navigation complete after a short delay
    const timer = setTimeout(handleComplete, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-[9999]">
      <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse"></div>
    </div>
  );
};

export default NavigationProgress;
