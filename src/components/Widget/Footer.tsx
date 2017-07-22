import * as React from 'react';

interface WidgetFooterProps {
  children: React.ReactNode;
}

const Footer: React.SFC<WidgetFooterProps> = (props) => {
  return (
    <footer className="widget__footer">

      {props.children}

    </footer>
  );
};

export default Footer;
