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
    // Use Promise.allSettled for better error handling and faster failures
    const [profileRes, reposRes] = await Promise.allSettled([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 7200 }, // Increased to 2 hours for better performance
        cache: "force-cache", // Force caching for better performance
      }),
      fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=50`, // Reduced from 100 to 50
        {
          headers,
          next: { revalidate: 7200 }, // Increased to 2 hours
          cache: "force-cache", // Force caching for better performance
        }
      ),
    ]);

    // Handle promise results
    if (profileRes.status === "rejected" || reposRes.status === "rejected") {
      console.error("GitHub API Error:", {
        profileError:
          profileRes.status === "rejected" ? profileRes.reason : null,
        reposError: reposRes.status === "rejected" ? reposRes.reason : null,
      });
      throw new Error("Failed to fetch GitHub data");
    }

    if (!profileRes.value.ok || !reposRes.value.ok) {
      console.error("GitHub API Error:", {
        profileStatus: profileRes.value.status,
        reposStatus: reposRes.value.status,
      });
      throw new Error("GitHub API returned error status");
    }

    const [profileData, reposData] = await Promise.all([
      profileRes.value.json(),
      reposRes.value.json(),
    ]);

    // Calculate total stars and forks more efficiently
    let totalStars = 0;
    let totalForks = 0;

    for (const repo of reposData) {
      totalStars += repo.stargazers_count || 0;
      totalForks += repo.forks_count || 0;
    }

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
    // Return fallback data instead of throwing
    return {
      profile: {
        name: "Kunal Arya",
        login: "kunalArya1",
        avatar_url: "/kunal.jpg",
        bio: "Full-stack developer passionate about building smooth and scalable web experiences.",
        followers: 0,
        following: 0,
        public_repos: 0,
        location: "Bengaluru, India",
        blog: "",
        twitter_username: "",
        total_stars: 0,
        total_forks: 0,
      },
      repos: [],
      languageStats: [],
    };
  }
}

export default async function GithubPage() {
  const username = "kunalArya1";
  const data = await getGithubData(username);

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-10 px-4 md:px-8 lg:px-20">
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-purple-500 mx-auto mb-4"></div>
              <p className="text-white">Loading GitHub data...</p>
            </div>
          </div>
        }
      >
        <GithubClientWrapper data={data} username={username} />
      </Suspense>
    </div>
  );
}
