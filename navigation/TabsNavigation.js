import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import { View, Text, StyleSheet ,  Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import WelcomePage from "../screens/auth/WelcomePage";
import Map from "./NavigationMap";
import Profile from "./NavigationProfile";
import List from "../screens/List";

import { COLORS } from "../constants/theme";

import {IconSelected, IconUnselected } from "../components/UI/BottomBarIcons";

const TabsNavigation = (props) => {
  const screenWidth = Dimensions.get('window').width;
  // const hide = props.routename != "list" ; to use in the future for the pages that dont have the bottom bar 

  let icon = (route, color, focused) => {
    if (route.name === "List") {
      if (!focused) {
        return <IconSelected name="format-list-bulleted" size={24} />;
      } else {
        return (
          <IconUnselected name="format-list-bulleted" size={24}  sizeBall={42} color={COLORS.mainGreen}  colorIcon={'white'}/> 
        );
      }
    } else if (route.name === "Map") {
      if (!focused) {
        return <IconSelected name="location-on" size={24} />;
      } else {
        return (
          <IconUnselected name="location-on" size={24}  sizeBall={42} color={COLORS.mainGreen} colorIcon={'white'}/> 
        );
      }
    } else if (route.name === "Profile") {
      if (!focused) {
        return <IconSelected name="sports-motorsports" size={24} />;
      } else {
        return (
          <IconUnselected name="sports-motorsports" size={24} sizeBall={42} color={COLORS.mainGreen} colorIcon={'white'}  /> 
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
        tabBarOptions={{
          showLabel: false
        }}
        initialRouteName="Profile"
      >
      
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Profile" component={Profile} />
     
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
