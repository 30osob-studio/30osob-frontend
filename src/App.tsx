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
      <h1>Orgs</h1>
      {org && (
        <div>
          <div>
            <strong>login:</strong> {org.login}
          </div>
          <div>
            <strong>id:</strong> {org.id}
          </div>
          <div>
            <strong>node_id:</strong> {org.node_id}
          </div>
          <div>
            <strong>url:</strong> {org.url}
          </div>
          <div>
            <strong>repos_url:</strong> {org.repos_url}
          </div>
          <div>
            <strong>events_url:</strong> {org.events_url}
          </div>
          <div>
            <strong>hooks_url:</strong> {org.hooks_url}
          </div>
          <div>
            <strong>issues_url:</strong> {org.issues_url}
          </div>
          <div>
            <strong>members_url:</strong> {org.members_url}
          </div>
          <div>
            <strong>public_members_url:</strong> {org.public_members_url}
          </div>
          <div>
            <strong>avatar_url:</strong> {org.avatar_url}
          </div>
          <div>
            <strong>description:</strong> {org.description}
          </div>
          <div>
            <strong>name:</strong> {org.name}
          </div>
          <div>
            <strong>company:</strong> {org.company}
          </div>
          <div>
            <strong>blog:</strong> {org.blog}
          </div>
          <div>
            <strong>location:</strong> {org.location}
          </div>
          <div>
            <strong>email:</strong> {org.email}
          </div>
          <div>
            <strong>twitter_username:</strong> {org.twitter_username}
          </div>
          <div>
            <strong>is_verified:</strong> {org.is_verified}
          </div>
          <div>
            <strong>has_organization_projects: </strong>
            {org.has_organization_projects}
          </div>
          <div>
            <strong>has_repository_projects: </strong>
            {org.has_repository_projects}
          </div>
          <div>
            <strong>public_repos:</strong> {org.public_repos}
          </div>
          <div>
            <strong>public_gists:</strong> {org.public_gists}
          </div>
          <div>
            <strong>followers:</strong> {org.followers}
          </div>
          <div>
            <strong>following:</strong> {org.following}
          </div>
          <div>
            <strong>html_url:</strong> {org.html_url}
          </div>
          <div>
            <strong>created_at:</strong> {org.created_at}
          </div>
          <div>
            <strong>updated_at:</strong> {org.updated_at}
          </div>
          <div>
            <strong>archived_at:</strong> {org.archived_at}
          </div>
          <div>
            <strong>type:</strong> {org.type}
          </div>

          <hr />
        </div>
      )}
      <div>
        <h1>Repos</h1>
        {repos.map((repo) => (
          <div key={repo.id}>
            <div>
              <strong>id:</strong> {repo.id}
            </div>
            <div>
              <strong>node_id:</strong> {repo.node_id}
            </div>
            <div>
              <strong>name:</strong> {repo.name}
            </div>
            <div>
              <strong>full_name:</strong> {repo.full_name}
            </div>
            <div>
              <strong>private:</strong> {repo.private}
            </div>

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

            <div>
              <strong>html_url:</strong> {repo.html_url}
            </div>
            <div>
              <strong>description:</strong> {repo.description}
            </div>
            <div>
              <strong>fork:</strong> {repo.fork}
            </div>
            <div>
              <strong>url:</strong> {repo.url}
            </div>
            <div>
              <strong>forks_url:</strong> {repo.forks_url}
            </div>
            <div>
              <strong>keys_url:</strong> {repo.keys_url}
            </div>
            <div>
              <strong>collaborators_url:</strong> {repo.collaborators_url}
            </div>
            <div>
              <strong>teams_url:</strong> {repo.teams_url}
            </div>
            <div>
              <strong>hooks_url:</strong> {repo.hooks_url}
            </div>
            <div>
              <strong>issue_events_url:</strong> {repo.issue_events_url}
            </div>
            <div>
              <strong>events_url:</strong> {repo.events_url}
            </div>
            <div>
              <strong>assignees_url:</strong> {repo.assignees_url}
            </div>
            <div>
              <strong>branches_url:</strong> {repo.branches_url}
            </div>
            <div>
              <strong>tags_url:</strong> {repo.tags_url}
            </div>
            <div>
              <strong>blobs_url:</strong> {repo.blobs_url}
            </div>
            <div>
              <strong>git_tags_url:</strong> {repo.git_tags_url}
            </div>
            <div>
              <strong>git_refs_url:</strong> {repo.git_refs_url}
            </div>
            <div>
              <strong>trees_url:</strong> {repo.trees_url}
            </div>
            <div>
              <strong>statuses_url:</strong> {repo.statuses_url}
            </div>
            <div>
              <strong>languages_url:</strong> {repo.languages_url}
            </div>
            <div>
              <strong>stargazers_url:</strong> {repo.stargazers_url}
            </div>
            <div>
              <strong>contributors_url:</strong> {repo.contributors_url}
            </div>
            <div>
              <strong>subscribers_url:</strong> {repo.subscribers_url}
            </div>
            <div>
              <strong>subscription_url:</strong> {repo.subscription_url}
            </div>
            <div>
              <strong>commits_url:</strong> {repo.commits_url}
            </div>
            <div>
              <strong>git_commits_url:</strong> {repo.git_commits_url}
            </div>
            <div>
              <strong>comments_url:</strong> {repo.comments_url}
            </div>
            <div>
              <strong>issue_comment_url:</strong> {repo.issue_comment_url}
            </div>
            <div>
              <strong>contents_url:</strong> {repo.contents_url}
            </div>
            <div>
              <strong>compare_url:</strong> {repo.compare_url}
            </div>
            <div>
              <strong>merges_url:</strong> {repo.merges_url}
            </div>
            <div>
              <strong>archive_url:</strong> {repo.archive_url}
            </div>
            <div>
              <strong>downloads_url:</strong> {repo.downloads_url}
            </div>
            <div>
              <strong>issues_url:</strong> {repo.issues_url}
            </div>
            <div>
              <strong>pulls_url:</strong> {repo.pulls_url}
            </div>
            <div>
              <strong>milestones_url:</strong> {repo.milestones_url}
            </div>
            <div>
              <strong>notifications_url:</strong> {repo.notifications_url}
            </div>
            <div>
              <strong>labels_url:</strong> {repo.labels_url}
            </div>
            <div>
              <strong>releases_url:</strong> {repo.releases_url}
            </div>
            <div>
              <strong>deployments_url:</strong> {repo.deployments_url}
            </div>
            <div>
              <strong>created_at:</strong> {repo.created_at}
            </div>
            <div>
              <strong>updated_at:</strong> {repo.updated_at}
            </div>
            <div>
              <strong>pushed_at:</strong> {repo.pushed_at}
            </div>
            <div>
              <strong>git_url:</strong> {repo.git_url}
            </div>
            <div>
              <strong>ssh_url:</strong> {repo.ssh_url}
            </div>
            <div>
              <strong>clone_url:</strong> {repo.clone_url}
            </div>
            <div>
              <strong>svn_url:</strong> {repo.svn_url}
            </div>
            <div>
              <strong>homepage:</strong> {repo.homepage}
            </div>
            <div>
              <strong>size:</strong> {repo.size}
            </div>
            <div>
              <strong>stargazers_count:</strong> {repo.stargazers_count}
            </div>
            <div>
              <strong>watchers_count:</strong> {repo.watchers_count}
            </div>
            <div>
              <strong>language:</strong> {repo.language}
            </div>
            <div>
              <strong>has_issues:</strong> {repo.has_issues}
            </div>
            <div>
              <strong>has_projects:</strong> {repo.has_projects}
            </div>
            <div>
              <strong>has_downloads:</strong> {repo.has_downloads}
            </div>
            <div>
              <strong>has_wiki:</strong> {repo.has_wiki}
            </div>
            <div>
              <strong>has_pages:</strong> {repo.has_pages}
            </div>
            <div>
              <strong>has_discussions:</strong> {repo.has_discussions}
            </div>
            <div>
              <strong>forks_count:</strong> {repo.forks_count}
            </div>
            <div>
              <strong>mirror_url:</strong> {repo.mirror_url}
            </div>
            <div>
              <strong>archived:</strong> {repo.archived}
            </div>
            <div>
              <strong>disabled:</strong> {repo.disabled}
            </div>
            <div>
              <strong>open_issues_count:</strong> {repo.open_issues_count}
            </div>
            <div>
              <strong>license:</strong> {repo.license}
            </div>
            <div>
              <strong>allow_forking:</strong> {repo.allow_forking}
            </div>
            <div>
              <strong>is_template:</strong> {repo.is_template}
            </div>
            <div>
              <strong>web_commit_signoff_required:</strong>{" "}
              {repo.web_commit_signoff_required}
            </div>
            <div>
              <strong>visibility:</strong> {repo.visibility}
            </div>
            <div>
              <strong>forks:</strong> {repo.forks}
            </div>
            <div>
              <strong>open_issues:</strong> {repo.open_issues}
            </div>
            <div>
              <strong>watchers:</strong> {repo.watchers}
            </div>
            <div>
              <strong>default_branch:</strong> {repo.default_branch}
            </div>

            {/* <div>permissions.admin: {repo.permissions.admin}</div>
            <div>permissions.maintain: {repo.permissions.maintain}</div>
            <div>permissions.push: {repo.permissions.push}</div>
            <div>permissions.triage: {repo.permissions.triage}</div>
            <div>permissions.pull: {repo.permissions.pull}</div> */}
            <hr />
          </div>
        ))}
      </div>
      <div>
        <h1>Members</h1>
        {members.map((member) => (
          <div key={member.id}>
            <div>
              <strong>login:</strong> {member.login}
            </div>
            <div>
              <strong>id:</strong> {member.id}
            </div>
            <div>
              <strong>node_id:</strong> {member.node_id}
            </div>
            <div>
              <strong>avatar_url:</strong> {member.avatar_url}
            </div>
            <div>
              <strong>gravatar_id:</strong> {member.gravatar_id}
            </div>
            <div>
              <strong>url:</strong> {member.url}
            </div>
            <div>
              <strong>html_url:</strong> {member.html_url}
            </div>
            <div>
              <strong>followers_url:</strong> {member.followers_url}
            </div>
            <div>
              <strong>following_url:</strong> {member.following_url}
            </div>
            <div>
              <strong>gists_url:</strong> {member.gists_url}
            </div>
            <div>
              <strong>starred_url:</strong> {member.starred_url}
            </div>
            <div>
              <strong>subscriptions_url:</strong> {member.subscriptions_url}
            </div>
            <div>
              <strong>organizations_url:</strong> {member.organizations_url}
            </div>
            <div>
              <strong>repos_url:</strong> {member.repos_url}
            </div>
            <div>
              <strong>events_url:</strong> {member.events_url}
            </div>
            <div>
              <strong>received_events_url:</strong> {member.received_events_url}
            </div>
            <div>
              <strong>type:</strong> {member.type}
            </div>
            <div>
              <strong>user_view_type:</strong> {member.user_view_type}
            </div>
            <div>
              <strong>site_admin:</strong> {member.site_admin}
            </div>

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
