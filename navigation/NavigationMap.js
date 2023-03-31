import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Map from"../screens/map/Map";
import AddPoint from "../screens/map/AddPoint";

const NavigationMap = () => {
  return (
    <Stack.Navigator
      initialRouteName="Map"
      screenOptions={{
        headerShown: false,
      }}
    >
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="AddPoint" component={AddPoint} />
    </Stack.Navigator>
  )
}

export default NavigationMap