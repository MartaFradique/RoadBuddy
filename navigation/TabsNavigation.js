import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import { View, Text, StyleSheet ,  Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import List from "../screens/List";
import Map from "./NavigationMap";
import Profile from "./NavigationProfile";

import { COLORS } from "../constants/theme";

import {IconSelected, IconUnselected } from "../components/UI/BottomBarIcons";

const TabsNavigation = (props) => {
  const screenWidth = Dimensions.get('window').width;
  // const hide = props.routename != "list" ; to use in the future for the pages that dont have the bottom bar 

  let icon = (route, color, focused) => {
    if (route.name === "list") {
      if (!focused) {
        return <IconSelected name="format-list-bulleted" size={24} />;
      } else {
        return (
          <IconUnselected name="format-list-bulleted" size={24} /> 
        );
      }
    } else if (route.name === "map") {
      if (!focused) {
        return <IconSelected name="location-on" size={24} />;
      } else {
        return (
          <IconUnselected name="location-on" size={24} /> 
        );
      }
    } else if (route.name === "profile") {
      if (!focused) {
        return <IconSelected name="sports-motorsports" size={24} />;
      } else {
        return (
          <IconUnselected name="sports-motorsports" size={24}  /> 
        );
      }
    }

  };
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
        screenOptions={({ route, focused }) => ({
          showLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            return icon(route, color, focused);
          },
          // tabBarActiveTintColor: COLORS.darkGreen,
          // tabBarInactiveTintColor: COLORS.gray2,
          // tabBarLabelStyle: {
          //   fontSize: 12,
          //   fontFamily: "InterMedium",
          //   bottom: 5,
          // },
          tabBarStyle: {
            ...styles.bottomTab,
            width: screenWidth 
          },
        })}
        initialRouteName="map"
      >
      
      <Tab.Screen name="list" component={List} />
      <Tab.Screen name="map" component={Map} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>


);
};

export default TabsNavigation



const styles = StyleSheet.create({
  bottomTab: {
    position: "flex",
    height: 58,
    bottom: 0,
    zIndex: 2,

    backgroundColor: COLORS.purple,
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    padding: 10,
    

    //transform: [{ translateY: -10 }],
  },
  pressed: {
    opacity: 0.5,
  },
});
