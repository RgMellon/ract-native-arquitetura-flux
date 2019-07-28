import React from 'react';

import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './Pages/Main';
import Cart from './Pages/Cart';

import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
    }
  )
);

export default Routes;
