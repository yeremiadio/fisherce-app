import React from "react";
import { View, Text, Button, Linking } from "react-native";
import { useDispatch } from "react-redux";
import { SET_USER } from "../../redux/constants";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const loginUser = async () => {
    await dispatch({ type: SET_USER });
    navigation.navigate("Home");
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>

      <Button title="Login" onPress={loginUser} />
    </View>
  );
};

export default LoginScreen;
