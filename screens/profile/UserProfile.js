import React from 'react'
import { View, Text, Image } from 'react-native'
import { COLORS, FONTS } from '../../constants/theme'
import  assets  from '../../constants/assets'

const userProfile = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: COLORS.mainGreen, height: '20%', borderRadius: 10, margin: 8  }}>
        <View style={{marginTop:'25%'}}>
          <View style={{width: 115, height: 115, backgroundColor: COLORS.bgColor , borderRadius: 100, alignSelf: "center", justifyContent: "center"}}>
          <Image source={assets.userProfile} style={{width: 100, height: 100, borderRadius: 50, alignSelf: 'center'}} />
          </View>


          <View style={{}}>
            <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 10, fontFamily: FONTS.regular,  marginTop: 17}}>@mauricinho</Text>
            <Text style={{ fontSize: 24, alignSelf: 'center', marginTop: 10, fontFamily: FONTS.bold, marginTop: 2}}>Mauricio Macri</Text>
          </View>
        
        </View>
        
        
        
      </View>
    </View>
  )
}

export default userProfile