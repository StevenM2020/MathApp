//script:  Styles
//author:  Steven Motz
//date:    3/25/2023
//purpose: This is the styles file that is used for all the screens.
import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
    width: 200,
  },
  titleText: {
    fontSize: 45,
    fontWeight: "bold",
    color: "white",
  },
  otherText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  subTitleText: {
    fontSize: 20,
    color: "white",
  },
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 10,
  },
  textInputBorder: {
    height: 30,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 2,
  },
  viewLimit: {
    height: 50,
    flexDirection: "row",
  },
});
