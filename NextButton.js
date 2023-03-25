//script:  NextButton
//author:  Steven Motz
//date:    3/25/2023
//purpose: This is the next button that is used on all the screens.
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
const NextButton = ({ onClick, text }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => onClick()}>
        <ImageBackground style={styles.button1}>
          <Text style={styles.otherText}>{text}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;
