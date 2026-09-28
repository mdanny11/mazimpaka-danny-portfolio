import { NextResponse } from "next/server";

type GithubApiRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  updated_at: string;
  html_url: string;
  fork: boolean;
};

export async function GET() {
  const username =
    process.env.NEXT_PUBLIC_GITHUB_USERNAME?.trim() || "mdanny11";

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "mazimpaka-danny-portfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=8`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        {
          configured: true,
          repos: [],
          error: "Unable to load GitHub repositories right now.",
        },
        { status: 502 }
      );
    }

    const payload = (await response.json()) as GithubApiRepo[];
    const repos = payload
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics ?? [],
        updatedAt: repo.updated_at,
        url: repo.html_url,
      }));

    return NextResponse.json({ configured: true, repos });
  } catch {
    return NextResponse.json(
      {
        configured: true,
        repos: [],
        error: "Unable to load GitHub repositories right now.",
      },
      { status: 502 }
    );
  }
}
