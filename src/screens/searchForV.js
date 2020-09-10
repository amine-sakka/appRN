
import React,{useContext,useEffect,useState} from "react";
import { View, Text, Button, FlatList, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import {data} from '../../model/data';
import Card from '../components/Card';
import {withNavigation} from 'react-navigation';
import Spacer from '../components/Spacer';
import {Context as DataContext} from '../context/DataContext';
import {Context as AuthContext} from '../context/AuthContext';
import {SafeAreaView} from 'react-navigation';
import {AntDesign} from '@expo/vector-icons'
import ResultList from '../components/searchScreenComponents/ResultList';

//search with image stuff
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const searchForV = ({navigation}) => {
    const {state,searchForVeichles,searchForVeichlesWithImage}=useContext(DataContext);
    const [searchTerm,setSearchTerm]=useState('');
    
    // search with image stuff
    let [image,setImage] = useState(null);


  getPermissionAsync = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      
      if (!result.cancelled) {
        setImage(image=result);
        
      }

      console.log(image);
      searchForVeichlesWithImage(image);
    } catch (E) {
      console.log(E);
    }
  };

  
    const searchResult=state.searchResult;
    console.log("shit look here");console.log(searchResult);
    
    
    //console.log("searchTerm");
    return (
      <SafeAreaView >
          <Spacer /><Spacer />
          <View style={styles.container}>
            
            <AntDesign name='search1'  color="black"  style={styles.IconsStyle}/>
            <TextInput  style={styles.Input} 
            placeholder="search"
            value={searchTerm}
            onChangeText={(newTerm)=>{setSearchTerm(newTerm);}}
            onEndEditing={()=>{console.log("submit the shit ");searchForVeichles(searchTerm)}}
            />
            <TouchableOpacity style={styles.IconsStyle} 
              onPress ={()=>{console.log('pressed');_pickImage()}}  
              >
                <AntDesign name='camera' size={24} color="black"  />
            </TouchableOpacity>
            
          </View>
          
          <ResultList searchResult={searchResult} searchTerm={searchTerm} navigation={navigation}/>
      </SafeAreaView>
    );
};

searchForV.navigationOptions =()=>{
  return({
      header:null,
  });
};
export default searchForV;

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