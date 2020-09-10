import React from "react";
import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'


import NewHome from './src/screens/NewHome';
import Home from './src/screens/Home';
import newAcountScreen from './src/screens/newAcountScreen';
import editAccountScreen from './src/screens/editAccountScreen';
import personDeatils from './src/screens/personDeatils';
import veichleDetail from './src/screens/veichleDetail';
import searchForV from './src/screens/searchForV';
import serchedVichlesDetailes from './src/screens/serchedVichlesDetailes';

import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import {Provider as AuthProvider } from './src/context/AuthContext';
import {Provider as DataProvider } from './src/context/DataContext';

import {setNavigator} from './src/navigationRef'


import loadingScreen from './src/loadingScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AntDesign} from '@expo/vector-icons'
const switchNavigator=createSwitchNavigator ({

  loading:loadingScreen,
  loginFlow:createStackNavigator({
    //home:HomeScreen,
    Signin:Login,
    Signup:SignUp,
    
  }),
  mainFlow:createBottomTabNavigator({
    
     home:{
       screen:createStackNavigator({
        Home:Home,
        PersonDeatils:personDeatils,
        veichleDetail:veichleDetail
       },),
       navigationOptions:{
        tabBarLabel:'Home',
        tabBarIcon:() => {return <Icon size={ 20 } name={ 'home' } color={ 'black' }/>}
     },
     },
     search:{
       /*screen:searchForV,
       navigationOptions:{
        tabBarLabel:'Search',
        tabBarIcon:() => {return (  <AntDesign name='search1' size={24} color="black" />)}*/
        screen:createStackNavigator({
          search:searchForV,
          searchDetailes:serchedVichlesDetailes,
        }),
        navigationOptions:{
          tabBarLabel:'Search',
          tabBarIcon:() => {return (  <AntDesign name='search1' size={24} color="black" />)}
      },},

     
     
     AccountStuff:{
       screen:createStackNavigator({
        Account:{
          screen:newAcountScreen,
          
        },
        EditAccount:{
          screen:editAccountScreen,
          
        },
      }),
      navigationOptions:{
        tabBarLabel:"Account",
        tabBarIcon:() => {return <Icon size={ 20 } name={ 'face-profile' } color={ 'black' }/>}
      }
     },
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