import createDataContext from './createDataContext';
import backend from '../api/backend';
import {AsyncStorage} from 'react-native';

import {navigate} from '../navigationRef';
import axios from 'axios';



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
        case 'logout':
            return({token:null});
        case 'getMe':
            //console.log("look here");
            //console.log(action.payload);
            return({...state,userMe:action.payload});
        case 'uploadProfilePic':
            return({...state,userMe:action.payload});
        case 'updateUser':
            return({...state,userMe:action.payload});
        default:
            return(state);
    };
};

const localSigin = (dispatch)=>{
    return (
        async () =>{
            const token = await AsyncStorage.getItem('token');
            if (token) {
                dispatch ({type:'signin',payload:token})
                //navigate to main flow 
                navigate('home');
            } else {
                //navigate to login flow 
                navigate('loginFlow');
            }
        }
    );
}

const signup = (dispatch)=>{

    return(
        async  ({name,email,password})=>{
       
        try {
            // api/register requesst 
            const response =await backend.post ('/api/v1/auth/register',{name,email,password});
            /*console.log("succ");
            console.log(response.data); */

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
        async () => {
            // api/logOut requesst 
            await AsyncStorage.removeItem('token');
            navigate('loginFlow');
            
            dispatch({type:'logout'})
            
            //navigate to login flow 
            
            //fail return error msg 
        }
    );
}

const getMe = (dispatch)=>{

    return(
        async ()=>{
            try {
                //get token from storage
                const token = await AsyncStorage.getItem('token');
                // api/logIn requesst 
                const response =await backend.get('/api/v1/auth/me',{
                    headers: {'Content-Type': 'application/json','Authorization':`Bearer ${token}`}
                });
                console.log("sakka look at user");
                console.log(response.data.data._id); 
                
                await AsyncStorage.setItem('currentUserId',response.data.data._id); 
                //update state authenticate 
                dispatch({type:"getMe",payload:response.data.data});
               
            
            } catch (error) {

            //fail return error msg 
            console.log(error.response);
            }
        }
    );
}

const uploadProfilePic = (dispatch)=>{

    return(
        async (image)=>{
            
                try {
                    const token = await AsyncStorage.getItem('token');
                    //get current User Id from storage
                    const currentUserId = await AsyncStorage.getItem('currentUserId');
                    //geting the image
                    const data = new FormData();
                
                    data. append('file', {
                        uri: image.uri,
                        type: 'image/jpeg', // <-- this
                        name: 'image.jpg',
                    });

                    //sending the request to upload the image
                    const response =await backend.put(`/api/v1/users/${currentUserId}/photo`,data,{
                        headers: {'Content-Type': 'application/json','Authorization':`Bearer ${token}`}
                    });
                    console.log("succ uploading the profile image ");
                    console.log(response.data.data);
                    dispatch({type:"uploadProfilePic",payload:response.data.data});

                } catch (error) {
                    console.log(error);

                }

           
            
            }
        
    );
}
const updateUser = (dispatch)=>{

    return(
        async ({name,email,phoneNumber})=>{
            try {
                console.log('phone /')
                console.log();
                //get token from storage
                const token = await AsyncStorage.getItem('token');
                //get current User Id from storage
                const currentUserId = await AsyncStorage.getItem('currentUserId');
                // api/update requesst 
                const response =await backend.put(`/api/v1/auth/updatedetails`,{"name":name,"email":email,"phoneNumber":phoneNumber},{
                    headers: {'Content-Type': 'application/json','Authorization':`Bearer ${token}`}
                });
                console.log("sakka look at user");
                console.log(response.data.data._id); 
                
               
                //update state authenticate 
                dispatch({type:"updateUser",payload:response.data.data});
               
            
            } catch (error) {

            //fail return error msg 
            console.log(error.response);
            }
        }
    );
}
export const {Context,Provider} = createDataContext(
    authReducer,
    {signin,signup,logout,localSigin,getMe,uploadProfilePic,updateUser},
    {token:null,errorMessage:'',userMe:{}}
);