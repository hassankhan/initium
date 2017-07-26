import { throttle } from 'lodash';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { responsiveStoreEnhancer } from 'redux-responsive';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import { loadState, saveState } from './localStorage';

const middleware = [ thunk ];

const persistedState = loadState('state');

const store = createStore(rootReducer, persistedState, composeWithDevTools(
  responsiveStoreEnhancer,
  applyMiddleware(...middleware),
));

// Persist state to local storage
store.subscribe(throttle(() => {
  saveState('state', store.getState());
}, 1000));


if (process.env.NODE_ENV !== "production") {
// Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }
}
export default store;
