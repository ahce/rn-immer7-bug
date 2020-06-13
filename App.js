import React from 'react';
import {Provider} from 'react-redux';
import {enableES5} from 'immer';
// import {enableES5} from 'immer-v6';

import store from './store';
import Root from './Root';

enableES5();

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
