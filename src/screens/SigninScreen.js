import React ,{useState,useContext} from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
//context
import {Context as AuthContext} from '../context/AuthContext';

const SigninScreen = ({navigation}) =>{
     //loading provide 
    const {state,signin}=useContext(AuthContext);
     //loading provide 
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    
    return(
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign In </Text>
            </Spacer>
            <Input label="Email" value={email} onChangeText={(newEmail)=>{setEmail(newEmail)}} 
             autoCapitalize="none" autoCorrect ={false}   />
            
            
            <Input  secureTextEntry label="password" value={password} 
            onChangeText={(newPassword)=>{setPassword(newPassword)}} 
            autoCapitalize="none" autoCorrect ={false} />
            {state.errorMessage ?(
             <Text>{state.errorMessage }</Text>   
            ):null} 
            
            <Spacer>
                <Button title ="Sign up" 
                onPress={()=>{signin({email,password})}}/>
            </Spacer>

            <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}}> 
                <Spacer>
                    <Text style={styles.link}>don t have account ! sign Up</Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    );
}


//hiding the header
SigninScreen.navigationOptions =()=>{
    return({
        header:null,
    });
};

const styles =StyleSheet.create({
    container:{
        //borderColor: 'red',
        borderWidth :10,
        flex:1,
        justifyContent:'center',
    },
    link :{
        color :'blue', 
    },
});

export default SigninScreen;