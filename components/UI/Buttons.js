import React from 'react';
import {Pressable, Text} from 'react-native';
import {SIZES} from '../../constants/theme';

export const RectangleButton = ({
  // handlePress,
  text,
  fontSize,
  fontFamily,
  textColor,
  ...props
}) => {
    return (
      <Pressable
      style={{
      
        padding: SIZES.small,
        minWidth: 20,
        ...props,
      }}
      // onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: fontFamily,
          fontSize: fontSize,
          color: textColor,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </Pressable>
    );
 };




  