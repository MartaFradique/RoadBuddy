import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import UserProfile from"../screens/profile/UserProfile";
import EditUserProfile from "../screens/profile/EditUserProfile";

const NavigationMap = () => {
  return (
    <Stack.Navigator
      initialRouteName="EditUserProfile"
      screenOptions={{
        headerShown: false,
      }}
    >
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="EditUserProfile" component={EditUserProfile} />
    </Stack.Navigator>
  )
}

export default NavigationMap