/// <reference path='./types/redux-responsive.d.ts' />
/// <reference path='./types/velocity-react.d.ts' />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/configureStore';
import App from './containers/App';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./containers/App', () => {
      ReactDOM.render(
        <App/>,
        rootElement
      );
    });
  }
}

registerServiceWorker();
