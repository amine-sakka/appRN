import {NavigationActions} from 'react-navigation' ;

let navigator;

export const setNavigator = (nav)=>{
    navigator = nav ;
};

export const navigate =(routeName,params)=>{
    // using internel context of react for navigation 
    navigator.dispatch(
        NavigationActions.navigate({
            routeName:routeName,
            params:params,
        })
    );

};