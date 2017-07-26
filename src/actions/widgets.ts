import { Action } from '../types/redux';

export const TYPES = {
  EXPAND_WIDGET   : '@@WIDGET/EXPAND',
  MINIMIZE_WIDGET : '@@WIDGET/MINIMIZE',
};

type ExpandPayload = string;

export interface ExpandAction extends Action {
  payload: ExpandPayload;
}

export type MinimizeAction = ExpandAction;

export const handleExpand = (widgetId: string): ExpandAction => {

  return {
    type    : TYPES.EXPAND_WIDGET,
    payload : widgetId,
  };
};

export const handleMinimize = (widgetId: string): ExpandAction => {

  return {
    type    : TYPES.MINIMIZE_WIDGET,
    payload : widgetId,
  };
};
