import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SIZES, FONTS } from "../../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function BackButton({ navigation, initialScreen }) {
  const handleGoBack = () => {
    if (initialScreen) {
      navigation.reset({
        index: 0,
        routes: [{ name: initialScreen }],
      });
    } else {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.medium,
        marginLeft: SIZES.medium,
        marginBottom: SIZES.medium,
      }}
      onPress={handleGoBack}
    >
      <Ionicons name="chevron-back" size={18} color="black" />
      <Text
        style={{
          fontFamily: FONTS.font,
          fontSize: SIZES.small,
          marginLeft: 2,
        }}
      >
        Voltar
      </Text>
    </TouchableOpacity>
  );
}
