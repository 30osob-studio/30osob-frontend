import { useEffect, useState } from "react";

interface Org {
  login: string;
  id: string;
  node_id: string;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  twitter_username: string;
  is_verified: string;
  has_organization_projects: string;
  has_repository_projects: string;
  public_repos: string;
  public_gists: string;
  followers: string;
  following: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  archived_at: string;
  type: string;
}

interface Repo {
  id: string;
  node_id: string;
  name: string;
  full_name: string;
  private: string;
  // owner.login: string;
  // owner.id: string;
  // owner.node_id: string;
  // owner.avatar_url: string;
  // owner.gravatar_id: string;
  // owner.url: string;
  // owner.html_url: string;
  // owner.followers_url: string;
  // owner.following_url: string;
  // owner.gists_url: string;
  // owner.starred_url: string;
  // owner.subscriptions_url: string;
  // owner.organizations_url: string;
  // owner.repos_url: string;
  // owner.events_url: string;
  // owner.received_events_url: string;
  // owner.type: string;
  // owner.user_view_type: string;
  // owner.site_admin: string;
  html_url: string;
  description: string;
  fork: string;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: string;
  stargazers_count: string;
  watchers_count: string;
  language: string;
  has_issues: string;
  has_projects: string;
  has_downloads: string;
  has_wiki: string;
  has_pages: string;
  has_discussions: string;
  forks_count: string;
  mirror_url: string;
  archived: string;
  disabled: string;
  open_issues_count: string;
  license: string;
  allow_forking: string;
  is_template: string;
  web_commit_signoff_required: string;
  visibility: string;
  forks: string;
  open_issues: string;
  watchers: string;
  default_branch: string;
  // permissions.admin: string;
  // permissions.maintain: string;
  // permissions.push: string;
  // permissions.triage: string;
  // permissions.pull: string;
}

interface Members {
  login: string;
  id: string;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: string;
}

