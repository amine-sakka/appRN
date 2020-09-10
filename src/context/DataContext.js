import createDataContext from './createDataContext';
import backend from '../api/backend';
import {AsyncStorage} from 'react-native';

import {navigate} from '../navigationRef';

const dataReducer =(state,action)=>{
    switch (action.type) {
        case 'getlistOfWantedPepoles':
            return({...state,listOfWanted:action.payload})
        case 'getPersonVechiles':
            return({...state,personVeichles:action.payload})
        case 'searchForVeichles':
            return({...state,searchResult:action.payload})
        default:
            return(state);
    }
};
const searchForPlate = (dispatch)=>{
    return (
        async () =>{
           //search for plate Number

            //update state vlaue search

           //get the search value

           //make request 

           //navigate to result screen

           //handiling error
        }
    );
}

//persons operations
const getPersons = (dispatch)=>{
    return (
        async () =>{
           //search for plate Number

            //update state vlaue search

           //get the search value

           //make request 

           //navigate to result screen

           //handiling error
        }
    );
}
const getPerson = (dispatch)=>{
    return (
        async () =>{
           //search for plate Number

            //update state vlaue search

           //get the search value

           //make request 

           //navigate to result screen

           //handiling error
        }
    );
}

const getVechilesOfPerson = (dispatch)=>{
    return (
        async () =>{
           //search for plate Number

            //update state vlaue search

           //get the search value

           //make request 

           //navigate to result screen

           //handiling error
        }
    );
}
const getCrimesOfPerson = (dispatch)=>{
    return (
        async () =>{
           //search for plate Number

            //update state vlaue search

           //get the search value

           //make request 

           //navigate to result screen

           //handiling error
        }
    );
}


const getlistOfWantedPepoles = (dispatch)=>{
    return (
        async (satuts) =>{
            try {
                //get token from storage
                const token = await AsyncStorage.getItem('token');
                //make request 
                const response =await backend.get(`/api/v1/persons?state=${satuts}`,{
                    headers: {'Content-Type': 'application/jsonvalue','Authorization':`Bearer ${token}`}
                });
                /*console.log("succ");
                console.log(response.data); */
                //update state vlaue 
                dispatch({type:"getlistOfWantedPepoles",payload:response.data});
                // retunr state of all wanted plates
            } catch (error) {
                //handiling error
            }
        }
    );
}

const getPersonVechiles = (dispatch)=>{
    return (
        async (personId) =>{
            try {
                //get token from storage
                const token = await AsyncStorage.getItem('token');
                //make request 
                const response =await backend.get(`/api/v1/persons/${personId}/vehicles`,{
                    headers: {'Content-Type': 'application/jsonvalue','Authorization':`Bearer ${token}`}
                });
                /*console.log("succ");
                console.log(response.data); */
                //update state vlaue 
                dispatch({type:"getPersonVechiles",payload:response.data});
                // retunr state of all wanted plates
            } catch (error) {
                //handiling error
            }
        }
    );
}


const searchForVeichles = (dispatch)=>{
    return (
        async (plateNb) =>{
            try {
                //get token from storage
                const token = await AsyncStorage.getItem('token');
                //make request 
                const response =await backend.get(`/api/v1/vehicles?plateNumber=169tn9685`,{
                    headers: {'Content-Type': 'application/jsonvalue','Authorization':`Bearer ${token}`}
                });
                /*console.log("succ");
                console.log(response.data); */
                //update state vlaue 
                dispatch({type:"searchForVeichles",payload:response.data});
                // retunr state of all wanted plates
            } catch (error) {
                //handiling error
            }
        }
    );
};
const searchForVeichlesWithImage = (dispatch)=>{
    return (
        async (image) =>{
            try {
                //get token from storage
                const token = await AsyncStorage.getItem('token');
                //geting the image
                const data = new FormData();
                
                    data. append('file', {
                        uri: image.uri,
                        type: 'image/jpeg', // <-- this
                        name: 'image.jpg',
                    });


                //make request 
                const response =await backend.post(`/api/v1/vehicles/findByPhoto`,data,{
                    headers: {'Content-Type': 'application/jsonvalue','Authorization':`Bearer ${token}`}
                });
                console.log("succ image search");
                console.log(response.data); 
                //update state vlaue 
                dispatch({type:"searchForVeichles",payload:response.data});
                // retunr state of all wanted plates
            } catch (error) {
                console.log('error image upload search')
                //handiling error
            }
        }
    );
}





export const {Context,Provider} = createDataContext(
    dataReducer,
    {getlistOfWantedPepoles,getPersonVechiles,searchForVeichles,searchForVeichlesWithImage},
    {search:"",listOfWanted:[{_id:0}],personVeichles:[],searchResult:[]}
);