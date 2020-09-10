import React,{useContext,useState} from "react";
import {  StyleSheet, View ,TouchableOpacity,ImageBackground,TextInput} from "react-native";
import {Text,Input,Button,} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';

//context
import {Context as AuthContext} from '../context/AuthContext';

//components
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AntDesign} from '@expo/vector-icons'

import Spacer from '../components/Spacer'
//animation stuff
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';



const editAccountScreen = ({navigation}) => {
  const {state,getMe,logout,uploadProfilePic,updateUser}=useContext(AuthContext);
  const currentUser =state.userMe;
  let [image,setImage] = useState(null);

  const [name,setName] = useState(state.userMe.name);
  const [email,setEmail] = useState(state.userMe.email);
  const [phoneNumber,setPhoneNumber] = useState(state.userMe.phoneNumber);
  
  const [password,setPassword] = useState("");
  console.log();
 
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
      uploadProfilePic(image);
    } catch (E) {
      console.log(E);
    }
  };

  

 
  return (
  <View style={styles.container}>
    
    <View style={{margin:20}}>
      <View style={{alignItems:'center'}}>

       <TouchableOpacity onPress={() =>{_pickImage();console.log("image");}} >
        <View style={{
            height: 100,
            width: 100,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',}}>
            
            <ImageBackground
                source={{
                  uri: `http://70c801dc1881.ngrok.io/${currentUser.photo}`,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>

            </ImageBackground>
              

          </View>
       </TouchableOpacity>
        <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>{currentUser.name}</Text>
      </View>
      <View style={styles.action}>
        <AntDesign name='user' size={24} color="#000" /> 
        <TextInput 
                    placeholder="Name"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={styles.textInput}
                    value={name}
                    onChangeText={(newData)=>{setName(newData)}}
        />
      </View>
      <View style={styles.action}>
        <AntDesign name='mail' size={24} color="#000" /> 
        <TextInput 
                    placeholder="mail"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={styles.textInput}
                    value={email}
                    onChangeText={(newData)=>{setEmail(newData)}}
        />
      </View>
      <View style={styles.action}>
        <AntDesign name='phone' size={24} color="#000" /> 
        <TextInput 
                    placeholder="phone number"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={styles.textInput}
                    value={phoneNumber}
                    onChangeText={(newData)=>{setPhoneNumber(newData)}}
        />
      </View>

    </View>
    <TouchableOpacity style={styles.commandButton} onPress={() => {updateUser({name,email,phoneNumber});getMe();navigation.navigate('Account')}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>

  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  commandButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    marginTop: 0,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    justifyContent: 'space-between'
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});

editAccountScreen.navigationOptions =()=>{
  return({
    title:"Edit Account",
  });
};

export default editAccountScreen;
