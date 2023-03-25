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
const [score, setScore] = useState(route.params.score/8 * 100);
    return (
      <View style={styles.container}>
        <ImageBackground source={chalkBoard} resizeMode="stretch" style={styles.img}>
        <ImageBackground source={border} resizeMode="stretch" style={styles.img}>
        <Text style={styles.titleText}>Results</Text>
        <Text style={styles.titleText}>{route.params.score+"/8"}</Text>
        <Text style={styles.titleText}>{score+"%"}</Text>
        <NextButton onClick={() => navigation.navigate('Home')} text = "Home" />
        </ImageBackground>
        </ImageBackground>
      </View>
    );
  }