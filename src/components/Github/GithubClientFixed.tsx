"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import GithubProfile from "./GithubProfile";
import RepoCard from "./RepoCard";
import { FaSearch, FaHistory } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
  pushed_at: string;
}

interface GithubProfile {
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
}

interface LanguageStat {
  language: string;
  percentage: number;
  count: number;
}

interface GithubData {
  profile: GithubProfile;
  repos: Repository[];
  languageStats: LanguageStat[];
}

interface GithubClientFixedProps {
  initialData: GithubData;
  username: string;
}

const ITEMS_PER_PAGE = 6;

const languageColors: { [key: string]: string } = {
  JavaScript: "bg-yellow-500",
  TypeScript: "bg-blue-500",
  Python: "bg-green-500",
  Java: "bg-red-500",
  "C++": "bg-purple-500",
  HTML: "bg-orange-500",
  CSS: "bg-pink-500",
  Go: "bg-cyan-500",
  Rust: "bg-orange-600",
  PHP: "bg-indigo-500",
};

// Calculate language statistics from repos
function calculateLanguageStats(repos: Repository[]): LanguageStat[] {
  const stats = repos.reduce((acc: { [key: string]: number }, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});

  const total = Object.values(stats).reduce((a: number, b: number) => a + b, 0);
  if (total === 0) return [];

  const percentages = Object.entries(stats)
    .map(([lang, count]) => ({
      language: lang,
      percentage: Math.round(((count as number) / total) * 100),
      count: count,
    }))
    .sort((a, b) => b.percentage - a.percentage);

  return percentages;
}

