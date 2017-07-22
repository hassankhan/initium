import * as React from 'react';
import * as Icon from 'react-fontawesome';

interface ResizeButtonProps {
  isResizing: boolean;
}

interface ResizeButtonState {
  isResizing: boolean;
}

export default class ResizeButton extends React.Component<ResizeButtonProps, ResizeButtonState> {

  static defaultProps = {
    isResizing: true,
  };

  render(): JSX.Element {

    return (
      <Icon className="widget__resize" name="expand" />
    );
  }
}
