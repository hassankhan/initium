import { Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from '../../reducers';

import { Action } from '../../types/redux';
import { WeatherResult } from '../../types/yahoo-weather';

export const TYPES = {
  WEATHER_PENDING : '@@WIDGET/WEATHER/PENDING',
  WEATHER_SUCCESS : '@@WIDGET/WEATHER/SUCCESS',
  WEATHER_FAILURE : '@@WIDGET/WEATHER/FAILURE',
};

interface WeatherAction extends Action {
  payload: WeatherResult;
}

export const getWeather = (): ThunkAction<Promise<WeatherResult>, RootState, null> => {

  return (dispatch: Dispatch<RootState>): Promise<WeatherResult> => {

    dispatch({ type : TYPES.WEATHER_PENDING } as WeatherAction);

    const yql = [
      'select * from weather.forecast',
      'where woeid in (select woeid from geo.places(1)',
      'where text=\'london, uk\')',
      'and u=\'c\''
    ].join(' ');

    return fetch(`https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(yql)}&format=json`)
      .then((response) => {

        return response.json();
      })
      .then((json) => {
        dispatch({
          type    : TYPES.WEATHER_SUCCESS,
          payload : json.query.results,
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
