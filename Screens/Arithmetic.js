import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity,ImageBackground,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import chalkBoard from '../Images/ChalkBoard.jpg';
import border from '../Images/woodenBorder.png';
import styles from '../styles';
import NextButton from '../NextButton';
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
        <Text style={styles.titleText}>ArithmeticScreen</Text>
        
        <View style={styles.viewLimit}>
        <Text style={styles.otherText}>{intQ[0] + " + " + intQ[1] + " = " + intA[0]}</Text>
        <ImageBackground  style={styles.textInputBorder}>
        <TextInput maxLength={4} id='A4' style={styles.otherText} placeholder="         " />
        </ImageBackground>
        </View>

        <View style={styles.viewLimit}>
        <Text style={styles.otherText}>{intQ[2] + " - " + intQ[3] + " = "+ intA[1]}</Text>
        <ImageBackground  style={styles.textInputBorder}>
        <TextInput id='A4' style={styles.otherText} placeholder="         " />
        </ImageBackground>
        </View>

        <View style={styles.viewLimit}>
        <Text style={styles.otherText}>{intQ[4] + " * " + intQ[5] + " = "+ intA[2]}</Text>
        <ImageBackground  style={styles.textInputBorder}>
        <TextInput id='A4' style={styles.otherText} placeholder="         " />
        </ImageBackground>
        </View>

        <View style={styles.viewLimit}>
        <Text style={styles.otherText}>{intQ[6] + " / " + intQ[7] + " = "+ intA[3]}</Text>
        <ImageBackground  style={styles.textInputBorder}>
        <TextInput id='A4' style={styles.otherText} placeholder="         " />
        </ImageBackground>
        </View>


        <NextButton onClick={() => navigation.navigate('Arithmetic')} text = "Next" />


        </ImageBackground>
        </ImageBackground>
      </View>
    );
  }
  