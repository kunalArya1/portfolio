'use client';

import Image from 'next/image';
import { FaGithub, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaLink } from 'react-icons/fa';
import { BiGitRepoForked } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';

interface GithubProfileProps {
  profile: {
    name: string;
    login: string;
    avatar_url: string;
    bio: string;
    followers: number;
    following: number;
    public_repos: number;
    location: string;
    blog: string;
    twitter_username: string;
    total_stars: number;
    total_forks: number;
  };
}

const GithubProfile: React.FC<GithubProfileProps> = ({ profile }) => {
  return (
    <div className="w-full bg-[#111111] border border-gray-800 rounded-xl p-6 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:gap-10">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src={profile.avatar_url}
            alt={profile.name}
            width={150}
            height={150}
            className="border-4 rounded-full border-purple-500/20"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-grow">
          <h1 className="mb-2 text-2xl font-bold md:text-3xl">{profile.name}</h1>
          <h2 className="mb-4 text-lg text-gray-400 font-jetbrains">@{profile.login}</h2>
          <p className="mb-6 text-gray-300">{profile.bio}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-4">
            <div className="bg-[#0a0a0a] p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-purple-500">{profile.followers}</div>
              <div className="text-sm text-gray-400">Followers</div>
            </div>
            <div className="bg-[#0a0a0a] p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-purple-500">{profile.following}</div>
              <div className="text-sm text-gray-400">Following</div>
            </div>
            <div className="bg-[#0a0a0a] p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-purple-500">{profile.total_stars}</div>
              <div className="text-sm text-gray-400">Total Stars</div>
            </div>
            <div className="bg-[#0a0a0a] p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-purple-500">{profile.total_forks}</div>
              <div className="text-sm text-gray-400">Total Forks</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {profile.location && (
              <div className="flex items-center text-gray-300">
                <FaMapMarkerAlt className="mr-2" />
                {profile.location}
              </div>
            )}
            {profile.blog && (
              <a
                href={profile.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-purple-500 transition-colors hover:text-purple-400"
              >
                <FaLink className="mr-2" />
                Website
              </a>
            )}
            <a
              href={`https://github.com/${profile.login}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-purple-500 transition-colors hover:text-purple-400"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
            {profile.twitter_username && (
              <a
                href={`https://twitter.com/${profile.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-purple-500 transition-colors hover:text-purple-400"
              >
                <FaTwitter className="mr-2" />
                Twitter
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubProfile; 