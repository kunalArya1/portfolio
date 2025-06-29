"use client";

import { lazy, Suspense } from "react";
import OptimizedGithubLoading from "@/components/ui/OptimizedGithubLoading";

// Lazy load the heavy GitHub components
const GithubClientWrapper = lazy(() => import("./GithubClientWrapper"));

interface DynamicGithubClientWrapperProps {
  data: any;
  username: string;
}

const DynamicGithubClientWrapper = ({
  data,
  username,
}: DynamicGithubClientWrapperProps) => {
  return (
    <Suspense fallback={<OptimizedGithubLoading />}>
      <GithubClientWrapper data={data} username={username} />
    </Suspense>
  );
};

export default DynamicGithubClientWrapper;
