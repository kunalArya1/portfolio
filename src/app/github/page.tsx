import { Suspense } from "react";
import GithubClientWrapper from "@/components/Github/GithubClientWrapper";

// Calculate language statistics from repos
function calculateLanguageStats(repos: any[]) {
  const stats = repos.reduce((acc: { [key: string]: number }, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});

  // Convert to percentages
  const total = Object.values(stats).reduce((a: number, b: number) => a + b, 0);
  const percentages = Object.entries(stats)
    .map(([lang, count]) => ({
      language: lang,
      percentage: Math.round(((count as number) / total) * 100),
      count: count,
    }))
    .sort((a, b) => b.percentage - a.percentage);

  return percentages;
}

// This is a server component that fetches the initial data
async function getGithubData(username: string) {
  const headers = {
    Accept: "application/vnd.github.v3+json",
    ...(process.env.GITHUB_TOKEN && {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    }),
  };

  try {
    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 }, // Revalidate every hour
      }),
      fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
        {
          headers,
          next: { revalidate: 3600 }, // Revalidate every hour
        }
      ),
    ]);

    if (!profileRes.ok || !reposRes.ok) {
      const profileError = !profileRes.ok ? await profileRes.text() : null;
      const reposError = !reposRes.ok ? await reposRes.text() : null;
      console.error("GitHub API Error:", {
        profileStatus: profileRes.status,
        profileError,
        reposStatus: reposRes.status,
        reposError,
      });
      throw new Error(
        `Failed to fetch GitHub data: ${
          profileError || reposError || "Unknown error"
        }`
      );
    }

    const [profileData, reposData] = await Promise.all([
      profileRes.json(),
      reposRes.json(),
    ]);

    // Calculate total stars and forks
    const totalStars = reposData.reduce(
      (acc: number, repo: any) => acc + repo.stargazers_count,
      0
    );
    const totalForks = reposData.reduce(
      (acc: number, repo: any) => acc + repo.forks_count,
      0
    );

    const languageStats = calculateLanguageStats(reposData);

    return {
      profile: {
        ...profileData,
        total_stars: totalStars,
        total_forks: totalForks,
      },
      repos: reposData,
      languageStats,
    };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    throw error;
  }
}

export default async function GithubPage() {
  try {
    const username = "kunalArya1";
    const data = await getGithubData(username);

    return (
      <div className="min-h-screen bg-[#0a0a0a] py-10 px-4 md:px-8 lg:px-20">
        <Suspense fallback={<div className="text-white">Loading...</div>}>
          <GithubClientWrapper data={data} username={username} />
        </Suspense>
      </div>
    );
  } catch (error) {
    console.error("GitHub page error:", error);
    return (
      <div className="min-h-screen bg-[#0a0a0a] py-10 px-4 md:px-8 lg:px-20 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Unable to Load GitHub Data
          </h2>
          <p className="mb-4 text-gray-400">
            There was an error loading the GitHub profile data. This might be
            due to:
          </p>
          <ul className="max-w-md mx-auto mb-6 text-left text-gray-400 list-disc">
            <li>Rate limiting (if you're making too many requests)</li>
            <li>Network connectivity issues</li>
            <li>GitHub API availability</li>
          </ul>
          <p className="text-gray-400">
            Please try again later or check your network connection.
          </p>
        </div>
      </div>
    );
  }
}
