import * as React from 'react';

// import './styles.css';



interface GitHubWatchedIssueProps{
  repository: string;
  issue: number;
  link: string;
  updatedAt: string;
}

function GitHubWatchedIssue(props: GitHubWatchedIssueProps) {
  const link = `https://github.com/${props.repository}/issues/${props.issue}`;

  return (
    <section>
      <a href={link}><h3 className="">{props.repository}#{props.issue}</h3></a>
      <p>Last Updated At: {props.updatedAt}</p>
    </section>
  );
}

export default GitHubWatchedIssue;
