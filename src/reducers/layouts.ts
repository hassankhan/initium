import * as ReactGridLayout from 'react-grid-layout';

import { TYPES } from '../actions/layouts';

import { DragAction, LayoutsAction } from '../actions/layouts';

export type State = ReactGridLayout.Layout[];

const initialState: State = [
  {
    x: 1,
    y: 1,
    w: 4,
    h: 7,
    minW: 4,
    i: 'GitHubWatchedIssues',
  },
  {
    x: 7,
    y: 1,
    w: 4,
    h: 7,
    // maxH: 9,
    i: 'Spotify',
  },
];

const layouts = (state: State = initialState, action: DragAction | LayoutsAction) => {

  switch (action.type) {

    case TYPES.LAYOUTS_CHANGE: {
      console.log(state);
      console.log(action.payload);
      return action.payload;
    }

    case TYPES.DRAG_ITEM: {
      return state;
    }

    case TYPES.DRAG_ITEM_START: {
      return state;
    }

    case TYPES.DRAG_ITEM_STOP: {
      return state;
    }

    default:
      return state;
  }
}

export default layouts;