const GithubClientFixed: React.FC<GithubClientFixedProps> = ({
  initialData,
  username,
}) => {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [sortBy, setSortBy] = useState("updated");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [githubData, setGithubData] = useState<GithubData>(initialData);
  const [fetchingFallback, setFetchingFallback] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const [displayedRepos, setDisplayedRepos] = useState<Repository[]>([]);

  useEffect(() => {
    setMounted(true);
    
    // If no repos in initial data, try to fetch client-side
    if (!initialData.repos || initialData.repos.length === 0) {
      console.log("No repos in initial data, attempting client-side fetch");
      fetchGithubDataClientSide();
    }
  }, []);

  const fetchGithubDataClientSide = async () => {
    setFetchingFallback(true);
    try {
      console.log("Fetching GitHub data client-side for:", username);
      
      const [profileRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`, {
          headers: {
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "portfolio-website",
          },
        }),
        fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=public`, {
          headers: {
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "portfolio-website",
          },
        }),
      ]);

      if (profileRes.ok && reposRes.ok) {
        const [profileData, reposData] = await Promise.all([
          profileRes.json(),
          reposRes.json(),
        ]);

        console.log("Client-side fetch successful:", {
          profile: profileData.login,
          reposCount: reposData.length,
        });

        const repos = Array.isArray(reposData) ? reposData : [];
        
        let totalStars = 0;
        let totalForks = 0;
        for (const repo of repos) {
          totalStars += repo.stargazers_count || 0;
          totalForks += repo.forks_count || 0;
        }

        const languageStats = calculateLanguageStats(repos);

        const newData: GithubData = {
          profile: {
            ...profileData,
            total_stars: totalStars,
            total_forks: totalForks,
          },
          repos,
          languageStats,
        };

        setGithubData(newData);
      } else {
        console.error("Client-side fetch failed:", {
          profileStatus: profileRes.status,
          reposStatus: reposRes.status,
        });
      }
    } catch (error) {
      console.error("Error in client-side fetch:", error);
    } finally {
      setFetchingFallback(false);
    }
  };

  // Filter change effects
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPage(1);
      setDisplayedRepos([]);
      setHasMore(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [search, selectedLanguage, sortBy]);

  const lastRepoElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPage((prevPage) => prevPage + 1);
          }
        },
        {
          threshold: 0.1,
          rootMargin: "100px",
        }
      );
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  // Memoize filtered repositories
  const filteredRepos = useMemo(() => {
    if (!githubData.repos || !Array.isArray(githubData.repos)) {
      return [];
    }

    return githubData.repos
      .filter((repo) => {
        const matchesSearch =
          search === "" ||
          repo.name.toLowerCase().includes(search.toLowerCase()) ||
          (repo.description &&
            repo.description.toLowerCase().includes(search.toLowerCase()));

        const matchesLanguage =
          selectedLanguage === "" || repo.language === selectedLanguage;

        return matchesSearch && matchesLanguage;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "stars":
            return b.stargazers_count - a.stargazers_count;
          case "forks":
            return b.forks_count - a.forks_count;
          case "name":
            return a.name.localeCompare(b.name);
          case "updated":
            return (
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
            );
          default:
            return 0;
        }
      });
  }, [githubData.repos, search, selectedLanguage, sortBy]);

  // Update displayed repos
  useEffect(() => {
    const startIndex = 0;
    const endIndex = page * ITEMS_PER_PAGE;
    const newRepos = filteredRepos.slice(startIndex, endIndex);

    const updateRepos = () => {
      setDisplayedRepos(newRepos);
      setHasMore(endIndex < filteredRepos.length);
    };

    requestAnimationFrame(updateRepos);
  }, [page, filteredRepos]);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {/* Profile Section */}
      <GithubProfile profile={githubData.profile} />

      {/* Loading state for client-side fetch */}
      {fetchingFallback && (
        <div className="text-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-white">Loading repositories...</p>
        </div>
      )}

      {/* Two Column Layout */}
      <div className="mt-10 flex flex-col lg:flex-row gap-8">
        {/* Stats Sidebar - 25% width */}
        <div className="w-full lg:w-1/4 space-y-6">
          {/* Repository Stats */}
          <div className="bg-[#111111] border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
            <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
              <BiGitRepoForked className="mr-2 text-purple-500" />
              Repository Stats
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-[#0a0a0a] p-3 rounded-lg">
                <span className="text-gray-400">Total Repositories</span>
                <span className="text-purple-500 font-semibold">
                  {githubData.profile.public_repos}
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#0a0a0a] p-3 rounded-lg">
                <span className="text-gray-400">Total Stars</span>
                <span className="text-purple-500 font-semibold">
                  {githubData.profile.total_stars}
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#0a0a0a] p-3 rounded-lg">
                <span className="text-gray-400">Total Forks</span>
                <span className="text-purple-500 font-semibold">
                  {githubData.profile.total_forks}
                </span>
              </div>
            </div>
          </div>

          {/* Language Stats */}
          <div className="bg-[#111111] border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
            <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
              <FaSearch className="mr-2 text-purple-500" />
              Languages
            </h3>
            <div className="space-y-3">
              {githubData.languageStats.map(({ language, percentage, count }) => (
                <div key={language} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{language}</span>
                    <span className="text-gray-400">
                      {percentage}% ({count})
                    </span>
                  </div>
                  <div className="h-2 bg-[#0a0a0a] rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        languageColors[language] || "bg-gray-500"
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - 75% width */}
        <div className="w-full lg:w-3/4">
          {/* Filters Section */}
          <div className="mb-6 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-grow relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search repositories..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-[#111111] border border-gray-800 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              {/* Language Filter */}
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-[#111111] border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
              >
                <option value="">All Languages</option>
                {githubData.languageStats.map(({ language }) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#111111] border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
              >
                <option value="updated">Recently Updated</option>
                <option value="stars">Most Stars</option>
                <option value="forks">Most Forks</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>

          {/* Repositories Grid */}
          <div className="grid grid-cols-1 gap-6">
            {displayedRepos.map((repo, index) => {
              if (displayedRepos.length === index + 1) {
                return (
                  <div ref={lastRepoElementRef} key={repo.id}>
                    <RepoCard repo={repo} />
                  </div>
                );
              } else {
                return <RepoCard key={repo.id} repo={repo} />;
              }
            })}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto"></div>
            </div>
          )}

          {/* No Results */}
          {!loading && !fetchingFallback && filteredRepos.length === 0 && githubData.repos && githubData.repos.length > 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-400 mb-2">
                No repositories found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filters
              </p>
            </div>
          )}

          {/* No Data */}
          {!loading && !fetchingFallback && (!githubData.repos || githubData.repos.length === 0) && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-400 mb-2">
                No repositories available
              </h3>
              <p className="text-gray-500">
                Unable to load repositories at this time
              </p>
              <button 
                onClick={fetchGithubDataClientSide} 
                className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GithubClientFixed;
