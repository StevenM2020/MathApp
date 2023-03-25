//script:  home screen
//author:  Steven Motz
//date:    3/25/2023
//purpose: This is the home screen for the app and where the user can start the quiz.
import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import chalkBoard from '../Images/ChalkBoard.jpg';
import border from '../Images/woodenBorder.png';
import styles from '../styles';
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
  