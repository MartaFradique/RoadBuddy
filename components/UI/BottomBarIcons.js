import { SIZES, FONTS, COLORS } from "../../constants/theme";
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export const IconSelected = ({ name, size, color }) => {
    return (
        <MaterialIcons name={name} size={size}  color="white" />
    );

};

export const IconUnselected = ({ name, size, color }) => {
    return (
     

        <View style={{ alignItems: "center", padding: 10 }}>
          <View
            style={{
              width: 42,
              height: 42,
              borderRadius: 50,
              overflow: "hidden",
              backgroundColor: COLORS.mainGreen,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons name={name} size={size} color="white" />
          </View>
    </View>
       
    );

};

