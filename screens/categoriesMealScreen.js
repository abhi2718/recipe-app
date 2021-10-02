import React,{useEffect} from 'react';
import { View,Platform,StyleSheet,FlatList } from 'react-native';
import {useSelector} from 'react-redux';
import MealItem,{MealItemWeb} from '../components/mealItem';
const CategoriesMealScreen=(props)=>{
    const {meals,categories}=useSelector(state=>state.meals);
    const categoryId=props.navigation.getParam('categoryId');
    const selectedCategory=meals.filter(meal=>meal.categoryIds.indexOf(categoryId)>=0)
    const onSelect=id=>props.navigation.navigate({routeName:'MealsDetail',params:{mealId:id}})
     useEffect(()=>{
         props.navigation.setParams({categories});
     },[categories])
    return(
        <View style={styles.screen}>
           <FlatList 
           style={{width:'100%',padding:10}}
           numColumns={1} 
           data={selectedCategory}
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
CategoriesMealScreen.navigationOptions=(headerData)=>{
    const categories=headerData.navigation.getParam("categories")?
          headerData.navigation.getParam("categories"):[];
    const categoryId=headerData.navigation.getParam('categoryId');
    const selectedCategory=categories.find(c=>c.id==categoryId);
    const title=selectedCategory?selectedCategory.title:"none"
    return{
        headerTitle:title,
        headerStyle:{
            backgroundColor:'white'
        }
    }
}
const styles=StyleSheet.create({
          screen:{
              width:"100%",
              height:"100%",
              justifyContent:"center",
              alignItems:"center"
          }
});
export default CategoriesMealScreen;


