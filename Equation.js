import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity , TextInput, ImageBackground, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Equation = ({problem}, setTempA, id) => {

  return (
    <View style={styles.viewLimit}>
    <Text style={styles.otherText}>{problem}</Text>
    <ImageBackground  style={styles.textInputBorder}>
    <TextInput onChange={() => setTempA()} maxLength={4} style={styles.otherText} placeholder="         " />
    </ImageBackground>
    </View>
  );
};

export default Equation;