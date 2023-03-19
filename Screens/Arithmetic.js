import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity,ImageBackground,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import chalkBoard from '../Images/ChalkBoard.jpg';
import border from '../Images/woodenBorder.png';
import styles from '../styles';
//fgd
export default function ArithmeticScreen({ navigation }) {
const [intQ, setIntQ] = useState([]);
const [intA, setIntA] = useState([]);
useEffect(() => {
  for(let i = 0; i < 8; i++){
    setIntQ(prevArray => [...prevArray, Math.floor(Math.random() * 10)]);
  }
  setIntA(prevArray => [...prevArray, intQ[0] + intQ[1]]);
  setIntA(prevArray => [...prevArray, intQ[2] - intQ[3]]);
  setIntA(prevArray => [...prevArray, intQ[4] * intQ[5]]);
  setIntA(prevArray => [...prevArray, intQ[6] / (intQ[7] = 0 ? 1 : intQ[7])]);
},[]);

    return (
      <View style={styles.containe}>
          <ImageBackground source={chalkBoard} resizeMode="stretch" style={styles.img}>
           <ImageBackground source={border} resizeMode="stretch" style={styles.img}>
        <Text style={styles.titleText}>ArithmeticScreen</Text>
        
        <View style={styles.viewLimit}>
        <Text style={styles.otherText}>{intQ[0] + " + " + intQ[1] + " = "}</Text>
        <TextInput id='A1' style={styles.otherText} placeholder="_________" />
        </View>

        <Text style={styles.otherText}>{intQ[2] + " - " + intQ[3] + " = "}</Text>
        <TextInput id='A2' style={styles.otherText} placeholder="_________" />

        <Text style={styles.otherText}>{intQ[4] + " * " + intQ[5] + " = "}</Text>
        <TextInput id='A3' style={styles.otherText} placeholder="_________" />

        <Text style={styles.otherText}>{intQ[6] + " / " + intQ[7] + " = "}</Text>
        <ImageBackground  style={styles.textInputBorder}>
        <TextInput id='A4' style={styles.otherText} placeholder="_________" />
        </ImageBackground>

        <TouchableOpacity onPress={() => navigation.navigate('Arithmetic')}>
        <ImageBackground  style={styles.button1}>
          <Text style={styles.otherText}>Next</Text>
        </ImageBackground>
        </TouchableOpacity>

        </ImageBackground>
        </ImageBackground>
      </View>
    );
  }
  