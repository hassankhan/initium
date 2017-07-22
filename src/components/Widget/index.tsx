import * as React from 'react';

import Body from './Body';
import { Header, HeaderOptions, HeaderTitle } from './Header';
import Footer from './Footer';

interface WidgetProps {
  className?: string;
}

class Widget extends React.Component<WidgetProps, {}> {

  static Body = Body;
  static Header = Header;
  static HeaderOptions = HeaderOptions;
  static HeaderTitle = HeaderTitle;
  static Footer = Footer;

  render() {
    return (
      <div className={`widget ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Widget;
