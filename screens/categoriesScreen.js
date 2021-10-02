import React,{useState,useEffect} from 'react';
import {Platform,Dimensions} from 'react-native';
import Grid from '../components/grid';
import {GridWeb} from '../components/grid';
import { Ionicons } from '@expo/vector-icons';
const CategoriesScreen=(props)=>{
    const {height, width} = Dimensions.get('window');
    const [h,setDeviceHeight]=useState(height);
    const [w,setDeviceWidth]=useState(width);
   
    useEffect(()=>{
        const updateLayout=()=>{
            setDeviceHeight(Dimensions.get('window').height);
            setDeviceWidth(Dimensions.get('window').width);
      }
        Dimensions.addEventListener('change',updateLayout);
        // cleanup function which will run right before use effect run
        return ()=>{
            Dimensions.removeEventListener('change',updateLayout)
        }
    },[])
   
        if(Platform.OS==="web"){
            if(w>600){
                return(
                    <GridWeb numColumns={4} {...props} />
                 )
            }else{
                return(
                    <Grid numColumns={2} {...props}/>
                 )
            }
           
        }else{
            return(
                <Grid numColumns={2} {...props}/>
             )
        }
    }
   CategoriesScreen.navigationOptions=headerData=>{
       return{
        headerLeft:()=>(
            <Ionicons 
               name='ios-menu'
               color="black"
               size={25}
               onPress={()=>headerData.navigation.toggleDrawer()}
            />
          )
       }
   }
export default CategoriesScreen;


