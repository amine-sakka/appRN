import React from "react";
import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'


import NewHome from './src/screens/NewHome';
import newAcountScreen from './src/screens/newAcountScreen';
import editAccountScreen from './src/screens/editAccountScreen';


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
     //Account:newAcountScreen,
     AccountStuff:createStackNavigator({
       Account:newAcountScreen,
       EditAccount:editAccountScreen,
     }),
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