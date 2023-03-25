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
const [intTempA, setTempA] = useState([]);
const [intUserA, setUserA] = useState([]);

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


useEffect(() => {
  const intTempUserA = [...intUserA];
  intTempUserA[intTempA[1]] = intTempA[0];
  console.log("temp"+intTempUserA);
  setUserA(intTempA);

},[intTempA]);

function checkAnswer(){
  let score = 0;
  for(let i = 0; i < intA.length; i++){
    score += (1 == intA[i] ? 1 : 0);
  }
  console.log(score);
  navigation.navigate('Exponite', {score: score});
}
    return (
      <View style={styles.container}>
        <ImageBackground source={chalkBoard} resizeMode="stretch" style={styles.img}>
        <ImageBackground source={border} resizeMode="stretch" style={styles.img}>
        <Text style={styles.titleText}>Arithmetic</Text>
        <Equation problem={intQ[0] + " + " + intQ[1] + " = "+ intA[0]} setTempA id={0}/>
        <Equation problem={intQ[2] + " - " + intQ[3] + " = "+ intA[1]} setTempA id={1}/>
        <Equation problem={intQ[4] + " * " + intQ[5] + " = "+ intA[2]} setTempA id={2}/>
        <Equation problem={intQ[6] + " / " + intQ[7] + " = "+ intA[3]} setTempA id={3}/>
        <NextButton onClick={() => checkAnswer()} text = "Next" />
        </ImageBackground>
        </ImageBackground>
      </View>
    );
  }
  