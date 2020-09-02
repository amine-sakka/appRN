import React ,{useState,useContext} from 'react';
import {View,StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import Inputs from '../components/AuthsScreensComponets/Inputs';
import Submit from '../components/AuthsScreensComponets/Submit';
//context
import {Context as AuthContext} from '../context/AuthContext';

const SignUp = ({navigation}) =>{
     //loading provide 
    const {state,signup}=useContext(AuthContext);
    //loading provide 
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    //console.log("email :");console.log(email);
    //console.log("password :");console.log(password);
    return(
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={styles.container}>
                <Image source={require('../../assets/c1.jpg')}  resizeMode="center" style={styles.image} />
                <Text style={styles.textTitle}>Let's Get Started</Text>
                <Text style={styles.textBody}>Create an account</Text>
                <Spacer/>
                <Inputs name="Name" icon="beer" data={name} onChange={(newName)=>{setName(newName)}}/>
                <Spacer/>
                <Inputs name="Email" icon="user" data={email} onChange={(newEmail)=>{setEmail(newEmail)}}/>
                <Spacer/>
                <Inputs name="Password" icon="lock" pass={true} data={password}  onChange={(newPassword)=>{setPassword(newPassword)}}/>
                <Spacer/>
                <Submit title="SIGN UP" color="#0148a4"  onClik={()=>{console.log("cliked");signup({name,email,password})}}/>
                <TouchableOpacity onPress={()=>{navigation.navigate('Signin')}}> 
                <Spacer>
                    <Text style={styles.link}>Have account ! sign in</Text>
                </Spacer>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}


//hiding the header
SignUp.navigationOptions =()=>{
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

export default SignUp;