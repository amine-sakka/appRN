import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
//using vector icons for icons
import  { Feather} from '@expo/vector-icons';
//using vector icons for icons

const SearchBar = () =>{
    return(     
        <View style ={styles.background} >
            <Feather name='search' style ={styles.searchIcon}/>
            <TextInput placeholder ='search' style={styles.inputStyle}/>
        </View>
    );
}
 
const styles =StyleSheet.create({
    background:{
        backgroundColor: '#F0EEEE', 
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection: 'row',
    },
    inputStyle :{
        borderColor:'black',
        borderWidth : 1,
        //take all the space y can take 
        flex:1,
        fontSize:20,
    },
    searchIcon :{
       fontSize:36,
       alignSelf:'center',
    },
});
 
export default SearchBar;