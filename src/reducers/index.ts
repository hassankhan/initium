import { combineReducers } from 'redux';
import app, { State as AppState } from './app';
import layouts, { State as LayoutState } from './layouts';
import today, { State as TodayWidgetState } from '../widgets/today/reducer';

export interface RootState {
  app: AppState;
  layouts: LayoutState;
  today: TodayWidgetState;
}

const initiumApp = combineReducers<RootState>({
  app,
  layouts,
  today,
});

export default initiumApp;
