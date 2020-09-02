import React ,{useState,useContext} from 'react';
import {View,StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import Inputs from '../components/AuthsScreensComponets/Inputs';
import Submit from '../components/AuthsScreensComponets/Submit';
//context
import {Context as AuthContext} from '../context/AuthContext';

const Login = ({navigation}) =>{
    const {state,signin}=useContext(AuthContext);
     //loading provide 
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    //console.log("email :");console.log(email);
    //console.log("password :");console.log(password);
    return(
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={styles.container}>
                <Image source={require('../../assets/uiux.png')}  resizeMode="center" style={styles.image} />
                
                <Text style={styles.textTitle}>Welcome </Text>
                <Text style={styles.textBody}>Log in to your account</Text>
                <Spacer/>
                <Inputs name="Email" icon="user" data={email} onChange={(newEmail)=>{setEmail(newEmail)}}/>
                <Spacer/>
                <Inputs name="Password" icon="lock" pass={true} data={password}  onChange={(newPassword)=>{setPassword(newPassword)}}/>
                <Spacer/>
                <Submit title="LOG IN" color="#0148a4"  onClik={()=>{console.log("cliked");signin({email,password})}}/>
                <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}}> 
                <Spacer>
                    <Text style={styles.link}>don't have account ! sign Up</Text>
                </Spacer>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}


//hiding the header
Login.navigationOptions =()=>{
    return({
        header:null,
    });
};

const styles =StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    link :{
        color :'blue', 
    },
    image :{
        width: 400,
        height: 200,
        marginVertical: 10
    },
    textTitle: {
        fontSize: 40,
        marginVertical: 10,
    },
    textBody: {
       
        fontSize: 16
    }
});

export default Login;