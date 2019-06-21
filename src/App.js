import './config/ReactotronConfig';

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import store from './stores';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyles />
      <Routes />
    </Fragment>
  </Provider>
);

export default App;
