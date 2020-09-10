import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,FlatList} from 'react-native';
import Spacer from '../Spacer';
import Card from './CardResult';


const ResultList = ({searchResult,searchTerm,navigation}) => {
    console.log("search shitttttt");console.log(searchResult);
    const renderItem = ({item}) => {
        return (
            <Card 
            
                itemData={item}
                onPress={()=> navigation.navigate('searchDetailes', {"itemData": item})}
            />
        );
    };
    if (searchResult.count >0) {
        return (
            <View>
                <Text>{searchResult.count} result found </Text>
                <Spacer />
                <View style={styles.container}>
                    <Spacer/>
                    <FlatList 
                        data={searchResult.data}
                        renderItem={renderItem}
                        keyExtractor={item => item._id}
                    />
                </View>
            </View>
          );
    } else {
        return (
            <View>
                <Text>no result found</Text>
            </View>
          );
    }
 
};

export default ResultList;

const styles = StyleSheet.create({
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
