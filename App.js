import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./components/Screens/LoginScreen";
import RegisterScreen from "./components/Screens/RegisterScreen";
import HomeScreen from "./components/Screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*

  {isLoggedIn ? (
          // Screens for logged in users
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Group>
        ) : (
          // Auth screens
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Group>
        )}
        {/* Common modal screens */
// <Stack.Group screenOptions={{ presentation: "modal" }}>
//   <Stack.Screen name="Help" component={Help} />
//   <Stack.Screen name="Invite" component={Invite} />
// </Stack.Group>

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
