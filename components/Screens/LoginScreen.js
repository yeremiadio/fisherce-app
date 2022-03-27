import React from "react";
import { View, Text, Button, Image, useWindowDimensions } from "react-native";
import { useDispatch } from "react-redux";
import { SET_USER } from "../../redux/constants";
import tw from "../../utils/tw";
import CustomText from "../Texts/CustomText";
import LoginIllustration from "../../assets/images/login-illustration.png";
import CustomButton from "../Buttons/CustomButton";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { height } = useWindowDimensions();
  const loginUser = async () => {
    await dispatch({ type: SET_USER });
    navigation.navigate("Home");
  };
  return (
    <View style={tw`px-4 h-full`}>
      <Image
        source={LoginIllustration}
        style={[tw`w-full mt-28`, { height: height * 0.4 }]}
        resizeMode="contain"
      />

      <View style={tw`mt-8 w-full items-center`}>
        <CustomText fontFamily="InterBlack" className="text-4xl text-gray-800">
          Login
        </CustomText>
        <Text style={{ marginVertical: 8 }}>
          Go to{" "}
          <Text
            style={{ color: "blue" }}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            Home
          </Text>
        </Text>
        <View style={tw`w-full`}>
          <CustomButton className="bg-blue-500 p-4 rounded-lg">Login</CustomButton>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
