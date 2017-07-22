import { Action as BaseAction } from 'redux';

export interface Action extends BaseAction {
  type: string;
  payload: {};
}
