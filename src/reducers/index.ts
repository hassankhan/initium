import { combineReducers } from 'redux';
import app, { State as AppState } from './app';
import layouts, { State as LayoutState } from './layouts';

export interface RootState {
  app: AppState;
  layouts: LayoutState;
}

const initiumApp = combineReducers<RootState>({
  app,
  layouts,
})

export default initiumApp;
