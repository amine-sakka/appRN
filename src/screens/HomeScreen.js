import React,{useContext,useEffect} from "react";
import {  StyleSheet, View } from "react-native";
import {Text,Input,Button} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';

//context
import {Context as DataContext} from '../context/DataContext';

//components
import SearchBar from '../components/homeScreenComponents/SearchBar';
import ListOfResult from '../components/homeScreenComponents/ListOfResult';


import Spacer from '../components/Spacer'

const HomeScreen = () => {
  //const {state,getlistOfWantedPepoles}=useContext(DataContext);
  const {state,getlistOfWantedPepoles}=useContext(DataContext);
  // running the function
  useEffect(()=>{
    getlistOfWantedPepoles('wanted');
  },[]);
  
  console.log("sakka :list of wanted");
  console.log(state.listOfWanted.data);

  return (
  <SafeAreaView  forceInset ={{top:'always'}}>
    <Spacer/>

    <SearchBar />
    <Spacer/>
    <ListOfResult resultSize={state.listOfWanted.count} data={state.listOfWanted.data} />
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

export default HomeScreen;
