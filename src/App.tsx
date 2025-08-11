import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export default function App() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        "https://api.github.com/orgs/30osob-studio/repos",
        {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        }
      );
      const data = await res.json();
      setRepos(data);
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <ul>
        {repos.map((repo) => (
          <div key={repo.id}>
            <a href={repo.html_url} target="_blank">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
