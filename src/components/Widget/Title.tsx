import * as React from 'react';

import './styles.css';

interface PanelTitleProps {
  children: React.ReactNode;
}

function Title(props: PanelTitleProps) {
  return (
    <h3 className="widget__title">{props.children}</h3>
  );
}

export default Title;
