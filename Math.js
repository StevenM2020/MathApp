import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity,ImageBackground,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import chalkBoard from './Images/ChalkBoard.jpg';
import border from './Images/woodenBorder.png';
import styles from './styles';
const Math = () => {


    return (
        <View style={styles.container}>
        {/* <ImageBackground source={chalkBoard} resizeMode="stretch" style={styles.img}>
         <ImageBackground source={border} resizeMode="stretch" style={styles.img}> */}
      <Text style={styles.titleText}></Text>
      
      {/* <View style={styles.viewLimit}>
      <Text style={styles.otherText}>{intQ[0] + " + " + intQ[1] + " = " + intA[0]}</Text>
      <ImageBackground  style={styles.textInputBorder}>
      <TextInput maxLength={4} id='A4' style={styles.otherText} placeholder="         " />
      </ImageBackground>
      </View> */}

      {/* <View style={styles.viewLimit}>
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
      </View> */}


      {/* <TouchableOpacity onPress={() => navigation.navigate('Arithmetic')}>
      <ImageBackground  style={styles.button1}>
        <Text style={styles.otherText}>Next</Text>
      </ImageBackground>
      </TouchableOpacity> */}


      {/* </ImageBackground>
      </ImageBackground> */}
    </View>
    );
    };

export default Math;