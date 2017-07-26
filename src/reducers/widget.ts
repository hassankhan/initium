// import * as _ from 'lodash';

// import { TYPES as LAYOUT_TYPES, DragAction, LayoutsAction } from '../actions/layouts';
import { TYPES as WIDGET_TYPES, ExpandAction, MinimizeAction } from '../actions/widgets';

import { LayoutItem } from '../types/app';

export type State = LayoutItem;

const initialState: State = {
  x: 0,
  y: 0,
  w: 0,
  h: 0,
  minH: 0,
  maxH: 0,
  minW: 0,
  maxW: 0,
  i: '',
  isExpanded: true,
};

type CombinedActions = ExpandAction | MinimizeAction;

const widget = (state: State = initialState, action: CombinedActions) => {

  switch (action.type) {

    case WIDGET_TYPES.EXPAND_WIDGET: {
      const expandAction = action as ExpandAction;

      return {
        ...state,
        isExpanded : expandAction.payload,
      };
    }

    case WIDGET_TYPES.MINIMIZE_WIDGET: {
      const minimizeAction = action as MinimizeAction;

      return {
        ...state,
        isExpanded : minimizeAction.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default widget;
