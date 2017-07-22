import * as moment from 'moment';
import * as React from 'react';

interface GitHubWatchedIssueProps {
  style?: React.CSSProperties;
  repository: string;
  issue: number;
  link: string;
  updatedAt: string;
}

function GitHubWatchedIssue(props: GitHubWatchedIssueProps) {
  const link = `https://github.com/${props.repository}/issues/${props.issue}`;

  return (
    <section style={props.style} className="github-issue">
      <a className="github-issue__name" href={link}><h3>{props.repository}#{props.issue}</h3></a>
      <p className="github-issue__date">Last updated {moment(props.updatedAt).fromNow()}</p>
    </section>
  );
}

export default GitHubWatchedIssue;
