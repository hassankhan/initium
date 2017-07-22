import * as React from 'react';

import Body from './Body';
import { Header, HeaderOptions, HeaderTitle } from './Header';
import './styles.css';

interface WidgetProps {
  className?: string;
  style?: React.CSSProperties;
}

class Widget extends React.Component<WidgetProps, {}> {

  static Body = Body;
  static Header = Header;
  static HeaderOptions = HeaderOptions;
  static HeaderTitle = HeaderTitle;

  render() {
    return (
      <div className="widget">
        {this.props.children}
      </div>
    );
  }
}

export default Widget;
