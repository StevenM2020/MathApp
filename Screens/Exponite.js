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
export default function ArithmeticScreen({ navigation,route }) {
const [intQ, setIntQ] = useState([]);
const [intA, setIntA] = useState([]);
const [intTempA, setTempA] = useState([]);
const [intUserA, setUserA] = useState([0,0,0,0]);

useEffect(() => {
  setIntQ([]);
  setIntA([]);
  intTempQ = [];
  for(let i = 0; i < 4; i++){
    intTempQ.push(Math.floor(Math.random() * 10));
  }
  intTempQ.push(Math.floor(Math.random() * 5));
  intTempQ.push(Math.floor(Math.random() * 5));

  setIntA(prevArray => [...prevArray, intTempQ[0]]);
  setIntA(prevArray => [...prevArray, intTempQ[1]]);
  setIntA(prevArray => [...prevArray, Math.pow(intTempQ[2],intTempQ[4])]);
  setIntA(prevArray => [...prevArray, Math.pow(intTempQ[3],intTempQ[5])]);

  const intTempQ2 = [...intTempQ];
  intTempQ2[0] = intTempQ[0]*intTempQ[0];
  intTempQ2[1] = intTempQ[1]*intTempQ[1];
  //console.log(intTempQ2);
  setIntQ(intTempQ2);
},[]);

function checkAnswer(){
  let score = 0;
  for(let i = 0; i < intA.length; i++){
    score += (intUserA[i] == intA[i] ? 1 : 0);
  }
  console.log(score);
  score += route.params.score;
  console.log(score);
  console.log(intA);
  navigation.navigate('Results', {score: score});
}

function setTempAFunction(val, id){
  //console.log("user " + val + " " + id);

  const intTemp = [...intUserA];
  intTemp[id] = parseInt(val=="" ? 0 : val);
  console.log(intTemp);
  setUserA(intTemp);
}


    return (
      <View style={styles.container}>
        <ImageBackground source={chalkBoard} resizeMode="stretch" style={styles.img}>
        <ImageBackground source={border} resizeMode="stretch" style={styles.img}>
        <Text style={styles.titleText}>Exponites</Text>
        <Equation problem={"The square root of " + intQ[0] + " is "} onChangeText={(val) => setTempAFunction(val, 0)}/>
        <Equation problem={"The square root of " + intQ[1] + " is "} onChangeText={(val) => setTempAFunction(val, 1)}/>
        <Equation problem={intQ[2] + " to the power of " + intQ[4] + " is "} onChangeText={(val) => setTempAFunction(val, 2)}/>
        <Equation problem={intQ[3] + " to the power of " + intQ[5] + " is "} onChangeText={(val) => setTempAFunction(val, 3)}/>
        <NextButton onClick={() => checkAnswer()} text = "Next" />
        </ImageBackground>
        </ImageBackground>
      </View>
    );
  }