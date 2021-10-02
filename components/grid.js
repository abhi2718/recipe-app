import React from 'react';
import { Text,View,FlatList,TouchableWithoutFeedback,Platform,StyleSheet,Image,Dimensions } from 'react-native';
import {useSelector}from 'react-redux';
const Grid=props=>{
    const {meals,categories}=useSelector(state=>state.meals);
    const {height:h, width:w} = Dimensions.get('window');
    return(
        <View>
        <FlatList 
        numColumns={props.numColumns} 
        data={categories}
        renderItem={dataItem=>(
         <TouchableWithoutFeedback onPress={()=>props.navigation.navigate({
             routeName:'CategoriesMeal',
             params:{
                 categoryId:dataItem.item.id
             }
         })}>
           <View style={styles.card}>
               <Image style={{height:Platform.OS=="web"?300:h>400?h/5:h/2,maxHeight:200}} source={{uri:dataItem.item.img}} />
               <View style={{padding:10}}>
                 <Text>{dataItem.item.title}</Text>
               </View>
            </View>
         </TouchableWithoutFeedback>
         )}
        />
     </View>
    )
}

export const GridWeb=props=>{
    const {meals,categories}=useSelector(state=>state.meals);
    const {height:h, width:w} = Dimensions.get('window');
    return(
        <View>
        <FlatList 
        numColumns={props.numColumns} 
        data={categories}
        renderItem={dataItem=>(
         <TouchableWithoutFeedback onPress={()=>props.navigation.navigate({
             routeName:'CategoriesMeal',
             params:{
                 categoryId:dataItem.item.id
             }
         })}>
           <View style={styles.card}>
               <Image style={{height:Platform.OS=="web"?300:h>400?h/5:h/2,maxHeight:200}} source={{uri:dataItem.item.img}} />
               <View style={{padding:10}}>
                 <Text>{dataItem.item.title}</Text>
               </View>
            </View>
         </TouchableWithoutFeedback>
         )}
        />
     </View>
    )
}
const styles=StyleSheet.create({
    screen:{
        width:'100%',
        height:'100%',
     },
    card:{
        flex:1,
        backgroundColor:'white',
        margin:10,
        elevation:10
    },
    img:{
        width:'100%'
    }
});
export default Grid;