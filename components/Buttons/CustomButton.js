import React from "react";
import { TouchableOpacity } from "react-native";
import tw from "../../utils/tw";
import CustomText from "../Texts/CustomText";

const CustomButton = ({
  onPress,
  fontFamily = "",
  className = "",
  children,
  ...rest
}) => {
  return (
    <TouchableOpacity {...rest} onPress={onPress} style={tw`${className}`}>
      <CustomText fontFamily="InterSemiBold" className="text-white text-center text-[16px]">
        {children}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;
