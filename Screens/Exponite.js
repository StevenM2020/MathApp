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
const [intUserA, setUserA] = useState([0,0,0,0]);

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

function checkAnswer(){
  let score = 0;
  for(let i = 0; i < intA.length; i++){
    score += (intUserA[i] == intA[i] ? 1 : 0);
  }
  console.log(score);
  console.log(intA);
  navigation.navigate('Exponite', {score: score});
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
        <Text style={styles.titleText}>Arithmetic</Text>
        <Equation problem={intQ[0] + " + " + intQ[1] + " = "} onChangeText={(val) => setTempAFunction(val, 0)}/>
        <Equation problem={intQ[2] + " - " + intQ[3] + " = "} onChangeText={(val) => setTempAFunction(val, 1)}/>
        <Equation problem={intQ[4] + " * " + intQ[5] + " = "} onChangeText={(val) => setTempAFunction(val, 2)}/>
        <Equation problem={intQ[6] + " / " + intQ[7] + " = "} onChangeText={(val) => setTempAFunction(val, 3)}/>
        <NextButton onClick={() => checkAnswer()} text = "Next" />
        </ImageBackground>
        </ImageBackground>
      </View>
    );
  }
  

  

// },[]);
//     return (
//       <View style={styles.container}>
//         <ImageBackground source={chalkBoard} resizeMode="stretch" style={styles.img}>
//         <ImageBackground source={border} resizeMode="stretch" style={styles.img}>
//         <Text style={styles.titleText}>Exponites</Text>
//         <Equation problem={"The square root of " + "4" + " is "} />
//         <Equation problem={"The square root of " + "9" + " is "} />
//         <Equation problem={"3" + " to the power of " + "4" + " is "} />
//         <Equation problem={"3" + " to the power of " + "4" + " is "} />
//         <NextButton onClick={() => navigation.navigate('Results')} text = "Next" />
//         </ImageBackground>
//         </ImageBackground>
//       </View>
//     );
//   }