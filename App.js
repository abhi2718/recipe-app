import React from 'react';
import MealsNavigator from './navigation/mealsNavigator';
import { Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import mealsReducer from './store/reducer/mealsreducer';
const rootReducer=combineReducers({
  meals:mealsReducer
})
const store=createStore(rootReducer);
export default function App() {
  return (
      <Provider store={store}>
            <MealsNavigator />
      </Provider> 
  );
}


