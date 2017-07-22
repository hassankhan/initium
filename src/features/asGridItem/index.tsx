import * as _ from 'lodash';
import * as React from 'react';

interface SimpleTileProps {
  className?: string;
  key: string;
  style?: React.CSSProperties;
}

const asGridItem = (Component: any) => {

  return class extends React.Component<SimpleTileProps> {

    static displayName = 'GridItemWrapper';

    render() {
      // const propsToPassToDragHandle = _.pick(this.props, []);
      const passthruProps = _.pick(this.props, [
        'className',
        'key',
        'style',
        'onMouseDown',
        'onMouseUp',
        'onTouchStart',
        'onTouchEnd'
      ]);

      return (<div {...passthruProps}>{Component}{this.props.children}</div>);
    }
  };
};

export default asGridItem;
