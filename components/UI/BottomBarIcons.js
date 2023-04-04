import { SIZES, FONTS, COLORS } from "../../constants/theme";
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export const IconSelected = ({ name, size, color }) => {
    return (
        <MaterialIcons name={name} size={size}  color="white" />
    );

};

export const IconUnselected = ({ name, size, sizeBall, color, colorIcon}) => {
    return (
     

        <View style={{ alignItems: "center", padding: 10 }}>
          <View
            style={{
              width: sizeBall,
              height: sizeBall,
              borderRadius: 50,
              overflow: "hidden",
              backgroundColor: color,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons name={name} size={size} color={colorIcon} />
          </View>
    </View>
       
    );

};

