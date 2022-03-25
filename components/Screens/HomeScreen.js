import React from "react";
import { View, Text, Button, Image } from "react-native";
import { IMAGE_URL } from "@env";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Image
        source={{ uri: `${IMAGE_URL}` }}
        style={{ width: 200, height: 200 }}
      />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

export default HomeScreen;
