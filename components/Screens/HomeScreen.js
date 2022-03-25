import React from "react";
import { View, Text, Button, Image } from "react-native";
import { IMAGE_URL } from "@env";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../redux/constants";

const HomeScreen = ({ navigation }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOutUser = async () => {
    await dispatch({ type: LOGOUT });
    navigation.navigate("Login");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      {auth.isAuthenticated ? (
        <View>
          <Text>Hello, {auth.user.name}</Text>
          <Image
            source={{ uri: `${IMAGE_URL}` }}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ marginVertical: 8 }}>
            Back to{" "}
            <Text
              style={{ color: "blue" }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Login
            </Text>
          </Text>
          <Button title="Logout" onPress={logOutUser} />
        </View>
      ) : (
        <View>
          <Text>
            Back to{" "}
            <Text
              style={{ color: "blue" }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Login
            </Text>
          </Text>
          <Text>
            Back to{" "}
            <Text
              style={{ color: "blue" }}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              Register
            </Text>
          </Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
