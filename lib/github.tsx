const GITHUB_API = 'https://api.github.com';

export type GitHubRepo = {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
};

export async function fetchUserRepos(): Promise<GitHubRepo[]> {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username || !token) {
    throw new Error('GitHub username or token is not defined in .env.local');
  }

  const repoRes = await fetch(
    `${GITHUB_API}/users/${username}/repos?per_page=100&sort=created&direction=desc`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.mercy-preview+json', // for topics
      },
      next: { revalidate: 3600 },
    }
  );

  if (!repoRes.ok) {
    throw new Error(`GitHub API Error: ${repoRes.status}`);
  }

  const repos = await repoRes.json();

  const reposWithLangs = await Promise.all(
    repos
      .filter((repo: any) => !repo.private)
      .map(async (repo: any): Promise<GitHubRepo> => {
        let languageString = '';

        try {
          const langRes = await fetch(repo.languages_url, {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/vnd.github.v3+json',
            },
          });

          if (langRes.ok) {
            const langs = await langRes.json();

            const total = Object.values(langs as Record<string, number>).reduce(
              (a, b) => a + b,
              0
            );

            languageString = Object.entries(langs)
              .map(([lang, val]) => {
                const percent = (((val as number) / total) * 100).toFixed(0);
                return `${lang} ${percent}%`;
              })
              .join(', ');
          }
        } catch (err) {
          languageString = '';
        }

        return {
          name: repo.name,
          description: repo.description ?? `Stack: ${languageString || 'Not available'}`,
          html_url: repo.html_url,
          topics: repo.topics ?? [],
        };
      })
  );

  return reposWithLangs;
}
