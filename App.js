import React,{ useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppLoading } from 'expo';

import Mealsnav from './nav/Mealsnav';





export default function App() {


  
  return (
    
    <Mealsnav></Mealsnav>
   
  
  
 
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