export default function App() {
  const [org, setOrg] = useState<Org | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [members, setMembers] = useState<Members[]>([]);

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

      const membersRes = await fetch(
        "https://api.github.com/orgs/30osob-studio/members",
        {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        }
      );
      const membersData = await membersRes.json();
      setMembers(membersData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {org && (
        <div>
          <div>login: {org.login}</div>
          <div>id: {org.id}</div>
          <div>node_id: {org.node_id}</div>
          <div>url: {org.url}</div>
          <div>repos_url: {org.repos_url}</div>
          <div>events_url: {org.events_url}</div>
          <div>hooks_url: {org.hooks_url}</div>
          <div>issues_url: {org.issues_url}</div>
          <div>members_url: {org.members_url}</div>
          <div>public_members_url: {org.public_members_url}</div>
          <div>avatar_url: {org.avatar_url}</div>
          <div>description: {org.description}</div>
          <div>name: {org.name}</div>
          <div>company: {org.company}</div>
          <div>blog: {org.blog}</div>
          <div>location: {org.location}</div>
          <div>email: {org.email}</div>
          <div>twitter_username: {org.twitter_username}</div>
          <div>is_verified: {org.is_verified}</div>
          <div>has_organization_projects: {org.has_organization_projects}</div>
          <div>has_repository_projects: {org.has_repository_projects}</div>
          <div>public_repos: {org.public_repos}</div>
          <div>public_gists: {org.public_gists}</div>
          <div>followers: {org.followers}</div>
          <div>following: {org.following}</div>
          <div>html_url: {org.html_url}</div>
          <div>created_at: {org.created_at}</div>
          <div>updated_at: {org.updated_at}</div>
          <div>archived_at: {org.archived_at}</div>
          <div>type: {org.type}</div>
        </div>
      )}
      <div>
        {repos.map((repo) => (
          <div key={repo.id}>
            <div>id: {repo.id}</div>
            <div>node_id: {repo.node_id}</div>
            <div>name: {repo.name}</div>
            <div>full_name: {repo.full_name}</div>
            <div>private: {repo.private}</div>

            {/* <div>owner.login: {repo.owner.login}</div>
            <div>owner.id: {repo.owner.id}</div>
            <div>owner.node_id: {repo.owner.node_id}</div>
            <div>owner.avatar_url: {repo.owner.avatar_url}</div>
            <div>owner.gravatar_id: {repo.owner.gravatar_id}</div>
            <div>owner.url: {repo.owner.url}</div>
            <div>owner.html_url: {repo.owner.html_url}</div>
            <div>owner.followers_url: {repo.owner.followers_url}</div>
            <div>owner.following_url: {repo.owner.following_url}</div>
            <div>owner.gists_url: {repo.owner.gists_url}</div>
            <div>owner.starred_url: {repo.owner.starred_url}</div>
            <div>owner.subscriptions_url: {repo.owner.subscriptions_url}</div>
            <div>owner.organizations_url: {repo.owner.organizations_url}</div>
            <div>owner.repos_url: {repo.owner.repos_url}</div>
            <div>owner.events_url: {repo.owner.events_url}</div>
            <div>
              owner.received_events_url: {repo.owner.received_events_url}
            </div>
            <div>owner.type: {repo.owner.type}</div>
            <div>owner.user_view_type: {repo.owner.user_view_type}</div>
            <div>owner.site_admin: {repo.owner.site_admin}</div> */}

            <div>html_url: {repo.html_url}</div>
            <div>description: {repo.description}</div>
            <div>fork: {repo.fork}</div>
            <div>url: {repo.url}</div>
            <div>forks_url: {repo.forks_url}</div>
            <div>keys_url: {repo.keys_url}</div>
            <div>collaborators_url: {repo.collaborators_url}</div>
            <div>teams_url: {repo.teams_url}</div>
            <div>hooks_url: {repo.hooks_url}</div>
            <div>issue_events_url: {repo.issue_events_url}</div>
            <div>events_url: {repo.events_url}</div>
            <div>assignees_url: {repo.assignees_url}</div>
            <div>branches_url: {repo.branches_url}</div>
            <div>tags_url: {repo.tags_url}</div>
            <div>blobs_url: {repo.blobs_url}</div>
            <div>git_tags_url: {repo.git_tags_url}</div>
            <div>git_refs_url: {repo.git_refs_url}</div>
            <div>trees_url: {repo.trees_url}</div>
            <div>statuses_url: {repo.statuses_url}</div>
            <div>languages_url: {repo.languages_url}</div>
            <div>stargazers_url: {repo.stargazers_url}</div>
            <div>contributors_url: {repo.contributors_url}</div>
            <div>subscribers_url: {repo.subscribers_url}</div>
            <div>subscription_url: {repo.subscription_url}</div>
            <div>commits_url: {repo.commits_url}</div>
            <div>git_commits_url: {repo.git_commits_url}</div>
            <div>comments_url: {repo.comments_url}</div>
            <div>issue_comment_url: {repo.issue_comment_url}</div>
            <div>contents_url: {repo.contents_url}</div>
            <div>compare_url: {repo.compare_url}</div>
            <div>merges_url: {repo.merges_url}</div>
            <div>archive_url: {repo.archive_url}</div>
            <div>downloads_url: {repo.downloads_url}</div>
            <div>issues_url: {repo.issues_url}</div>
            <div>pulls_url: {repo.pulls_url}</div>
            <div>milestones_url: {repo.milestones_url}</div>
            <div>notifications_url: {repo.notifications_url}</div>
            <div>labels_url: {repo.labels_url}</div>
            <div>releases_url: {repo.releases_url}</div>
            <div>deployments_url: {repo.deployments_url}</div>
            <div>created_at: {repo.created_at}</div>
            <div>updated_at: {repo.updated_at}</div>
            <div>pushed_at: {repo.pushed_at}</div>
            <div>git_url: {repo.git_url}</div>
            <div>ssh_url: {repo.ssh_url}</div>
            <div>clone_url: {repo.clone_url}</div>
            <div>svn_url: {repo.svn_url}</div>
            <div>homepage: {repo.homepage}</div>
            <div>size: {repo.size}</div>
            <div>stargazers_count: {repo.stargazers_count}</div>
            <div>watchers_count: {repo.watchers_count}</div>
            <div>language: {repo.language}</div>
            <div>has_issues: {repo.has_issues}</div>
            <div>has_projects: {repo.has_projects}</div>
            <div>has_downloads: {repo.has_downloads}</div>
            <div>has_wiki: {repo.has_wiki}</div>
            <div>has_pages: {repo.has_pages}</div>
            <div>has_discussions: {repo.has_discussions}</div>
            <div>forks_count: {repo.forks_count}</div>
            <div>mirror_url: {repo.mirror_url}</div>
            <div>archived: {repo.archived}</div>
            <div>disabled: {repo.disabled}</div>
            <div>open_issues_count: {repo.open_issues_count}</div>
            <div>license: {repo.license}</div>
            <div>allow_forking: {repo.allow_forking}</div>
            <div>is_template: {repo.is_template}</div>
            <div>
              web_commit_signoff_required: {repo.web_commit_signoff_required}
            </div>
            <div>visibility: {repo.visibility}</div>
            <div>forks: {repo.forks}</div>
            <div>open_issues: {repo.open_issues}</div>
            <div>watchers: {repo.watchers}</div>
            <div>default_branch: {repo.default_branch}</div>

            {/* <div>permissions.admin: {repo.permissions.admin}</div>
            <div>permissions.maintain: {repo.permissions.maintain}</div>
            <div>permissions.push: {repo.permissions.push}</div>
            <div>permissions.triage: {repo.permissions.triage}</div>
            <div>permissions.pull: {repo.permissions.pull}</div> */}
          </div>
        ))}
      </div>
      <div>
        {members.map((member) => (
          <div key={member.id}>
            <div>login: {member.login}</div>
            <div>id: {member.id}</div>
            <div>node_id: {member.node_id}</div>
            <div>avatar_url: {member.avatar_url}</div>
            <div>gravatar_id: {member.gravatar_id}</div>
            <div>url: {member.url}</div>
            <div>html_url: {member.html_url}</div>
            <div>followers_url: {member.followers_url}</div>
            <div>following_url: {member.following_url}</div>
            <div>gists_url: {member.gists_url}</div>
            <div>starred_url: {member.starred_url}</div>
            <div>subscriptions_url: {member.subscriptions_url}</div>
            <div>organizations_url: {member.organizations_url}</div>
            <div>repos_url: {member.repos_url}</div>
            <div>events_url: {member.events_url}</div>
            <div>received_events_url: {member.received_events_url}</div>
            <div>type: {member.type}</div>
            <div>user_view_type: {member.user_view_type}</div>
            <div>site_admin: {member.site_admin}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
