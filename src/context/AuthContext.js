import createDataContext from './createDataContext';
import backend from '../api/backend';
import {AsyncStorage} from 'react-native';

import {navigate} from '../navigationRef';

const authReducer =(state,action)=>{

    switch(action.type){
        case "signup_error":
            return({...state,errorMessage:action.payload}); // overiding the errorMessage with the payload
        case 'signup':
            return({...state,token:action.payload});
        
        case 'signin':
            return({...state,token:action.payload});
        case 'sigin_error':
            return({...state,errorMessage:action.payload});
        default:
            return(state);
    };
};

const signup = (dispatch)=>{

    return(
        async  ({name,email,password})=>{
       
        try {
            // api/register requesst 
            const response =await backend.post('/api/v1/auth/register',{name,email,password});
            console.log("succ");
            console.log(response.data); 

            //storing the token in storage
            await AsyncStorage.setItem('token',response.data.token);
            
            //update state authenticate 
            dispatch({type:"signup",payload:response.data.token});

            //navigate to main flow 
            navigate('home');
              
        } catch (error) {
            //fail return error msg            
            console.log(error.response);
            dispatch({type:"signup_error",payload:"err msg"})
        }
            
       
        }
    );
}


const signin = (dispatch)=>{

    return(
        async ({email,password})=>{
            try {
                // api/logIn requesst 
                const response =await backend.post('/api/v1/auth/login',{email,password});
                console.log("succ");
                console.log(response.data); 

                //storing the token in storage
                await AsyncStorage.setItem('token',response.data.token);

                //update state authenticate 
                dispatch({type:"signin",payload:response.data.token});

                //navigate to main flow 
                navigate('home');
            } catch (error) {

            //fail return error msg 
            console.log(error.response);
            dispatch({type:"sigin_error",payload:"err msg"})
            }
        }
    );
}

const logout = (dispatch)=>{

    return(
        ({email,password})=>{
            // api/logOut requesst 

            //update state authenticate 

            //fail return error msg 
        }
    );
}

export const {Context,Provider} = createDataContext(
    authReducer,
    {signin,signup,logout},
    {token:null,errorMessage:''}
);