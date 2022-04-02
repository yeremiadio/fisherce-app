import React from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import tw from "../../utils/tw";
import CustomText from "../Texts/CustomText";

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
    <TouchableOpacity
      {...rest}
      onPress={onPress}
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
        fontFamily="InterBold"
        className="text-white tracking-normal text-center text-lg"
      >
        {isLoading ? loadingText : children}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;
