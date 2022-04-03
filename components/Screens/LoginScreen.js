import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Alert,
  useWindowDimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import tw from "../../utils/tw";
import CustomTextField from "../TextFields/CustomTextField";
import LoginIllustration from "../../assets/images/login-illustration.png";
import CustomButton from "../Buttons/CustomButton";
import CustomText from "../Texts/CustomText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { loginUser } from "../../redux/actions/authAction";

const LoginScreen = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const isFetching = useSelector((state) => state.auth.isFetching);
  const [password, onChangePassword] = useState("");
  const dispatch = useDispatch();
  const { height } = useWindowDimensions();
  const login = () => {
    dispatch(loginUser({ email, password }, Alert, navigation));
  };
  return (
    <ScrollView style={tw`px-4 h-full bg-white`}>
      <Image
        source={LoginIllustration}
        style={[tw`w-full mt-20`, { height: height * 0.4 }]}
        resizeMode="contain"
      />
      <View style={tw`mt-8 w-full`}>
        <CustomText
          fontFamily="InterBlack"
          className="text-3xl text-gray-700 mb-1"
        >
          Welcome Back!
        </CustomText>
        <CustomText
          fontFamily="InterRegular"
          className="text-base text-gray-500 mb-4"
        >
          Sign in into your account
        </CustomText>
        <CustomTextField
          icon={
            <Ionicons
              name="mail-outline"
              size={20}
              color="gray"
              style={tw`pr-2`}
            />
          }
          value={email}
          onChangeValue={onChangeEmail}
          label="Email Address"
          placeholder="johndoe@example.com"
          textContentType="emailAddress"
        />
        <CustomTextField
          icon={
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="gray"
              style={tw`pr-2`}
            />
          }
          label="Password"
          value={password}
          onChangeValue={onChangePassword}
          placeholder="input your password..."
          textContentType="password"
          secureTextEntry={true}
        />
        <View>
          <CustomText
            className="text-blue-400 text-right mb-3 tracking-normal text-sm"
            fontFamily="InterSemiBold"
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            Forgot Password?
          </CustomText>
        </View>
        <View style={tw`w-full`}>
          <CustomButton
            onPress={login}
            isLoading={isFetching}
            isDisabled={isFetching}
            loadingText="Checking..."
            className="bg-blue-500 rounded-lg p-3"
          >
            Continue
          </CustomButton>
          <CustomText className="text-gray-400 text-center mt-2 tracking-normal text-sm">
            Don't have an account?{" "}
            <CustomText
              fontFamily="InterSemiBold"
              onPress={() => navigation.navigate("Register")}
              className="text-blue-400 text-center mt-2 tracking-normal text-sm"
            >
              Register
            </CustomText>
          </CustomText>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
