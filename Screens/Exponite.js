import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//sdsdf
import styles from '../styles';

export default function ExponiteScreen({ navigation }) {

    return (
      <View style={styles.container}>
        <ImageBackground source={chalkBoard} resizeMode="stretch" style={styles.img}>
        <ImageBackground source={border} resizeMode="stretch" style={styles.img}>
        <Text style={styles.titleText}>ExponiteScreen</Text>
        <View style={styles.buttonContainer}>
          <Button title='home' onPress={() => navigation.navigate('Home')} />
        </View>
        </ImageBackground>
        </ImageBackground>
      </View>
    );
  }
  