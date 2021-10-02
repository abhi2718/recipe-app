import React from 'react';
import {View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
const HeaderBtn=(props)=>{
    const {addFavorite,mealId,isSelectedMealExist}=props;
    return (
        <View style={{flexDirection:'row',paddingHorizontal:10}}>
            {
               isSelectedMealExist(mealId)?
               <Ionicons  onPress={()=>{addFavorite(mealId)}} name="heart-outline" color="red" size={23}/>
               :<Ionicons  onPress={()=>{addFavorite(mealId);}} name="heart" color="red" size={23}/>
            }
            
        </View>
    )
}

export default HeaderBtn;