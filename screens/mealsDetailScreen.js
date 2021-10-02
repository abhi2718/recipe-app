import React,{useEffect} from 'react';
import { ScrollView,View,Text,StyleSheet,Image,Alert } from 'react-native';
import { useSelector,useDispatch} from 'react-redux';
import HeaderBtn from '../components/headerBtn';
import toggleFav from '../store/actions/addFav';
const MealsDetailScreen=(props)=>{
    const {meals,favoriteMeals}=useSelector(state=>state.meals);
    const mealId=props.navigation.getParam('mealId');
    const selectedMeal=meals.find(meal=>meal.id==mealId);
    const dispatch=useDispatch();
    useEffect(()=>{
        let isSelectedMealExist=id=>favoriteMeals.some(meal=>meal.id==id);
        const addInFav=id=>dispatch(toggleFav(id));
        props.navigation.setParams({mealsArr:meals,addInFav,isSelectedMealExist});
    },[meals,dispatch,favoriteMeals])
    return(
        <ScrollView>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.img} />
            <View style={styles.details}>
                <Text>{selectedMeal.duration}m</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
             <Text style={styles.title}>Ingredients</Text>
              {
                  selectedMeal.ingredients.map(ingredient=>(<Text key={ingredient} style={styles.listItem}>
                      {ingredient}
                  </Text>))
              }
             <Text style={styles.title}>Steps</Text>
             {
                  selectedMeal.steps.map(step=>(<Text key={step} style={styles.listItem}>
                      {step}
                  </Text>))
              }
        </ScrollView>
       
    );
}
MealsDetailScreen.navigationOptions=(headerOption)=>{
        const addFavorite=headerOption.navigation.getParam("addInFav")?
        headerOption.navigation.getParam("addInFav"):id=>alert(id);
        const mealId=headerOption.navigation.getParam('mealId');
        const meals=headerOption.navigation.getParam("mealsArr")?
        headerOption.navigation.getParam("mealsArr"):[];
        const isSelectedMealExist=headerOption.navigation.getParam("isSelectedMealExist")?
        headerOption.navigation.getParam("isSelectedMealExist"):()=>false;
        const selectedMeal=meals.find(meal=>meal.id==mealId);
        const title=selectedMeal?selectedMeal.title:"No Title";
         return{
             headerTitle:title,
             headerStyle:{
                   backgroundColor:'white'
             },
             headerTintColor:"black",
             headerRight:()=>(
                 <HeaderBtn
                 addFavorite={addFavorite}
                  mealId={mealId}
                  isSelectedMealExist={isSelectedMealExist}
                />
             ),  
         }
}
const styles=StyleSheet.create({
         
          details:{
            flexDirection:'row',
            padding:15,
            justifyContent:'space-around',
          },
          img:{
              width:'100%',
              height:200
          },
          title:{
              fontSize:22,
              textAlign:"center",
              fontWeight:"bold"
          },
          listItem:{
              marginHorizontal:20,
              marginVertical:10,
              borderColor:'#ccc',
              borderWidth:1,
              padding:10,
              backgroundColor:'white'

          }
});
export default MealsDetailScreen;


