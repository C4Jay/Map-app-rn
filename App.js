import React,{ useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import { AppLoading } from 'expo';

import Mealsnav from './nav/Mealsnav';
import placesReducer from './store/places-reducer';

import { init } from './helpers/db';

init()
.then(() => {
  console.log('Init proceed')
})
.catch(err => {
  console.log('Failure on Init');
  console.log(err)
})

const rootReducer = combineReducers({
  places: placesReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {


  
  return (
    <Provider store={store}>
    <Mealsnav></Mealsnav>
    </Provider>
  
  
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
