//script:  Exponite
//author:  Steven Motz
//date:    3/25/2023
//purpose: This is the exponite screen for the app. It prompts the user to solve 4 exponite problems.
import React, { useState } from "react";
import { Text, View, ImageBackground } from "react-native";
import chalkBoard from "../Images/ChalkBoard.jpg";
import border from "../Images/woodenBorder.png";
import styles from "../styles";
import NextButton from "../NextButton";

export default function ArithmeticScreen({ navigation, route }) {
  //finds the percentage of the score
  const [score, setScore] = useState((route.params.score / 8) * 100);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={chalkBoard}
        resizeMode="stretch"
        style={styles.img}
      >
        <ImageBackground
          source={border}
          resizeMode="stretch"
          style={styles.img}
        >
          <Text style={styles.titleText}>Results</Text>
          <Text style={styles.titleText}>{route.params.score + "/8"}</Text>
          <Text style={styles.titleText}>{score + "%"}</Text>
          <NextButton onClick={() => navigation.navigate("Home")} text="Home" />
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}
