import React, { useState } from 'react';
import { View, Switch, Text } from 'react-native';
import { FONTS, SIZES } from '../../constants/theme';

const Permissions = ({text}) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
   <View style={{ flexDirection:'row',  marginLeft: '10%', marginBottom:'8%', justifyContent: 'space-between', marginRight: '10%',}}>
        <Text style = {{fontSize: SIZES.medium}}>{text}</Text>
        <Switch
        trackColor={{ false: "#CDCDCD", true: "#00C896" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
   </View>
  )
}

export default Permissions