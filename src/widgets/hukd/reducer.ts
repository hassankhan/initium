import { HukdAction, TYPES } from './actions';
import { HukdResult } from './types';

export interface State {
  isFetching?: boolean;
  error?: Error;
  deals?: HukdResult;
}

const initialState: Partial<State> = {
  isFetching : false,
};

const hukd = (state: State = initialState, action: HukdAction) => {
  switch (action.type) {

    case TYPES.HUKD_PENDING: {
      return {
        ...state,
        isFetching : true,
      };
    }

    case TYPES.HUKD_SUCCESS: {
      return {
        ...state,
        isFetching : false,
        deals      : action.payload,
      };
    }

    case TYPES.HUKD_FAILURE: {
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

export default hukd;
