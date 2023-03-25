//script:  Arithmetic
//author:  Steven Motz
//date:    3/25/2023
//purpose: This is the arithmetic screen for the app. It prompts the user to solve 4 arithmetic problems.

import React, { useEffect, useState } from "react";
import { Text, View, ImageBackground } from "react-native";
import chalkBoard from "../Images/ChalkBoard.jpg";
import border from "../Images/woodenBorder.png";
import styles from "../styles";
import NextButton from "../NextButton";
import Equation from "../Equation";

export default function ArithmeticScreen({ navigation }) {
  const [intQ, setIntQ] = useState([]);
  const [intA, setIntA] = useState([]);
  const [intUserA, setUserA] = useState([0, 0, 0, 0]);

  //Initialize the questions and answers
  useEffect(() => {
    setIntQ([]);
    setIntA([]);
    intTempQ = [];
    for (let i = 0; i < 8; i++) {
      intTempQ.push(Math.floor(Math.random() * 10));
    }
    intTempQ[7] = intTempQ[7] = 0 ? 1 : intTempQ[7];

    setIntA((prevArray) => [...prevArray, intTempQ[0] + intTempQ[1]]);
    setIntA((prevArray) => [...prevArray, intTempQ[2] - intTempQ[3]]);
    setIntA((prevArray) => [...prevArray, intTempQ[4] * intTempQ[5]]);
    setIntA((prevArray) => [...prevArray, intTempQ[6]]);

    const intTempQ2 = [...intTempQ];
    intTempQ2[6] = intTempQ[6] * intTempQ[7];
    setIntQ(intTempQ2);
  }, []);

  //Check the answers and navigate to the Exponite screen
  function checkAnswer() {
    let score = 0;
    for (let i = 0; i < intA.length; i++) {
      score += intUserA[i] == intA[i] ? 1 : 0;
    }
    navigation.navigate("Exponite", { score: score });
  }

  //Gets the value from the equation component and sets it to the answer array
  function setTempAFunction(val, id) {
    const intTemp = [...intUserA];
    intTemp[id] = parseInt(val == "" ? 0 : val);
    setUserA(intTemp);
  }

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
          <Text style={styles.titleText}>Arithmetic</Text>
          <Equation
            problem={intQ[0] + " + " + intQ[1] + " = "}
            onChangeText={(val) => setTempAFunction(val, 0)}
          />
          <Equation
            problem={intQ[2] + " - " + intQ[3] + " = "}
            onChangeText={(val) => setTempAFunction(val, 1)}
          />
          <Equation
            problem={intQ[4] + " * " + intQ[5] + " = "}
            onChangeText={(val) => setTempAFunction(val, 2)}
          />
          <Equation
            problem={intQ[6] + " / " + intQ[7] + " = "}
            onChangeText={(val) => setTempAFunction(val, 3)}
          />
          <NextButton onClick={() => checkAnswer()} text="Next" />
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}
