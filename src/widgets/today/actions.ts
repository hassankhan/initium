import { Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from '../../reducers';

import { Action } from '../../types/redux';
import { WeatherResult } from '../../types/openweather';

export const TYPES = {
  WEATHER_PENDING : '@@WIDGET/TODAY/WEATHER/PENDING',
  WEATHER_SUCCESS : '@@WIDGET/TODAY/WEATHER/SUCCESS',
  WEATHER_FAILURE : '@@WIDGET/TODAY/WEATHER/FAILURE',
};

interface WeatherAction extends Action {
  payload: WeatherResult;
}

export const getWeather = (): ThunkAction<Promise<WeatherResult>, RootState, null> => {

  return (dispatch: Dispatch<RootState>, getState: () => RootState): Promise<WeatherResult> => {

    const API_KEY = 'b1b15e88fa797225412429c1c50c122a1';

    return fetch(`http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({
          type    : TYPES.WEATHER_SUCCESS,
          payload : json,
        } as WeatherAction);

        return json;
      })
      .catch((error) => {
        dispatch({
          type    : TYPES.WEATHER_FAILURE,
          payload : error,
        });

        return Promise.reject(error);
      });
  };
};
