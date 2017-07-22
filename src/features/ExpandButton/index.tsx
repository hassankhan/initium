/// <reference path='../../types/velocity-react.d.ts' />

import * as React from 'react';
import * as Icon from 'react-fontawesome';
import { VelocityComponent } from 'velocity-react';

import Button from '../../components/Button';

interface ExpandButtonProps {
  animation: {
    duration?: number;
  };
  isExpanded: boolean;
  onShow: Function;
  onHide: Function;
}

interface ExpandButtonState {
  isExpanded: boolean;
}

export default class ExpandButton extends React.Component<ExpandButtonProps, ExpandButtonState> {

  static defaultProps = {
    animation: {
      duration: 2000,
    },
    isExpanded: true,
  };

  constructor(props: ExpandButtonProps) {
    super(props);

    this.state = {
      isExpanded : props.isExpanded,
    };
  }

  onClick = (event: React.MouseEvent<HTMLButtonElement>) => {

    let currentState = this.state.isExpanded;

    const handler = currentState
      ? this.props.onHide
      : this.props.onShow;

    this.setState((prevState) => {
      return { isExpanded : !prevState.isExpanded };
    }, handler(event));
  }

  render(): JSX.Element {

    return (
      <VelocityComponent
        animation={{rotateZ: this.state.isExpanded ? 0 : -180}}
        duration={this.props.animation.duration}
      >
        <Button inline={true} onClick={this.onClick}>
          <Icon className="widget__expand" name="chevron-down" />
        </Button>
      </VelocityComponent>
    );

    // if (this.state.isExpanded) {
    //   return (
    //     <Button inline={true} onClick={this.onClick}>
    //       <Icon className="widget__expand" name="chevron-down" />
    //     </Button>
    //   );
    // }
    //
    // return (
    //   <Button inline={true} onClick={this.onClick}>
    //     <Icon className="widget__expand" name="chevron-up" />
    //   </Button>
    // );
  }
}
