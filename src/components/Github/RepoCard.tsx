"use client";

import { BiGitRepoForked } from "react-icons/bi";
import { AiOutlineStar, AiOutlineClockCircle } from "react-icons/ai";
import { FaCode, FaHistory } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";

interface RepoCardProps {
  repo: {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    topics: string[];
    updated_at: string;
    pushed_at: string;
    commit_count?: number;
  };
}

const languageColors: { [key: string]: string } = {
  JavaScript: "bg-yellow-500",
  TypeScript: "bg-blue-500",
  Python: "bg-green-500",
  Java: "bg-red-500",
  "C++": "bg-purple-500",
  HTML: "bg-orange-500",
  CSS: "bg-pink-500",
  // Add more languages as needed
};

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  return (
    <div className="block bg-[#111111] border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-white flex items-center hover:text-purple-400 transition-colors font-jetbrains"
        >
          <FaCode className="mr-2 text-purple-500" />
          {repo.name}
        </a>
      </div>

      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {repo.description || "No description provided"}
      </p>

      {/* Topics */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.topics.map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
        {repo.language && (
          <div className="flex items-center">
            <span
              className={`w-3 h-3 rounded-full mr-1 ${
                languageColors[repo.language] || "bg-gray-500"
              }`}
            />
            {repo.language}
          </div>
        )}
        <div className="flex items-center">
          <AiOutlineStar className="mr-1" />
          {repo.stargazers_count}
        </div>
        <div className="flex items-center">
          <BiGitRepoForked className="mr-1" />
          {repo.forks_count}
        </div>
        {repo.commit_count !== undefined && (
          <div className="flex items-center">
            <FaHistory className="mr-1" />
            {repo.commit_count} commits
          </div>
        )}
      </div>

      {/* Last Update */}
      <div className="mt-4 text-sm text-gray-500 flex items-center">
        <AiOutlineClockCircle className="mr-1" />
        Updated {formatDistanceToNow(new Date(repo.pushed_at))} ago
      </div>
    </div>
  );
};

export default RepoCard;
