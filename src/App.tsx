import { useEffect, useState } from "react";

interface Org {
  login: string;
  name: string;
  description: string;
  avatar_url: string;
  blog: string;
  location: string;
  email: string;
  public_repos: number;
  created_at: string;
  updated_at: string;
}

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export default function App() {
  const [org, setOrg] = useState<Org | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const orgRes = await fetch("https://api.github.com/orgs/30osob-studio", {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      });
      const orgData = await orgRes.json();
      setOrg(orgData);

      const reposRes = await fetch(
        "https://api.github.com/orgs/30osob-studio/repos",
        {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        }
      );
      const reposData = await reposRes.json();
      setRepos(reposData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {org && (
        <div>
          <div>
            <img src={org.avatar_url} alt={`${org.name} avatar`} />
          </div>
          <div>
            {org.name} ({org.login})
          </div>
          <div>{org.description}</div>
          <div>Lokalizacja: {org.location || "brak"}</div>
          <div>Email: {org.email || "brak"}</div>
          <div>Strona: {org.blog ? org.blog : "brak"}</div>
          <div>Publiczne repozytoria: {org.public_repos}</div>
          <div>Utworzono: {new Date(org.created_at).toLocaleDateString()}</div>
          <div>
            Ostatnia aktualizacja:{" "}
            {new Date(org.updated_at).toLocaleDateString()}
          </div>
        </div>
      )}

      <div>Repozytoria:</div>
      <div>
        {repos.map((repo) => (
          <div key={repo.id}>
            <div>{repo.name}</div>
            <div>{repo.html_url}</div>
            <div>{repo.description || "brak opisu"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
