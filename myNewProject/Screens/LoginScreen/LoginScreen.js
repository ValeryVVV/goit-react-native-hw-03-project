import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const initialState = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);

  const keyBoardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.wrapper}
    >
      <TouchableWithoutFeedback onPress={keyBoardHide}>
        <View
          style={{
            ...styles.container,
            height: isShowKeyboard ? "70%" : "75%",
          }}
        >
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="E-mail address"
            onFocus={() => setIsShowKeyboard(true)}
            value={state.email}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={state.password}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, password: value }))
            }
          />

          <TouchableOpacity
            style={styles.passwShow}
            activeOpacity={0.5}
            onPress={() => setIsShowKeyboard(true)}
          >
            <Text style={styles.passwShowText}>Show</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={keyBoardHide}
            activeOpacity={0.7}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginLink}
            activeOpacity={0.7}
            onFocus={keyBoardHide}
          >
            <Text style={styles.loginLinkText}>
              Don't have an account? Register
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    height: 489,
  },
  wrapper: {
    justifyContent: "flex-end",
  },
  pfotoContainer: {
    marginTop: -60,
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addbutton: {
    marginTop: "65%",
    left: "90%",
    height: 25,
    width: 25,
    pointerEvents: "auto",
  },
  title: {
    fontWeight: 500,
    fontSize: 30,
    textAlign: "center",
    marginTop: 32,
    lineHeight: 35,
  },
  input: {
    width: 343,
    backgroundColor: "#F6F6F6",
    height: 50,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    color: "#212121",
    padding: 16,
  },
  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 50,
    width: 343,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 43,
    ...Platform.select({
      ios: {
        backgroundColor: "#FF6C00",
        backgroundColor: "#FF6C00",
      },
      android: {
        backgroundColor: "transparent",
      },
    }),
  },
  btnText: {
    color: "#fff",
    fontWeight: 400,
    fontSize: 16,
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 16,
  },
  loginLinkText: {
    color: "#1B4371",
    fontWeight: 400,
    fontSize: 16,
  },
  passwShowText: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  passwShow: {
    top: -34,
    left: 130,
  },
});
