import React from 'react';
import { StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './auth/Login'
import Register from './auth/Register'
import  Logout  from './auth/Logout';
import Home from './Home'

const RootStack = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    Logout:Logout,
    Home:Home
    
  },
  {
    initialRouteName: 'Home',
  }
);
const AppContainer = createAppContainer(RootStack);
export default class TabBar extends React.Component {
  render() {
    return <AppContainer />;
  }
}
