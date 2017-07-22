import * as ReactGridLayout from 'react-grid-layout';

import { Action } from '../types/redux';

export const TYPES = {
  DRAG_ITEM_START : '@@GRID/DRAG_ITEM/START',
  DRAG_ITEM_STOP  : '@@GRID/DRAG_ITEM/STOP',
};

interface Payload {
  layout: ReactGridLayout.Layout[];
  oldItem: ReactGridLayout.Layout;
  newItem: ReactGridLayout.Layout;
  placeholder: ReactGridLayout.Layout | null;
  event: MouseEvent;
  element: HTMLElement;
}

export interface StartDragAction extends Action {
  payload: Payload;
}

export interface StopDragAction extends Action {
  payload: Payload;
}

export const startDragItem: ReactGridLayout.ItemCallback = (layout, oldItem, newItem, placeholder, e, element) => {

  return {
    type : TYPES.DRAG_ITEM_START,
    payload : { layout, oldItem, newItem, placeholder, e, element },
  };
}

export const stopDragItem: ReactGridLayout.ItemCallback = (layout, oldItem, newItem, placeholder, e, element) => {

  return {
    type : TYPES.DRAG_ITEM_STOP,
    payload : { layout, oldItem, newItem, placeholder, e, element },
  };
}
