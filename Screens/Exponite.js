//script:  Exponite
//author:  Steven Motz
//date:    3/25/2023
//purpose: This is the exponite screen for the app. It prompts the user to solve 4 exponite problems.
import React, { useEffect, useState } from "react";
import { Text, View, ImageBackground } from "react-native";
import chalkBoard from "../Images/ChalkBoard.jpg";
import border from "../Images/woodenBorder.png";
import styles from "../styles";
import NextButton from "../NextButton";
import Equation from "../Equation";

export default function ArithmeticScreen({ navigation, route }) {
  const [intQ, setIntQ] = useState([]);
  const [intA, setIntA] = useState([]);
  const [intUserA, setUserA] = useState([0, 0, 0, 0]);

  //Initialize the questions and answers
  useEffect(() => {
    setIntQ([]);
    setIntA([]);
    intTempQ = [];
    for (let i = 0; i < 4; i++) {
      intTempQ.push(Math.floor(Math.random() * 10));
    }
    intTempQ.push(Math.floor(Math.random() * 5));
    intTempQ.push(Math.floor(Math.random() * 5));

    setIntA((prevArray) => [...prevArray, intTempQ[0]]);
    setIntA((prevArray) => [...prevArray, intTempQ[1]]);
    setIntA((prevArray) => [...prevArray, Math.pow(intTempQ[2], intTempQ[4])]);
    setIntA((prevArray) => [...prevArray, Math.pow(intTempQ[3], intTempQ[5])]);

    const intTempQ2 = [...intTempQ];
    intTempQ2[0] = intTempQ[0] * intTempQ[0];
    intTempQ2[1] = intTempQ[1] * intTempQ[1];
    setIntQ(intTempQ2);
  }, []);

  //Check the answers and navigate to the results screen
  function checkAnswer() {
    let score = 0;
    for (let i = 0; i < intA.length; i++) {
      score += intUserA[i] == intA[i] ? 1 : 0;
    }
    score += route.params.score;
    navigation.navigate("Results", { score: score });
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
          <Text style={styles.titleText}>Exponites</Text>
          <Equation
            problem={"The square root of " + intQ[0] + " is "}
            onChangeText={(val) => setTempAFunction(val, 0)}
          />
          <Equation
            problem={"The square root of " + intQ[1] + " is "}
            onChangeText={(val) => setTempAFunction(val, 1)}
          />
          <Equation
            problem={intQ[2] + " to the power of " + intQ[4] + " is "}
            onChangeText={(val) => setTempAFunction(val, 2)}
          />
          <Equation
            problem={intQ[3] + " to the power of " + intQ[5] + " is "}
            onChangeText={(val) => setTempAFunction(val, 3)}
          />
          <NextButton onClick={() => checkAnswer()} text="Next" />
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}
