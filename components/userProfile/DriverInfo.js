import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FONTS, SIZES } from '../../constants/theme';
const DriverInfo = ({text, iconName}) => {
  return (
    <View style={{ flexDirection:'row', marginLeft: '10%', marginBottom:'8%'}}>
         
        <MaterialIcons name={iconName} size={20} color="black" />
        <Text style={{marginLeft:24, fontSize:SIZES.medium , fontFamily: FONTS.regular}} >{text}</Text> 
    </View>
  )
}

export default DriverInfo