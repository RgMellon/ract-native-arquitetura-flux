import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import Routes from './routes';

import './config/ReactotronConfig';

import store from './store';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
