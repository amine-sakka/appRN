import React ,{useContext,useEffect} from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Text,Input,Button} from 'react-native-elements';

//context
import {Context as AuthContext} from './context/AuthContext';

const loadingScreen = ()=>{

    //loading provide 
    const {localSigin,getMe}=useContext(AuthContext);
    //loading provider
    
    useEffect(()=>{
            localSigin();
            getMe();
    },[]);
    return(null);

};

export default loadingScreen;
