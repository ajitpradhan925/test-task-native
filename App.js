import React from 'react';
import {Provider} from 'react-redux';
import Tabs from './src/navigations/Tabs';
import store from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <Tabs />
    </Provider>
  );
};

export default App;
