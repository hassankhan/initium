import * as ReactGridLayout from 'react-grid-layout';

export interface LayoutItem extends ReactGridLayout.Layout {
  isExpanded: boolean;
}
