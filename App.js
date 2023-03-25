//script:  app
//author:  Steven Motz
//date:    2/25/2023
//purpose: This is the app.js file that contains the navigation for the app.
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import home from "./Screens/Home.js";
import arithmetic from "./Screens/Arithmetic.js";
import exponite from "./Screens/Exponite.js";
import results from "./Screens/Results.js";
import { BackHandler } from "react-native";

export default function App() {
  //disables the back button to prevent cheating
  const [backHandlerEnabled, setBackHandlerEnabled] = useState(true);
  const handleBackButton = () => {
    if (backHandlerEnabled) {
      return true;
    }
  };
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, [backHandlerEnabled]);

  //navigation code
  return (
    <NavigationContainer>
      {
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Arithmetic"
            component={arithmetic}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Exponite"
            component={exponite}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Results"
            component={results}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
