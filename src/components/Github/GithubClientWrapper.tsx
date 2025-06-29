'use client';

import GithubClient from './GithubClient';

interface GithubClientWrapperProps {
  data: any;
  username: string;
}

const GithubClientWrapper = ({ data, username }: GithubClientWrapperProps) => {
  return <GithubClient initialData={data} username={username} />;
};

export default GithubClientWrapper; 