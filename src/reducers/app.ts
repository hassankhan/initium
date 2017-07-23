import { Action } from '../types/redux';

export interface State {
  animation?: {
    duration: number;
  };
}

const initialState: Partial<State> = {
  animation: {
    duration : 1000,
  },
};

const app = (state: State = initialState, action: Action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default app;
