import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import LogIn from"../screens/auth/LogIn";
import Register from "../screens/auth/Register";
import WelcomePage from "../screens/auth/WelcomePage";

const NavigationMap = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomePage"
      screenOptions={{
        headerShown: false,
      }}
    >
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
    </Stack.Navigator>
  )
}

export default NavigationMap