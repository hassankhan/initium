import { Action } from '../../types/redux';
import { WeatherResult } from '../../types/openweather';

import { TYPES } from './actions';

export interface State {
  isFetching?: boolean;
  error?: Error;
  weather?: WeatherResult;
}

const initialState: Partial<State> = {
  isFetching : false,
  error      : undefined,
  weather    : undefined,
};

const today = (state: State = initialState, action: Action) => {
  switch (action.type) {

    case TYPES.WEATHER_PENDING: {
      return {
        ...state,
        isFetching : true,
      };
    }

    case TYPES.WEATHER_SUCCESS: {
      return {
        ...state,
        isFetching : false,
        weather    : action.payload,
      };
    }

    case TYPES.WEATHER_FAILURE: {
      return {
        ...state,
        isFetching : false,
        error      : action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default today;
