import * as React from 'react';
import * as Icon from 'react-fontawesome';

import './styles.css';
import Button from '../Button';
import ExpandButton from '../../features/ExpandButton';

interface WidgetHeaderTitleProps {
  icon: string;
  name: string;
}

export const HeaderTitle: React.SFC<WidgetHeaderTitleProps> = (props) => {
  return (
    <ul className="widget__title">
      <li>
        <Icon className="widget__icon" name={props.icon} size="2x" />
      </li>
      <li>
        <h3 className="widget__name">{props.name}</h3>
      </li>
    </ul>
  );
};

HeaderTitle.displayName = 'WidgetHeaderTitle';

export interface WidgetHeaderOptionsProps {
  animation: {
    duration?: number;
  };
  isExpanded: boolean;
  onExpand: Function;
  onMinimize: Function;
}

export const HeaderOptions: React.SFC<WidgetHeaderOptionsProps> = (props) => {
  return (
    <ul className="widget__options">
      <li>
        <ExpandButton
          animation={props.animation}
          isExpanded={props.isExpanded}
          onShow={props.onExpand}
          onHide={props.onMinimize}
        />
      </li>
      <li>
        <Button inline={true} onClick={(event: React.MouseEvent<HTMLButtonElement>) => { return; }}>
          <li><Icon className="widget__settings" name="cog" /></li>
        </Button>
      </li>
    </ul>
  );
};

HeaderOptions.displayName = 'WidgetHeaderOptions';

interface WidgetHeaderProps {
  children: React.ReactNode;
}

export const Header: React.SFC<WidgetHeaderProps> = (props) => {
  return (
    <header className="widget__header">

      {props.children}

    </header>
  );
};

Header.displayName = 'WidgetHeader';
