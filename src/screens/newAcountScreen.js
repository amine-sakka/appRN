import React,{useContext,useEffect} from "react";


import {  StyleSheet, View } from "react-native";
import {Input,Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {SafeAreaView} from 'react-navigation';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AntDesign} from '@expo/vector-icons'


import {Context as AuthContext} from '../context/AuthContext';


const newAcountScreen = ({navigation}) => {

  const {state,getMe,logout}=useContext(AuthContext);
  const currentUser =state.userMe;
 
  console.log("me :" );console.log(currentUser);
  return (
   <SafeAreaView style={styles.container}>
        
     
       <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image 
                    source ={{
                        uri :`http://839ce8c3613c.ngrok.io/${state.userMe.photo}`
                        
                    }}
                    size={150}
                />
                <View style={{marginLeft: 20}}>
                  <Title style={[styles.title, { marginTop:15,marginBottom: 1,}]}>{currentUser.name}</Title>
                  <Caption style={styles.caption}>@{currentUser.role}</Caption>
                </View>
            </View>
       </View>
        

       <View style={styles.userInfoSection}> 


            <View style={styles.row}>
              <Icon name="phone" color="#000" size={20}/>
                  <Text style={{color:"#000", marginLeft: 20}}>{currentUser.phoneNumber}</Text>
           </View>

           <View style={styles.row}>
              <Icon name="email" color="#000" size={20}/>
              <Text style={{color:"#000", marginLeft: 20}}>{currentUser.email}</Text>
          </View>

       </View>

       <View style={styles.menuWrapper ,{justifyContent: 'space-between'}}>
         
        <TouchableRipple onPress={() => {navigation.navigate('EditAccount')}}>
            <View style={styles.menuItem}>
            <AntDesign name='edit' size={24} color="#000" /> 
              <Text style={styles.menuItemText}>Edit profile</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="account-check-outline" color="#000" size={25}/>
              <Text style={styles.menuItemText}>Support</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="settings-outline" color="#000" size={25}/>
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple>

          <TouchableRipple onPress={() => {logout()}}>
            <View style={styles.menuItem}>
            <AntDesign name='logout' size={24} color="#000" /> 
              <Text style={styles.menuItemText}>Logout</Text>
            </View>
          </TouchableRipple>
      </View>

   </SafeAreaView>
   
  );
};

newAcountScreen.navigationOptions =()=>{
  return({
      header:null,
  });
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      
      flexDirection: 'row',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#000',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
  });

export default newAcountScreen;
