import React from 'react';
import { View,Platform,StyleSheet,FlatList,Text } from 'react-native';
import { useSelector } from 'react-redux';
import MealItem,{MealItemWeb} from './mealItem';
const MealList=(props)=>{
    const {favoriteMeals}=useSelector(state=>state.meals);
    const onSelect=id=>props.navigation.navigate({routeName:'MealsDetail',params:{mealId:id}})
    return(
        <View style={styles.screen}>
           {favoriteMeals.length==0?<Text style={styles.errBox} > Your's favorite list is empty </Text>:null}
           <FlatList 
           style={{width:'100%',padding:10}}
           numColumns={1} 
           data={favoriteMeals}
           renderItem={(dataItem)=>(
               <View style={{alignItems:'center'}}>
                   {
                       Platform.OS=="web"?<MealItemWeb {...dataItem.item} 
                       onSelect={onSelect}/>: 
                       <MealItem  {...dataItem.item} onSelect={onSelect}/>
                   }
               </View>
           )}
           />
        </View>
    );
}

const styles=StyleSheet.create({
          screen:{
              width:"100%",
              height:"100%",
              justifyContent:"center",
              alignItems:"center"
          },
          errBox:{
              marginTop:"50%"
          }
});
export default MealList;


