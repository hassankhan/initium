import { Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from '../../reducers';

import { Action } from '../../types/redux';
import { HukdResult } from './types';

export const TYPES = {
  HUKD_PENDING : '@@WIDGET/HUKD/HOTTEST_DEALS/PENDING',
  HUKD_SUCCESS : '@@WIDGET/HUKD/HOTTEST_DEALS/SUCCESS',
  HUKD_FAILURE : '@@WIDGET/HUKD/HOTTEST_DEALS/FAILURE',
};

export interface HukdAction extends Action {
  payload: HukdResult;
}

export const getDeals = (): ThunkAction<Promise<HukdResult>, RootState, null> => {

  return (dispatch: Dispatch<RootState>): Promise<HukdResult> => {

    dispatch({ type : TYPES.HUKD_PENDING } as HukdAction);

    const API_KEY = 'ae14ed1898ac346c7e260fbc949fee52';
    const queryParams = [
      `key=${API_KEY}`,
      'exclude_expired=true',
      'order=hot',
      'forum=deals',
      'results_per_page=10',
      'output=json',
    ].join('&');

    return fetch(`https://cors-anywhere.herokuapp.com/https://api.hotukdeals.com/rest_api/v2/?${queryParams}`)
      .then((response) => {

        return response.json();
      })
      .then((json) => {
        dispatch({
          type    : TYPES.HUKD_SUCCESS,
          payload : json.deals.items,
        } as HukdAction);

        return json.deals.items;
      })
      .catch((error) => {
        dispatch({
          type    : TYPES.HUKD_FAILURE,
          payload : error,
        });

        return Promise.reject(error);
      });
  };
};
