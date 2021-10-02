import {MEALS,CATEGORIES} from '../../data/dummyData';
import {TOGGLE_FAV_MEALS} from '../actions/addFav';
import {FILTER_MEALS}  from '../actions/fliter';
const initialState={
    categories:CATEGORIES,
    meals:MEALS,
    favoriteMeals:[],
    filterMeals:MEALS
}
const mealsReducer=(state=initialState,action)=>{
    switch(action.type){
        case TOGGLE_FAV_MEALS :
           let id=action.payload;
           let isSelectedMealExist=state.favoriteMeals.some(meal=>meal.id==id);
           if(isSelectedMealExist){
              const remaningMealsInFav=state.favoriteMeals.filter(m=>m.id!=id);
              return {...state,favoriteMeals:[...remaningMealsInFav]}
           }else{
            const selectedMeal=MEALS.find(meal=>meal.id==id);
            return {...state,favoriteMeals:[...state.favoriteMeals,selectedMeal]}
          }
        case FILTER_MEALS:
            const appliedFilters = action.payload;
            console.log(appliedFilters);
            const updatedFilteredMeals = state.meals.filter(meal => {
              debugger
              if (appliedFilters.GlutenFree && !meal.isGlutenFree) {
                return false;
              }
              if (appliedFilters.LactoseFree && !meal.isLactoseFree) {
                return false;
              }
              if (appliedFilters.VeganFree && !meal.isVegan) {
                return false;
              }
              if (appliedFilters.Vegetrain && !meal.isVegetarian) {
                return false;
              }
              return true;
            });
            console.log(updatedFilteredMeals);
            return { ...state, meals: updatedFilteredMeals };
        default:
            return {...state};
    }
     
}

export default mealsReducer;