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




const NewHome =()=>{

  const {state,getlistOfWantedPepoles}=useContext(DataContext);
  const {getMe}=useContext(AuthContext);

  // running the function
  useEffect(()=>{
    getlistOfWantedPepoles('wanted');
    getMe();
    
  },[]);
  

   
    return (
      <Container>
        <StatusBar barStyle='light-content' />
        <BackgrounImage source ={require('../../assets/back.jpeg')}>
          <SafeAreaView>
            <MenuBar>
              <Back>
                  <AntDesign name='arrowleft' size={24} color="#FFF" />          
              </Back>
            </MenuBar>
            <MainBody>
              <Text style={{color:"#FFF",marginLeft:10,fontWeight: 'bold',}}>Home </Text>
              <TheDivider />
            </MainBody>
            

          </SafeAreaView>
        </BackgrounImage>
        <ListContainer style={{flex:1}}>
            <Text style={{color:"#000",marginLeft:10,fontWeight: 'bold',}}>wanted </Text>
            <TheDivider />
            <FlatList 
              data={state.listOfWanted.data}
              keyExtractor={(item,index)=>{return(item.id);}}
              renderItem ={(elment,index)=>{
                
                return(
                  <Elmente key={elment}>
                    <ElmentImage  source={{uri:`http://9cddaa11fe66.ngrok.io/${elment.item.photo}`}}/>
                    <ElmentInfo>
                       <Text style={{color:"#000",marginLeft:10,fontWeight: 'bold',}}>{elment.item.name} </Text>
                       <Text style={{color:"#000",marginLeft:10,fontWeight: 'bold'}}>{elment.item.state} </Text>
                       <Text style={{color:"#000",marginLeft:10,}}>{elment.item.address} </Text>
                       
                    </ElmentInfo>
                  </Elmente>
               );
              }}
            />
        </ListContainer>
      </Container>
      
    );
  
}
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




export default NewHome;
