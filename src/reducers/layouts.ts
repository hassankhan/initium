import * as ReactGridLayout from 'react-grid-layout';

import { TYPES } from '../actions/layouts';

import { Action } from '../types/redux';
import { StartDragAction, StopDragAction } from '../actions/layouts';

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

const layouts = (state: State = initialState, action: Action) => {
  switch (action.type) {

    case TYPES.DRAG_ITEM_START:
      const startDragAction = action as StartDragAction;
      return startDragAction.payload.layout;

    case TYPES.DRAG_ITEM_STOP:
      const stopDragAction = action as StopDragAction;
      return stopDragAction.payload.layout;

    default:
      return state;
  }
}

export default layouts;
