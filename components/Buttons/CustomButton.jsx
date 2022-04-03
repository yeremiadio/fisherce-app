import React from "react";
import { ActivityIndicator } from "react-native";
import tw from "../../utils/tw";
import CustomText from "../Texts/CustomText";
import Ripple from "react-native-material-ripple";

const CustomButton = ({
  onPress,
  isDisabled = false,
  isLoading = false,
  loadingText = "",
  fontFamily = "",
  className = "",
  children,
  ...rest
}) => {
  return (
    <Ripple
      rippleCentered
      rippleDuration={300}
      onPress={onPress}
      {...rest}
      disabled={isDisabled}
      style={[
        tw`${className}`,
        tw`my-2 flex flex-row justify-center ${isDisabled ? "opacity-50" : ""}`,
      ]}
    >
      {isDisabled || isLoading ? (
        <ActivityIndicator size={"small"} color="white" style={tw`mr-2`} />
      ) : null}
      <CustomText
        fontFamily="InterSemiBold"
        className="text-white tracking-normal text-center text-base"
      >
        {isLoading ? loadingText : children}
      </CustomText>
    </Ripple>
  );
};

export default CustomButton;
