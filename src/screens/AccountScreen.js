import React,{useContext,useEffect} from "react";


import {  StyleSheet, View } from "react-native";
import {Text,Input,Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {SafeAreaView} from 'react-navigation';

import {Context as AuthContext} from '../context/AuthContext';


const AccountScreen = () => {

  const {state,getMe,logout}=useContext(AuthContext);
  const currentUser =state.userMe;
  useEffect(()=>{
    getMe();
  },[]);
  console.log("me :" );console.log(currentUser);
  return (
  <SafeAreaView  forceInset ={{top:'always'}}>
    <Text h3 >AccountScreen</Text>
    
    
    <Spacer>
        <Button title='logOut' onPress ={()=>{logout()}} />
    </Spacer>
    
  </SafeAreaView>
  );
};

const styles =StyleSheet.create({
  container:{
      //borderColor: 'red',
      //borderWidth :10,
      flex:1,
      justifyContent:'center',
  }
});

export default AccountScreen;
