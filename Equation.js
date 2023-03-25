//script:  Equation
//author:  Steven Motz
//date:    3/25/2023
//purpose: This is the equation component that is used on the arithmetic and exponite screens to prompt the user for the answer.
import { Text, View, TextInput, ImageBackground } from "react-native";
const Equation = ({ problem, onChangeText }) => {
  return (
    <View style={styles.viewLimit}>
      <Text style={styles.otherText}>{problem}</Text>
      <ImageBackground style={styles.textInputBorder}>
        <TextInput
          onChangeText={(val) => onChangeText(val)}
          maxLength={4}
          style={styles.otherText}
          placeholder="         "
        />
      </ImageBackground>
    </View>
  );
};

export default Equation;
