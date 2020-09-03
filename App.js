import React from "react";
import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import HomeScreen from "./src/screens/HomeScreen";
import AccountScreen from './src/screens/AccountScreen';
import NewHome from './src/screens/NewHome';


import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import {Provider as AuthProvider } from './src/context/AuthContext';
import {Provider as DataProvider } from './src/context/DataContext';

import {setNavigator} from './src/navigationRef'


import loadingScreen from './src/loadingScreen';

const switchNavigator=createSwitchNavigator ({

  loading:loadingScreen,
  loginFlow:createStackNavigator({
    //home:HomeScreen,
    Signin:Login,
    Signup:SignUp,
    
  }),
  mainFlow:createBottomTabNavigator({
     home:NewHome,
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