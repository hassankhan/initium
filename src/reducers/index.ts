import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive';

import app, { State as AppState } from './app';
import layouts, { State as LayoutState } from './layouts';
import weather, { State as WeatherWidgetState } from '../widgets/weather/reducer';
import hukd, { State as HukdWidgetState } from '../widgets/hukd/reducer';

export interface RootState {
  app: AppState;
  browser: {},
  layouts: LayoutState;
  hukd: HukdWidgetState;
  weather: WeatherWidgetState;
}

const initiumApp = combineReducers<RootState>({
  app,
  browser : responsiveStateReducer,
  layouts,
  hukd,
  weather,
});

export default initiumApp;
