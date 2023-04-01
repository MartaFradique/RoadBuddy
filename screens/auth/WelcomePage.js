import React from 'react'
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import assets from '../../constants/assets';
import {SIZES, FONTS, COLORS} from '../../constants/theme';
import { RectangleButton } from '../../components/UI/Buttons';

const WelcomePage = () => {
  return (
    <ImageBackground source={assets.background_welcome} style={styles.backgroundImage}>
      <View style={styles.contentContainer}>
      <RectangleButton
        margin={SIZES.small}
        fontSize={SIZES.large}
        fontFamily={FONTS.bold}
        backgroundColor={COLORS.purple}
        text={"Sign In"}
        width={"80%"}
        height={SIZES.xxlarge}
        textColor={"#ffffff"}
        justifyContent="center"
        alignItems="center"

        // handlePress={() => {}}
      ></RectangleButton>
      
       <RectangleButton
        margin={SIZES.small}
        fontSize={SIZES.large}
        fontFamily={FONTS.bold}
        
        text={"Create an Account"}
        width={"80%"}
        height={SIZES.xxlarge}
        textColor={"#ffffff"}
        justifyContent="center"
        borderColor= {COLORS.white}
        alignItems="center"
        borderStyle= 'solid'
        borderWidth= '2'
       
      

        // handlePress={() => {}}
      ></RectangleButton>
      </View>
        
     
    </ImageBackground>
  )
}

export default WelcomePage


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // cover or contain depending on your preference
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    
    alignItems: 'center',
    marginTop: '25%'
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});