import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet,Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import filterMeals from '../store/actions/fliter';
const FilterSwitch=props =>{
    return(
        <View style={styles.filterContainer}>
                <Text>{props.label}</Text>
                <Switch 
                    trackColor={{false:'white',true:'white'}}
                    thumbColor={props.state?"blue":"red"}
                    value={props.state}
                    onValueChange={props.onChange}
                />
        </View>
    )
}
const FilterScreen=(props)=>{
   const dispatch=useDispatch();
   const [isGlutenFree,setIsGlutenFree]=useState(false);
   const [isLactoseFree,setIsLactoseFree]=useState(false);
   const [isVeganFree,setIsVeganFree]=useState(false);
   const [isVegetrain,setIsVegetrain]=useState(false);
  
   useEffect(()=>{
    const appliedFilters={
      GlutenFree:isGlutenFree,
      LactoseFree:isLactoseFree,
      VeganFree:isVeganFree,
      Vegetrain:isVegetrain
     }
     const setFilter=filterObject=>dispatch(filterMeals(filterObject))
     props.navigation.setParams({appliedFilters,setFilter})
   },[isGlutenFree,isLactoseFree,isVeganFree,isVegetrain])
   return(
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions  </Text>
            <FilterSwitch 
            label="Gluten-free" 
            state={isGlutenFree}
            onChange={()=>setIsGlutenFree(!isGlutenFree)}
            />

          <FilterSwitch 
            label="Lactose-free" 
            state={isLactoseFree}
            onChange={()=>setIsLactoseFree(!isLactoseFree)}
            />

           <FilterSwitch 
            label="Vegar" 
            state={isVeganFree}
            onChange={()=>setIsVeganFree(!isVeganFree)}
            />

           <FilterSwitch 
            label="Vegetarian" 
            state={isVegetrain}
            onChange={()=>setIsVegetrain(!isVegetrain)}
            />
        </View>
    );
}

FilterScreen.navigationOptions=headerData=>{
    const appliedFilters=headerData.navigation.getParam("appliedFilters")?
    headerData.navigation.getParam("appliedFilters"):{};
    const setFilter=headerData.navigation.getParam("setFilter")?
    headerData.navigation.getParam("setFilter"):()=>alert("filterning");

    return{
    headerTitle:"Filter Meals",
     headerLeft:()=>(
         <Ionicons 
            name='ios-menu'
            color="black"
            size={25}
            onPress={()=>headerData.navigation.toggleDrawer()}
         />
       ),
       headerRight:()=>(
        <Ionicons 
           name='ios-save'
           color="blue"
           size={25}
           onPress={()=>{
             alert('filter is applied ');
            setFilter(appliedFilters);
           }}
        />
      )
    }
}

const styles=StyleSheet.create({
          screen:{
              width:"100%",
              height:"100%",
              alignItems:'center'
          },
          title:{
            fontSize:22,
            margin:20,
            textAlign:'center'
          },
          filterContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            width:'80%',
            marginVertical:10
          }
});
export default FilterScreen;


