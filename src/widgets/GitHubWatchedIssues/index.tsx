/// <reference path='../../types/velocity-react.d.ts' />

import * as React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

import Widget from '../../components/Widget';

// import './styles.css';

interface GitHubWatchedIssuesProps {
  animation: {
    duration?: number;
  };
  // children: React.ReactNode;
}

interface GitHubWatchedIssuesState {
  isExpanded: boolean;
}

const text = 'Now that we know who you are, I know who I am. I\'m not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain\'s going to be? He\'s the exact opposite of the hero. And most times they\'re friends, like you and me! I should\'ve known way back when... You know why, David? Because of the kids. They called me Mr Glass.';

export default class GitHubWatchedIssues extends React.Component<GitHubWatchedIssuesProps, GitHubWatchedIssuesState> {

  static defaultProps: Partial<GitHubWatchedIssuesProps> = {
    animation: {
      duration: 2000,
    },
  };

  constructor(props: GitHubWatchedIssuesProps) {
    super(props);

    this.state = {
      isExpanded : false,
    };
  }

  handleExpand = () => {
    this.setState({
      isExpanded : true,
    });
    console.log('EXPANDED!');
  }

  handleMinimize = () => {
    this.setState({
      isExpanded : false,
    });
    console.log('MINIMIZED!');
  }

  render() {

    const renderBody = (isExpanded: boolean) => {
      if (!isExpanded) {

        return null;
      }

      const bodyClass = isExpanded
        ? 'widget__body--expanded'
        : 'widget__body--minimized';

      return (
        <Widget.Body className={bodyClass}>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
        </Widget.Body>
      );
    };

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
