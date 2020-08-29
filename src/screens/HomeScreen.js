import React from "react";
import {  StyleSheet, View } from "react-native";
import {Text,Input,Button} from 'react-native-elements';
const HomeScreen = () => {
  return (
  <View  style={styles.container}>
    <Text h3 >HomeScreen</Text>
  </View>
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
