import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity , TextInput, ImageBackground, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const NextButton = ({ onClick, text }) => {
    return (
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => onClick()}>
        <ImageBackground  style={styles.button1}>
          <Text style={styles.otherText}>{text}</Text>
        </ImageBackground>
        </TouchableOpacity>
        </View>
    );
    };

export default NextButton;