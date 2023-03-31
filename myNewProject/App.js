import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

const image = require("./Source/register-image.png");

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.backgroundImg}>
          <RegistrationScreen />
          {/* <LoginScreen /> */}
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  backgroundImg: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
});
