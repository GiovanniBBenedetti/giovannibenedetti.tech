import { NextResponse } from "next/server";

const USERNAME = "GiovanniBBenedetti";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  let page = 1;
  let totalCommits = 0;

  while (true) {
    const reposRes = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?per_page=100&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
        },
      }
    );

    const repos = await reposRes.json();
    if (!repos.length) break;

    for (const repo of repos) {
      const commitsRes = await fetch(
        `https://api.github.com/repos/${USERNAME}/${repo.name}/commits?author=${USERNAME}&per_page=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
          },
        }
      );

      const link = commitsRes.headers.get("link");

      if (link && link.includes('rel="last"')) {
        const match = link.match(/page=(\d+)>; rel="last"/);
        if (match) totalCommits += Number(match[1]);
      }
    }

    page++;
  }

  return NextResponse.json({ total: totalCommits });
}
