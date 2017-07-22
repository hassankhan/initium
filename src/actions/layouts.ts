import * as ReactGridLayout from 'react-grid-layout';

import { Action } from '../types/redux';
import { LayoutChangeCallback } from '../types/react-grid-layout';

export const TYPES = {
  DRAG_ITEM       : '@@GRID/DRAG_ITEM',
  DRAG_ITEM_START : '@@GRID/DRAG_ITEM/START',
  DRAG_ITEM_STOP  : '@@GRID/DRAG_ITEM/STOP',
  LAYOUTS_CHANGE  : '@@GRID/LAYOUTS/UPDATE',
};

type LayoutsPayload = ReactGridLayout.Layout[];
type DragPayload = ReactGridLayout.Layout;

export interface LayoutsAction extends Action {
  payload: LayoutsPayload;
}

export const handleLayoutsChange: LayoutChangeCallback = (
  layout: ReactGridLayout.Layout[]
): LayoutsAction => {

  return {
    type    : TYPES.LAYOUTS_CHANGE,
    payload : layout,
  };
}

export interface DragAction extends Action {
  payload: DragPayload;
}

export const handleDragItem: ReactGridLayout.ItemCallback = (
  layout,
  oldItem,
  newItem,
): DragAction => {

  return {
    type : TYPES.DRAG_ITEM,
    payload : newItem,
  };
}

export const handleStartDragItem: ReactGridLayout.ItemCallback = (
  layout,
  oldItem,
  newItem,
  placeholder,
  event,
  element
): DragAction => {

  return {
    type : TYPES.DRAG_ITEM_START,
    payload : newItem,
  };
}

export const handleStopDragItem: ReactGridLayout.ItemCallback = (
  layout,
  oldItem,
  newItem,
  placeholder,
  event,
  element
): DragAction => {

  return {
    type : TYPES.DRAG_ITEM_STOP,
    payload : newItem,
  };
}
