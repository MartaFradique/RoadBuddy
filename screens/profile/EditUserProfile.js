import React  from 'react'
import { View, Image, Pressable, ScrollView } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme'
import { RectangleButton } from '../../components/UI/Buttons'
import  assets  from '../../constants/assets';
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons'; 

import EUHeader from '../../components/userProfile/EditUserHeader';
import EUForms from '../../components/userProfile/EditUserForms';


const EditUserProfile = () => {
 
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {/* <Header /> */}
    <View >

      
      <EUHeader />
      <View >

      
        <Image source={assets.userProfile} style={{width: 100, height: 100, borderRadius: 50, alignSelf: 'center',  zIndex: 1}} />
      
          <View style={{ alignItems: "center", zIndex: 2, top:-10 , left:20}}>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 50,
                  overflow: "hidden",
                  backgroundColor: COLORS.purple,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather name="camera" size={11} color="white" />
              </View>
          </View> 
        </View>



        <EUForms />
      
      

   
    </View>
    </ScrollView>
  )
}

export default EditUserProfile
