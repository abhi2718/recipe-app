import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import {createBottomTabNavigator} from 'react-navigation-tabs'; 
import { createAppContainer } from "react-navigation";
import CategoriesMealScreen from '../screens/categoriesMealScreen';
import CategoriesScreen from '../screens/categoriesScreen';
import MealsDetailScreen from '../screens/mealsDetailScreen';
import FavoritesScreen from '../screens/favoritesScreen';
import  FilterScreen from '../screens/filterScreen';
import {Ionicons} from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
const defaultNavigationOptions={
        headerTitle:'new Screen',
        headerStyle:{
        backgroundColor:'red'
        },
        headerTintColor:"black" 
    }

const MealsNavigator=createStackNavigator({
    Categories:{
        screen:CategoriesScreen,
        navigationOptions:{
            headerTitle:'Category Meals',
            headerTitleStyle:{
                fontFamily:"notoserif",
                fontSize:18
            },
           
            headerStyle:{
                backgroundColor:'white',
            },
            headerTintColor:'black'
        }
    },
      CategoriesMeal:CategoriesMealScreen,
      MealsDetail:MealsDetailScreen
},{defaultNavigationOptions})

const FavNavigator=createStackNavigator({
    Favorites:{
        screen:FavoritesScreen,
        navigationOptions:{
            headerTitle:'Your Favorites',
            headerTintColor:'black',
            headerStyle:{
                backgroundColor:'white'
            }
        }
    },
    MealsDetail:MealsDetailScreen
},{defaultNavigationOptions});

const tabScreenConfig={
    Meals:{
        screen:MealsNavigator,
        navigationOptions:{
            tabBarLabel:'Meals',
            tabBarIcon:tabBarInfo=>(
            <Ionicons 
                name='ios-restaurant' 
                size={25}
                color={tabBarInfo.tintColor}
            />),
            tabBarColor:'white'
        }
    },
    Favorites:{
        screen:FavNavigator,
        navigationOptions:{
            tabBarLabel:'',
            tabBarIcon:tabBarInfo=>(
                <Ionicons 
                   name='heart-outline'
                   size={25}
                   color={tabBarInfo.tintColor}
                />
            ),
            tabBarColor:'white'
        }
    }
}
const tabNavigator=Platform.OS=="android"?createMaterialBottomTabNavigator(tabScreenConfig,{
    activeColor:"blue",
    inactiveColor:'green',
    shifting:true,
    
})
: createBottomTabNavigator(tabScreenConfig,{
    tabBarOptions:{
        activeTintColor:'blue',
        inactiveTintColor:'red',
    }
})
const FilterNavigator=createStackNavigator({
    Filter: FilterScreen
})
const MainNavigator=createDrawerNavigator({
    Meals:{
        screen:tabNavigator
    },
    Filter: FilterNavigator
},{
    contentOptions:{
        activeTintColor:'blue',
        inactiveTintColor:'green',
        labelStyle:{
            fontSize:14,
            fontFamily: "Roboto",
        },
        drawerLabel:"Good"
    }
});
export default createAppContainer(MainNavigator);
