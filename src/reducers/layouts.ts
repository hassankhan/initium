import * as _ from 'lodash';

import { TYPES as LAYOUT_TYPES, DragAction, LayoutsAction } from '../actions/layouts';
import { TYPES as WIDGET_TYPES, ExpandAction, MinimizeAction } from '../actions/widgets';

import { LayoutItem } from '../types/app';

export type State = LayoutItem[];

const initialState: State = [
  {
    x: 0,
    y: 0,
    w: 4,
    h: 7,
    minW: 3,
    i: 'GitHubWatchedIssuesWidget',
    isExpanded: true,
  },
  {
    x: 4,
    y: 0,
    w: 4,
    h: 7,
    minW: 3,
    i: 'WeatherWidget',
    isExpanded: true,
  },
  {
    x: 9,
    y: 0,
    w: 4,
    h: 7,
    // maxH: 9,
    i: 'SpotifyWidget',
    isExpanded: true,
  },
  {
    x: 4,
    y: 7,
    w: 4,
    h: 7,
    // maxH: 9,
    i: 'HotUkDealsWidget',
    isExpanded: true,
  }
];

type CombinedActions = DragAction | ExpandAction | LayoutsAction;

const layouts = (state: State = initialState, action: CombinedActions) => {

  switch (action.type) {

    case LAYOUT_TYPES.LAYOUTS_CHANGE: {
      const layoutsAction = action as LayoutsAction;

      return _.map(state, (item, index) => {
        return {
          ...state[index],
          ...layoutsAction.payload[index],
        };
      });
    }

    case LAYOUT_TYPES.DRAG_ITEM: {
      return state;
    }

    case LAYOUT_TYPES.DRAG_ITEM_START: {
      return state;
    }

    case LAYOUT_TYPES.DRAG_ITEM_STOP: {
      return state;
    }

    case WIDGET_TYPES.EXPAND_WIDGET: {
      const expandAction = action as ExpandAction;

      return _.map(state, (item) => {
        if (item.i !== expandAction.payload) {
          return item;
        }

        return {
          ...item,
          isExpanded : true,
        };
      });
    }

    case WIDGET_TYPES.MINIMIZE_WIDGET: {
      const minimizeAction = action as MinimizeAction;

      return _.map(state, (item) => {
        // console.log(item.i);
        // console.log(minimizeAction.payload);

        if (item.i !== minimizeAction.payload) {
          return item;
        }

        // console.log(1111111111111111111111111111111111111);

        return {
          // ...item,
          // isExpanded : false,
        };
      });
    }

    default: {
      return state;
    }
  }
};

export default layouts;

export const selectLayoutById = (state: State, id: string): LayoutItem => {

  const result = _.find(state, { i: id });
  if (!result) {
    throw new Error(`No layout with id ${id} found`);
  }

  return result;
};
