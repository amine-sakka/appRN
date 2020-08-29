import React ,{useState,useContext} from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
//context
import {Context as AuthContext} from '../context/AuthContext';


const SignupScreen = ({navigation}) =>{
    //loading provide 
    const {state,signup}=useContext(AuthContext);
    //loading provide 
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    return(
        <View style={styles.container}>
            
            <Spacer>
                <Text h3>Sign Up </Text>
            </Spacer>

            <Input label="Name" value={name} onChangeText={(newName)=>{setName(newName)}} 
             autoCapitalize="none" autoCorrect ={false}   />

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
                onPress={()=>{signup({name,email,password})}}/>
            </Spacer>
             
            <TouchableOpacity onPress={()=>{navigation.navigate('Signin')}}> 
                <Spacer>
                    <Text style={styles.link}>have account sign in</Text>
                </Spacer>
            </TouchableOpacity>
       
        </View>
    );
}

//hiding the header
SignupScreen.navigationOptions =()=>{

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
export default SignupScreen;