
import { Text, View } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  createNavigationContainerRef,
} from "@react-navigation/native";

import { COLORS } from "./constants/theme";
import { useFonts } from "expo-font";



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.bgColor,
  },
};


export default function App() {


  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    BlackItalic: require("./assets/fonts/Inter-BlackItalic.ttf"),
    InterExtraBold: require("./assets/fonts/Inter-ExtraBold.ttf"),
  });
  if (!loaded) return null;
  
  return (
    <View >
      <Text>Open up App.js to start working on your app!!!!</Text>
     
    </View>
  );
}
