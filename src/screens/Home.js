
import React,{useContext,useEffect} from "react";
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import {data} from '../../model/data';
import Card from '../components/Card';
import {withNavigation} from 'react-navigation';
import Spacer from '../components/Spacer';
import {Context as DataContext} from '../context/DataContext';
import {Context as AuthContext} from '../context/AuthContext';

const CardListScreen = ({navigation}) => {

    const {state,getlistOfWantedPepoles}=useContext(DataContext);
    const {getMe}=useContext(AuthContext);
  
    // running the function
    useEffect(()=>{
      getlistOfWantedPepoles('wanted');
      getMe();
      
    },[]);
    console.log(state.listOfWanted.data);
    const renderItem = ({item}) => {
        return (
            <Card 
                itemData={item}
                onPress={()=> navigation.navigate('PersonDeatils', {"itemData": item})}
            />
        );
    };

    return (
      <View style={styles.container}>
          <Spacer/>
        <FlatList 
            data={state.listOfWanted.data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
      </View>
    );
};

export default CardListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '90%',
    alignSelf: 'center'
  },
});