/// <reference path='../../types/velocity-react.d.ts' />

import * as React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

import Widget from '../../components/Widget';

interface Props {
  animation: {
    duration?: number;
  };
}

interface State {
  isExpanded: boolean;
}

export default class Today extends React.Component<Props, State> {

  static defaultProps: Partial<Props> = {
    animation: {
      duration: 2000,
    },
  };

  constructor(props: Props) {
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
        <div className="today__container">

        </div>
      );
    };

    let bodyClass = 'widget__body ';
    bodyClass += this.state.isExpanded
      ? 'widget__body--expanded'
      : 'widget__body--minimized';

    return (
      <Widget className="today">
        <Widget.Header>
          <Widget.HeaderTitle icon="clock-o" name="Today" />
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
