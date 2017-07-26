import * as _ from 'lodash';
import * as React from 'react';
import * as Icon from 'react-fontawesome';

import Button from '../Button';
import ExpandButton from '../../features/ExpandButton';

interface WidgetHeaderTitleProps {
  icon: string;
  name: string;
}

export const HeaderTitle: React.SFC<WidgetHeaderTitleProps> = (props) => {

  const renderedIcon = _.endsWith(props.icon, '.svg')
    ? <img draggable={false} src={props.icon} alt="Icon" title="Icon" />
    : <Icon className="widget__icon" name={props.icon} size="2x" />;

  // console.log(props.icon);
  return (
    <ul className="widget__title">
      <li>
        {renderedIcon}
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
          className="widget__expand"
          animation={props.animation}
          isExpanded={props.isExpanded}
          onShow={props.onExpand}
          onHide={props.onMinimize}
        />
      </li>
      <li>
        <Button className="widget__settings" inline={true} onClick={() => { return; }}>
          <li><Icon name="cog" /></li>
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
