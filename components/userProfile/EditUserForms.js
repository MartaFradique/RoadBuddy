import React, { useState }  from 'react'
import { View, TextInput,StyleSheet, Text, Image, Pressable, ScrollView } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme'
import { RectangleButton } from '../UI/Buttons'
import  assets  from '../../constants/assets';
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons'; 


const EditUserForms = () => {

    const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
   

    navigation.navigate("UserProfile");
  };




  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // const inputStyle = {
  //   ...styles.input,
  //   ...(isFocused && styles.inputFocused),
  // };

  const containerStyle = [
    styles.container,
    isFocused && styles.containerFocused,
  ];

  const inputStyle = [
    styles.input,
    isFocused && styles.inputFocused,
  ];

  return (
    <View style={styles.container}>
    <Text style={styles.text}>Edit Profile</Text>
    <TextInput
       placeholderTextColor=  {COLORS.darkGray}
       style={inputStyle}
      placeholder="Name"
      value={name}
      onChangeText={setName}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
    <Text style={styles.text}>Edit Profile</Text>
    <TextInput
       placeholderTextColor=  {COLORS.darkGray}
       style={inputStyle}
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
    <Text style={styles.text}>Edit Profile</Text>
    <TextInput
       placeholderTextColor=  {COLORS.darkGray}
       style={inputStyle}
      placeholder="Message"
      multiline
      numberOfLines={4}
      value={message}
      onChangeText={setMessage}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
    <Text style={styles.text}>Edit Profile</Text>
      <TextInput
         placeholderTextColor=  {COLORS.darkGray}
         style={inputStyle}
      placeholder="Message"
      multiline
      numberOfLines={4}
      value={message}
      onChangeText={setMessage}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
    <Text style={styles.text}>Edit Profile</Text>
      <TextInput
        placeholderTextColor=  {COLORS.darkGray}
        style={inputStyle}
      placeholder="Message"
      multiline
      numberOfLines={4}
      value={message}
      onChangeText={setMessage}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
    <Text style={styles.text}>Edit Profile</Text>
      <TextInput
     style={inputStyle}
      placeholderTextColor=  {COLORS.darkGray}
      placeholder="Message"
      multiline
      numberOfLines={4}
      value={message}
      onChangeText={setMessage}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
    
    <RectangleButton
          fontSize={SIZES.medium}
          fontFamily={FONTS.bold}
          backgroundColor={COLORS.purple}
          borderRadius={SIZES.small}
          text={"Edit Profile"}
          width={'100%'}
          height={40}
          textColor={"#ffffff"}
          justifyContent="center"
          alignItems="center"

          handlePress={handleSubmit}
          marginTop={20}
        
        ></RectangleButton>
    
    
    </View>
  )
}

export default EditUserForms




const styles = StyleSheet.create({
    container: {
      // flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginHorizontal:'10%',
    },
    input2: {
      alignSelf: 'center',
      width: '100%',
      height: 40,
      borderColor: COLORS.darkGray,
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
    },
    text:{
      fontSize: 16,
      // alignSelf: 'center', 
      alignSelf: 'flex-start',
      fontFamily: FONTS.semiBold, 
      marginTop: 2,
      marginBottom: 5
  
    },
    input: {
      alignSelf: 'center',
      width: '100%',
      height: 40,
      borderColor: COLORS.darkGray,
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
      outlineColor: 'transparent',
      outlineStyle: 'none',
    },
    inputFocused: {

      borderColor: COLORS.mainGreen,
      borderBottomWidth: 4,
      padding: 12,
    },

  });
  
  