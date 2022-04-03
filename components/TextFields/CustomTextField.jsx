import React, { useState } from "react";
import { TextInput, View } from "react-native";
import tw from "../../utils/tw";
import CustomText from "../Texts/CustomText";

const CustomButton = ({
  value,
  onChangeValue,
  icon,
  fontFamily = "",
  className = "",
  label = "",
  ...rest
}) => {
  const [textFocusInputStyleBorder, setTextFocusInputStyleBorder] = useState(
    "border border-gray-300"
  );
  return (
    <View style={tw`mb-3 w-full`}>
      <CustomText className="tracking-normal text-gray-500 text-base mb-1">
        {label}
      </CustomText>
      <View
        style={tw`${textFocusInputStyleBorder} rounded-lg py-[10px] px-4 bg-white text-base flex flex-row items-center`}
      >
        {icon ? icon : null}
        <TextInput
          style={[tw`${className}`, tw`flex-1`]}
          {...rest}
          onBlur={() => setTextFocusInputStyleBorder("border border-gray-300")}
          onFocus={() => setTextFocusInputStyleBorder("border border-blue-300")}
          underlineColorAndroid="transparent"
          onChangeText={onChangeValue}
          value={value}
          selectionColor={"gray"}
        />
      </View>
    </View>
  );
};

export default CustomButton;
