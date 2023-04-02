import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

import LogIn from"../screens/auth/LogIn";
import Register from "../screens/auth/Register";
import WelcomePage from "../screens/auth/WelcomePage";

const NavigationMap = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName=""
      screenOptions={{
        headerShown: false,
      }}
    >
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
    </Stack.Navigator>WelcomePage
    </NavigationContainer>
  )
}

export default NavigationMap