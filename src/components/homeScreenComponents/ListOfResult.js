import React from 'react';
import {View,StyleSheet,TextInput,FlatList} from 'react-native';
import {Text,Input,Button,Image,TouchableOpacity} from 'react-native-elements';
import Spacer from '../Spacer';


const ResultDetails = ({data})=>{
   // console.log("item photo :" );
   // console.log(data.photo);
    return(
        
            <View style={styles.container}> 
                
                <Image source={{uri:`http://f79768341244.ngrok.io/uploads/persons/${data.photo}`}} style={{width: 100, height: 100}} />
                <Spacer />
                <Text>{data.name}</Text>
                
            </View>
        
        
        
    )
}
const ListOfResult = (props) =>{
    return(     
        <View style ={styles.background} >
            <Text style={styles.title}>count :{props.resultSize}</Text>
            <Spacer />
            <FlatList 
                data={props.data}
                keyExtractor={item=>item._id}
                renderItem ={( { item } )=>{
                    return(
                        <Spacer>
                            <ResultDetails data={item}/>
                        </Spacer>
                    
                    )
                }}
            />
        </View>
    );
}

;

const styles =StyleSheet.create({

    title :{
        fontSize:18,
        fontWeight:'bold',
    },
    container :{
        flexDirection: 'row',
    }
});
 
export default ListOfResult;