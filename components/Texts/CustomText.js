import React from "react";

import { Text } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_100Thin as InterThin,
  Inter_200ExtraLight as InterExtraLight,
  Inter_300Light as InterLight,
  Inter_400Regular as InterRegular,
  Inter_500Medium as InterMedium,
  Inter_600SemiBold as InterSemiBold,
  Inter_700Bold as InterBold,
  Inter_800ExtraBold as InterExtraBold,
  Inter_900Black as InterBlack,
} from "@expo-google-fonts/inter";
import tw from "../../utils/tw";

const CustomText = ({ fontFamily = "", className = "", children, ...rest }) => {
  let [fontsLoaded] = useFonts({
    InterThin,
    InterExtraLight,
    InterLight,
    InterRegular,
    InterMedium,
    InterBold,
    InterSemiBold,
    InterExtraBold,
    InterBlack,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Text
        style={[
          tw`${className}`,
          { fontFamily: fontFamily ? fontFamily : "InterRegular" },
        ]}
        {...rest}
      >
        {children}
      </Text>
    );
  }
};

export default CustomText;
