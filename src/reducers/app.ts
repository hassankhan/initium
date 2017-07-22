import { Action } from '../types/redux';

export interface State {
  user?: {};
}

const initialState: Partial<State> = {
  user : {},
};

const app = (state: State = initialState, action: Action) => {
  switch (action.type) {

    default:
      return state;
  }
}

export default app;
