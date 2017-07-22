/// <reference path='../../types/velocity-react.d.ts' />

import * as _ from 'lodash';
import * as React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

import Widget from '../../components/Widget';
import GitHubWatchedIssue from './GitHubWatchedIssue';

// import './styles.css';

interface GridItemProps {
  className?: string;
  style?: React.CSSProperties;
}

interface GitHubWatchedIssuesProps extends GridItemProps {
  animation: {
    duration?: number;
  };
}

interface GitHubWatchedIssuesState {
  isExpanded: boolean;
}

export default class GitHubWatchedIssues extends React.Component<GitHubWatchedIssuesProps, GitHubWatchedIssuesState> {

  static defaultProps: Partial<GitHubWatchedIssuesProps> = {
    animation: {
      duration: 2000,
    },
  };

  constructor(props: GitHubWatchedIssuesProps) {
    super(props);

    this.state = {
      isExpanded : true,
    };
  }

  handleExpand = () => {
    this.setState({
      isExpanded : true,
    });
  }

  handleMinimize = () => {
    this.setState({
      isExpanded : false,
    });
  }

  render() {

    const renderBody = (isExpanded: boolean) => {
      if (!isExpanded) {

        return null;
      }

      const elements = _.map([{
        repository : 'serverless/serverless',
        issue: 1,
        link : 'http://google.com',
        updatedAt: (new Date()).toISOString(),
      }, {
        repository : 'serverless/serverless',
        issue: 100,
        link : 'http://google.com',
        updatedAt: (new Date()).toISOString(),
      }], (item) => {

        return (<GitHubWatchedIssue key={`${item.repository}#${item.issue}`} {...item} />);
      });

      return (
        <Widget.Body>
          {elements}
        </Widget.Body>
      );
    };

    const bodyClass = this.state.isExpanded
      ? 'widget__body--expanded'
      : 'widget__body--minimized';

    return (
      <Widget>
        <Widget.Header>
          <Widget.HeaderTitle icon="github" name="GitHub Watched Issues" />
          <Widget.HeaderOptions
            animation={this.props.animation}
            isExpanded={this.state.isExpanded}
            onExpand={this.handleExpand}
            onMinimize={this.handleMinimize}
          />
        </Widget.Header>
        <VelocityTransitionGroup
          className={bodyClass}
          component="section"
          enter={{animation: 'slideDown', duration: this.props.animation.duration, style: {height: ''}}}
          leave={{animation: 'slideUp', duration: this.props.animation.duration}}
        >
          {renderBody(this.state.isExpanded)}
        </VelocityTransitionGroup>
        {}
        {/*<Widget.Title>GitHub Activity</Widget.Title>*/}
        {/*<p>Hello</p>*/}
      </Widget>
    );
  }
}
