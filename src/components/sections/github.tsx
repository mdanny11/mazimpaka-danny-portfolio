"use client";

import { useEffect, useState } from "react";
import { ExternalLink, GitFork, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/brand/chrome";
import { githubProfileUrl, hasValue, siteConfig } from "@/lib/site";

type GithubRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  updatedAt: string;
  url: string;
};

type GithubResponse = {
  configured: boolean;
  repos: GithubRepo[];
  error?: string;
};

export function GithubSection() {
  const username = siteConfig.contact.githubUsername;
  const [data, setData] = useState<GithubResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const response = await fetch("/api/github");
        const json = (await response.json()) as GithubResponse;
        if (!cancelled) {
          setData(json);
        }
      } catch {
        if (!cancelled) {
          setData({
            configured: hasValue(username),
            repos: [],
            error: "Unable to reach the GitHub proxy right now.",
          });
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [username]);

  const profile = githubProfileUrl();

  return (
    <section id="github" className="page-section">
      <div className="page-container">
        <SectionHeading
          eyebrow="GitHub"
          title="Public repositories"
          description="Only live GitHub data is shown. Nothing here is estimated or invented."
        />
        {loading ? (
          <p className="mt-10 text-center text-muted-foreground" role="status">
            Loading repositories…
          </p>
        ) : null}
        {!loading && data && !data.configured ? (
          <p className="mt-10 rounded-xl bg-white p-6 text-center shadow-[var(--card-shadow)] ring-1 ring-navy/10 dark:bg-card">
            GitHub is not connected yet. Set <code>NEXT_PUBLIC_GITHUB_USERNAME</code> in
            your environment to load real repositories.
          </p>
        ) : null}
        {!loading && data?.error ? (
          <p className="mt-10 rounded-xl border border-destructive/30 bg-white p-6 text-center text-destructive dark:bg-card">
            {data.error}
          </p>
        ) : null}
        {!loading && data?.configured && !data.error && data.repos.length === 0 ? (
          <p className="mt-10 text-center text-muted-foreground">
            No public repositories were returned for this username.
          </p>
        ) : null}
        {!loading && data?.repos.length ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {data.repos.map((repo) => (
              <Reveal key={repo.url}>
                <article className="flex h-full flex-col rounded-xl bg-white p-5 shadow-[var(--card-shadow)] ring-1 ring-navy/10 dark:bg-card dark:ring-gold/15">
                  <h3 className="font-heading text-xl break-words">{repo.name}</h3>
                  <p className="mt-2 min-h-12 text-sm text-muted-foreground">
                    {repo.description || "No description provided on GitHub."}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {repo.language ? <Badge variant="outline">{repo.language}</Badge> : null}
                    <span className="inline-flex items-center gap-1 text-xs">
                      <Star className="size-3.5 text-gold" /> {repo.stars}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs">
                      <GitFork className="size-3.5" /> {repo.forks}
                    </span>
                  </div>
                  {repo.topics.length ? (
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {repo.topics.map((topic) => (
                        <li key={topic} className="text-xs text-gold">
                          #{topic}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <p className="mt-3 text-xs text-muted-foreground">
                    Updated {new Date(repo.updatedAt).toLocaleDateString()}
                  </p>
                  <div className="mt-auto pt-4">
                    <Button
                      variant="outline"
                      render={<a href={repo.url} target="_blank" rel="noreferrer" />}
                    >
                      GitHub
                      <ExternalLink />
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : null}
        {hasValue(profile) ? (
          <p className="mt-8 text-center">
            <a href={profile} className="text-gold hover:underline" target="_blank" rel="noreferrer">
              View GitHub profile
            </a>
          </p>
        ) : null}
      </div>
    </section>
  );
}
