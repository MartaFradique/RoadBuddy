import React from 'react'
import { View, Text, Image } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants/theme'
import  assets  from '../../constants/assets'
import { RectangleButton } from '../../components/UI/Buttons'
import DriverInfo   from '../../components/userProfile/DriverInfo'
import Permissions from '../../components/userProfile/Permissions'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";


import { MaterialIcons } from '@expo/vector-icons'; 

const userProfile = () => {

  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: COLORS.mainGreen, height: '20%', borderRadius: 10, margin: 8  }}>
        <View style={{marginTop:'20%'}}>
          <View style={{width: 115, height: 115, backgroundColor: COLORS.bgColor , borderRadius: 100, alignSelf: "center", justifyContent: "center"}}>
          <Image source={assets.userProfile} style={{width: '90%', height: '90%', borderRadius: 50, alignSelf: 'center'}} />
          </View>


          <View style={{}}>
            <Text style={{ fontSize: 20, alignSelf: 'center', fontFamily: FONTS.regular,  marginTop: 17}}>@mauricinho</Text>
            <Text style={{ fontSize: 24, alignSelf: 'center', fontFamily: FONTS.bold, marginTop: 2}}>Mauricio Macri</Text>
          </View>

          <View style={{alignSelf:"center", marginTop: 32, marginBottom:32}}>
          <RectangleButton
            margin={SIZES.small}
            fontSize={SIZES.medium}
            fontFamily={FONTS.bold}
            backgroundColor={COLORS.purple}
            borderRadius={SIZES.small}
            text={"Edit Profile"}
            width={172}
            height={35}
            textColor={"#ffffff"}
            justifyContent="center"
            alignItems="center"

            handlePress={() => navigation.navigate("EditUserProfile")}
          ></RectangleButton>

          </View>

         
        </View>
        <View >
          <DriverInfo text={"+356 915648592"} iconName={"local-phone"} />
          <View style={{ flexDirection:'row', marginLeft: '10%', marginBottom:'8%'}}>
         
            <Image source={assets.mapPin} style={{width: 20, height: 28}} />
            <Text style={{marginLeft:24, fontSize:SIZES.medium , fontFamily: FONTS.regular}} >Barcelos</Text> 
          </View>
          <DriverInfo text={"Portugal"} iconName={"location-on"} />
          <DriverInfo text={"Akrapovic Yamaha YZF R6"} iconName={"sports-motorsports"} />
            
        </View>
      <Text style={{marginLeft: '10%', marginBottom:'6%', marginTop:'2%', fontFamily: FONTS.bold, fontSize: 18}}>
        Permissions
      </Text>
      <Permissions  text={"Share My Location"}/>
      <Permissions text={"Receive Notifications"}/>


      </View>

    </View>
  )
}

export default userProfile