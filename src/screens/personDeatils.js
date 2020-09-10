
import React,{useContext,useEffect} from "react";
import {
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import * as Icon from "react-native-vector-icons";
import  styled from 'styled-components';
import {AntDesign} from '@expo/vector-icons'

//context
import {Context as DataContext} from '../context/DataContext';
import {Context as AuthContext} from '../context/AuthContext';

import Spacer from '../components/Spacer'
import {Divider} from "react-native-elements";
//import {FlatList} from "react-native-gesture-handler";


const { width, height } = Dimensions.get("screen");




const personDeatils = ({navigation}) => {

  const {state,getPersonVechiles}=useContext(DataContext);
  const itemData = navigation.getParam('itemData'); 

     // running the function
  useEffect(()=>{
    getPersonVechiles(itemData._id)
      
  },[]);

  const vechiles=state.personVeichles;
  console.log('vech');console.log(vechiles);
  return (
    <Container>
      <StatusBar barStyle='light-content' />
      <BackgrounImage source ={{uri:`http://72770f1cda17.ngrok.io/${itemData.photo}`}} >
        <SafeAreaView>
          <MenuBar>
           
          </MenuBar>
          <MainBody>
            <Text style={{color:"#FFF",marginLeft:10,fontWeight: 'bold',}}>{itemData.name} </Text>
            <TheDivider />
          </MainBody>
          

        </SafeAreaView>
      </BackgrounImage>
      <ListContainer style={{flex:1}}>
            <Text style={{color:"#000",marginLeft:10,fontWeight: 'bold',}}>vehicles {vechiles.count} </Text>
            <TheDivider />
            <FlatList 
              data={vechiles.data}
              keyExtractor={(item,index)=>{return(item._id);}}
              renderItem ={(elment,index)=>{
                
                return(
                  <TouchableOpacity  onPress={()=> navigation.navigate('veichleDetail', {"itemData": elment})}>
                  <Elmente key={elment}>
                    <ElmentImage  source={{uri:`http://72770f1cda17.ngrok.io/${elment.item.photo}`}}/>
                    <ElmentInfo>
                       <Text style={{color:"#000",marginLeft:10,fontWeight: 'bold',}}>{elment.item.plateNumber} </Text>
                       <Text style={{color:"#000",marginLeft:10,fontWeight: 'bold'}}>{elment.item.model} </Text>
                       <Text style={{color:"#000",marginLeft:10,}}>{elment.item.color} </Text>
                       
                    </ElmentInfo>
                  </Elmente>
                  </TouchableOpacity>
               );
              }}
            />
          
           
        </ListContainer>
        
     
    </Container>
    
  );
};
personDeatils.navigationOptions =()=>{
  return({
    title:"Person details",
  });
};

export default personDeatils;

const Container = styled.View `
  flex  :1;
  background-color :#FFF
`;



const BackgrounImage = styled.ImageBackground `
  width : 100%;
`;
const MenuBar = styled.View `
  flex-direction:row;
  justify-content:space-between;
  padding :16px
`;

const Back =styled.View `
flex-direction:row;
align-items:center;
padding :16px;
`;

const TheDivider =styled.View `
  border-bottom-color :#FFF;
  border-bottom-width: 2px;
  width :150px;
  margin:8px 0;
`;

const MainBody =styled.View `
padding: 0 32px;
margin: 200px 0 32px 0;
`;

const ListContainer =styled.View`
  margin-top :-20px;
  padding:32px;
  background-color:#fff;
  border-top-left-radius:24px
  border-top-right-radius:24px
`;

//recipes <=> list of recipies 
const ElmentList =styled.View `
margin-top :16px;
`;

//elment <=>recpie
const Elmente =styled.View `
flex-direction:row;
align-items:center;
margin-bottom :16px;
`;

//image
const ElmentImage =styled.Image `
width:80px;
height:80px;
border-radius:10px;
`;
//info
const ElmentInfo =styled.View `
flex:1;
`;

