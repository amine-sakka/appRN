import React ,{useReducer} from 'react';
export default (reducer,actions,initialState)=>{
    //creating context automtcly
    const Context = React.createContext(); //creating context
    const Provider =( { children })=>{
        const [state, dispatch] = useReducer(reducer, initialState);
        const boundingActions ={};
        for(let key in actions){
            boundingActions[key]=actions[key](dispatch);

        };
        return(
            <Context.Provider value={{state,...boundingActions}}>
                {children}
            </Context.Provider>
        );
    }
    return({Context,Provider});
}
