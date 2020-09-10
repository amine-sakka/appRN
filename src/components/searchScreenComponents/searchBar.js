
import React,{useContext,useEffect} from "react";
import { View, Text, Button, FlatList, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import {data} from '../../model/data';
import Card from '../components/Card';
import {withNavigation} from 'react-navigation';
import Spacer from '../components/Spacer';
import {Context as DataContext} from '../context/DataContext';
import {Context as AuthContext} from '../context/AuthContext';
import {SafeAreaView} from 'react-navigation';
import {AntDesign} from '@expo/vector-icons'

const searchBar = (props) => {

    console.log("shit");
    console.log(props.term);
    return (
     
          <View style={styles.container}>
            
            <AntDesign name='search1'  color="black"  style={styles.IconsStyle}/>
            <TextInput  style={styles.Input} 
            placeholder="search"
            value={props.term}
            onChangeText={(newTerm)=>{props.onTermChange(newTerm);}}/>
            <TouchableOpacity style={styles.IconsStyle}>
                <AntDesign name='camera' size={24} color="black"  />
            </TouchableOpacity>
            
          </View>
          
     
    );
};

export default searchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    backgroundColor:"#F0EEEE",
    height:50,
    borderRadius:5,
    marginHorizontal:15

  },
  Input :{
     
      flex: 1,
  },
  IconsStyle:{
      fontSize:25,
      alignSelf:"center",
      marginHorizontal:15,
  }
});