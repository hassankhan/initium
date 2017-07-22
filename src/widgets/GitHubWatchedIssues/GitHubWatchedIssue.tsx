import * as React from 'react';

// import './styles.css';

interface GitHubWatchedIssueProps {
  title: string;
  link: string;
  updatedAt: string;
}

function GitHubWatchedIssue(props: GitHubWatchedIssueProps) {
  return (
    <section>
      <a href={props.link}><h3 className="">{props.title}</h3></a>
      <p>Last Updated At: {props.updatedAt}</p>
    </section>
  );
}

export default GitHubWatchedIssue;
