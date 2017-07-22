/// <reference path='../../types/velocity-react.d.ts' />

import * as _ from 'lodash';
import * as React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

import Widget from '../../components/Widget';
import GitHubWatchedIssue from './GitHubWatchedIssue';
// import ResizeButton from "../../features/ResizeButton/index";

import './styles.css';

interface GitHubWatchedIssuesProps {
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
      }, {
        repository : 'serverless/serverless',
        issue: 543,
        link : 'http://google.com',
        updatedAt: (new Date()).toISOString(),
      }, {
        repository : 'serverless/serverless',
        issue: 123,
        link : 'http://google.com',
        updatedAt: (new Date()).toISOString(),
      }, {
        repository : 'serverless/serverless',
        issue: 1232,
        link : 'http://google.com',
        updatedAt: (new Date()).toISOString(),
      }], (item) => {

        return (<li key={`${item.repository}#${item.issue}`}><GitHubWatchedIssue {...item} /></li>);
      });

      return elements;
    };

    let bodyClass = 'github-issues widget__body ';
    bodyClass += this.state.isExpanded
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
        <Widget.Body className={bodyClass}>
          <VelocityTransitionGroup
            component="ul"
            enter={{animation: 'slideDown', duration: this.props.animation.duration, style: {height: ''}}}
            leave={{animation: 'slideUp', duration: this.props.animation.duration}}
          >
            {renderBody(this.state.isExpanded)}
          </VelocityTransitionGroup>
        </Widget.Body>
        {/*<Widget.Footer>*/}
          {/*<ResizeButton isResizing={false}/>*/}
        {/*</Widget.Footer>*/}
      </Widget>
    );
  }
}
