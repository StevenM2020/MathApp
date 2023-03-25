import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity,ImageBackground,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import chalkBoard from '../Images/ChalkBoard.jpg';
import border from '../Images/woodenBorder.png';
import styles from '../styles';
import NextButton from '../NextButton';
import Equation from '../Equation';
//fgd
export default function ArithmeticScreen({ navigation }) {
const [intQ, setIntQ] = useState([]);
const [intA, setIntA] = useState([]);

useEffect(() => {
  setIntQ([]);
  setIntA([]);
  intTempQ = [];
  for(let i = 0; i < 8; i++){
    intTempQ.push(Math.floor(Math.random() * 10));
  }
  intTempQ[7] = (intTempQ[7] = 0 ? 1 : intTempQ[7]);

  setIntA(prevArray => [...prevArray, intTempQ[0] + intTempQ[1]]);
  setIntA(prevArray => [...prevArray, intTempQ[2] - intTempQ[3]]);
  setIntA(prevArray => [...prevArray, intTempQ[4] * intTempQ[5]]);
  setIntA(prevArray => [...prevArray, intTempQ[6]]);

  const intTempQ2 = [...intTempQ];
  intTempQ2[6] = intTempQ[6] * intTempQ[7];
  console.log(intTempQ2);
  setIntQ(intTempQ2);
  

},[]);
    return (
      <View style={styles.container}>
        <ImageBackground source={chalkBoard} resizeMode="stretch" style={styles.img}>
        <ImageBackground source={border} resizeMode="stretch" style={styles.img}>
        <Text style={styles.titleText}>Exponites</Text>
        <Equation problem={"The square root of " + "4" + " is "} />
        <Equation problem={"The square root of " + "9" + " is "} />
        <Equation problem={"3" + " to the power of " + "4" + " is "} />
        <Equation problem={"3" + " to the power of " + "4" + " is "} />
        <NextButton onClick={() => navigation.navigate('Results')} text = "Next" />
        </ImageBackground>
        </ImageBackground>
      </View>
    );
  }