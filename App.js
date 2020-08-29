import React from "react";
import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import HomeScreen from "./src/screens/HomeScreen";
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';

import {Provider as AuthProvider } from './src/context/AuthContext';

import {setNavigator} from './src/navigationRef'

const switchNavigator=createSwitchNavigator ({
  loginFlow:createStackNavigator({
    Signin:SigninScreen,
    Signup:SignupScreen,
    
  }),
  mainFlow:createBottomTabNavigator({
     home:HomeScreen
  })

});



const AppNav = createAppContainer(switchNavigator);
//export default appNav;


export default()=>{
  return(
  <AuthProvider> 
    <AppNav  ref ={(navigator)=>{setNavigator(navigator)}}/>
  </AuthProvider>);
}