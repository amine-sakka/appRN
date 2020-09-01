import React from "react";
import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import HomeScreen from "./src/screens/HomeScreen";
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';

import {Provider as AuthProvider } from './src/context/AuthContext';
import {Provider as DataProvider } from './src/context/DataContext';

import {setNavigator} from './src/navigationRef'


import loadingScreen from './src/loadingScreen';

const switchNavigator=createSwitchNavigator ({

  loading:loadingScreen,
  loginFlow:createStackNavigator({
    //home:HomeScreen,
    Signin:SigninScreen,
    Signup:SignupScreen,
    
  }),
  mainFlow:createBottomTabNavigator({
     home:HomeScreen,
     Account:AccountScreen,
  })

});



const AppNav = createAppContainer(switchNavigator);
//export default appNav;


export default()=>{
  return(
  <AuthProvider> 
    <DataProvider>
      <AppNav  ref ={(navigator)=>{setNavigator(navigator)}}/>
    </DataProvider>
   
  </AuthProvider>);
}