/// <reference path='../../types/velocity-react.d.ts' />

import * as React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

import Widget from '../../components/Widget';

import './styles.css';

interface SpotifyProps {
  animation: {
    duration?: number;
  };
}

interface SpotifyState {
  isExpanded: boolean;
}

export default class Spotify extends React.Component<SpotifyProps, SpotifyState> {

  static defaultProps: Partial<SpotifyProps> = {
    animation: {
      duration: 2000,
    },
  };

  constructor(props: SpotifyProps) {
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

      return (
        <div className="spotify__container">
          <iframe
            className="spotify__embed"
            src="https://open.spotify.com/embed/user/1115661994/playlist/7lWPxLSqVEvKMb9xx4ThuB"
            frameBorder={0}
            allowTransparency={true}
          />{/**/}
        </div>
      );
    };

    let bodyClass = 'widget__body ';
    bodyClass += this.state.isExpanded
      ? 'widget__body--expanded'
      : 'widget__body--minimized';

    return (
      <Widget className="spotify">
        <Widget.Header>
          <Widget.HeaderTitle icon="spotify" name="Spotify" />
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
          enter={{animation: 'slideDown', duration: this.props.animation.duration, style: { height: '' }}}
          leave={{animation: 'slideUp', duration: this.props.animation.duration}}
        >
          {renderBody(this.state.isExpanded)}
        </VelocityTransitionGroup>
      </Widget>
    );
  }
}
