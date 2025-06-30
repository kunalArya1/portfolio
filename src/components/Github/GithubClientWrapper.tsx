'use client';

import GithubClientFixed from './GithubClientFixed';

interface GithubClientWrapperProps {
  data: any;
  username: string;
}

const GithubClientWrapper = ({ data, username }: GithubClientWrapperProps) => {
  return <GithubClientFixed initialData={data} username={username} />;
};

export default GithubClientWrapper; 