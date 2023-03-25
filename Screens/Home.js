//script:  home screen
//author:  Steven Motz
//date:    2/14/2023
//purpose:  This is the home screen for the tic tac toe game.  It has three buttons that navigate to the 2 player, 1 player, and 1 player difficult screens.
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity , TextInput, ImageBackground, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import chalkBoard from '../Images/ChalkBoard.jpg';
import border from '../Images/woodenBorder.png';
import styles from '../styles';
import fontText from '../styles';
import NextButton from '../NextButton';

export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <ImageBackground source={chalkBoard} resizeMode="stretch" style={styles.img}>
        <ImageBackground source={border} resizeMode="stretch" style={styles.img}>
        <Text style={styles.titleText}>Math App</Text>
        <Text style={styles.subTitleText}>By Steven Motz</Text>
        <NextButton onClick={() => navigation.navigate('Arithmetic')} text = "Start" />
        </ImageBackground>
      </ImageBackground>
      </View>
    );
  }
  