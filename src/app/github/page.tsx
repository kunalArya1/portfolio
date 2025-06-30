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
  console.log(`[Server] Fetching GitHub data for user: ${username}`);
  
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "portfolio-website-nextjs",
  };

  // Add GitHub token if available
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    console.log("[Server] Using GitHub token");
  } else {
    console.log("[Server] No GitHub token found, using unauthenticated requests");
  }

  try {
    // Fetch profile and repos with reduced caching for debugging
    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 60 }, // 1 minute for debugging
      }),
      fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=public`,
        {
          headers,
          next: { revalidate: 60 }, // 1 minute for debugging
        }
      ),
    ]);

    console.log(`[Server] Profile API Status: ${profileRes.status}`);
    console.log(`[Server] Repos API Status: ${reposRes.status}`);

    if (!profileRes.ok) {
      const errorText = await profileRes.text();
      console.error(`[Server] Profile API Error: ${profileRes.status} - ${errorText}`);
      throw new Error(`Profile API returned ${profileRes.status}`);
    }

    if (!reposRes.ok) {
      const errorText = await reposRes.text();
      console.error(`[Server] Repos API Error: ${reposRes.status} - ${errorText}`);
      throw new Error(`Repos API returned ${reposRes.status}`);
    }

    const [profileData, reposData] = await Promise.all([
      profileRes.json(),
      reposRes.json(),
    ]);

    console.log(`[Server] Profile fetched: ${profileData.login}`);
    console.log(`[Server] Repos fetched: ${Array.isArray(reposData) ? reposData.length : 'Not an array'}`);

    // Ensure reposData is an array
    const repos = Array.isArray(reposData) ? reposData : [];

    // Calculate total stars and forks
    let totalStars = 0;
    let totalForks = 0;

    for (const repo of repos) {
      totalStars += repo.stargazers_count || 0;
      totalForks += repo.forks_count || 0;
    }

    const languageStats = calculateLanguageStats(repos);

    const result = {
      profile: {
        ...profileData,
        total_stars: totalStars,
        total_forks: totalForks,
      },
      repos,
      languageStats,
    };

    console.log(`[Server] Final result - repos count: ${result.repos.length}, languages: ${result.languageStats.length}`);
    return result;
  } catch (error) {
    console.error("[Server] Error fetching GitHub data:", error);
    
    // Return minimal fallback data so the client can try to fetch
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
      repos: [], // Empty array so client-side fetch will trigger
      languageStats: [],
    };
  }
}

export default async function GithubPage() {
  const username = "kunalArya1";
  
  console.log("GitHub page rendering, fetching data for:", username);
  const data = await getGithubData(username);
  console.log("GitHub page received data:", {
    profileName: data.profile?.name,
    reposCount: data.repos?.length,
    languageStatsCount: data.languageStats?.length
  });

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
