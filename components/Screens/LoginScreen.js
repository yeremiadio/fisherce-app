import React from "react";
import { View, Text, Button } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Register Screen</Text>
      <Button title="Register" onPress={() => navigation.navigate("Register")} />
    </View>
  );
};

export default LoginScreen;
