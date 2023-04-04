import React from 'react'
import {FONTS } from '../../constants/theme'
import { View,  Text, Pressable, } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";


//this component has the top part of the edit user profile screen
const EditUserHeader = () => {
    const navigation = useNavigation();
  return (
    <View style={{ 
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    }}>
      <View styles={{
        
         justifyContent: 'flex-start',
         alignItems: 'flex-start',
      }}
          
      >
        <Pressable
        onPress={() => navigation.navigate("UserProfile")}
        >
          <Ionicons name="chevron-back" size={24} color="black" />

        </Pressable>
     
      </View>
      <View style={{
         
         justifyContent: 'center',
         alignItems: 'center',
      }}>
      <Text style={{fontSize: 16,
         fontFamily: FONTS.semiBold
      }}>Edit Profile</Text>
      </View>
      <View style={{
        
         justifyContent: 'flex-end',
         alignItems: 'flex-end',
      }}>
     <Text>

     </Text>
        
      </View>
    </View>
  )
}

export default EditUserHeader