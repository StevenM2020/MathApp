//script:  app
//author:  Steven Motz
//date:    2/14/2023
//purpose: This is the app.js file that contains the navigation for the app.
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './Screens/Home.js';
import arithmetic from './Screens/Arithmetic.js';
import exponite from './Screens/Exponite.js';
import results from './Screens/Results.js';
//import styles from './styles';
//dfg
export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
      <Stack.Screen name="Home" component={home} />
      <Stack.Screen name="Arithmetic" component={arithmetic} />
      <Stack.Screen name="Exponite" component={exponite} />
      <Stack.Screen name="Results" component={results} />
    </Stack.Navigator>
    }</NavigationContainer>
  );
}

const Stack = createNativeStackNavigator(); 