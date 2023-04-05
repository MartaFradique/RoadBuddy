import React, { useState }  from 'react'
import { View, TextInput,StyleSheet, Text, Image, Pressable, ScrollView } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme'
import { RectangleButton } from '../UI/Buttons'
import  assets  from '../../constants/assets';
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons'; 
import InputTextUserForms from './InputTextUserForms';


import { validateName, validateUsername, validateEmail, validatePhoneNumber, validateCity, validateCountry } from './ValidationUserForms';


const EditUserForms = () => {

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState('');

  const [country, setCountry] = useState('');
  const [countryError, setCountryError] = useState('');

  const handleSubmit = () => {
    console.log(`Name: ${name}, Email: ${email}, Username: ${username}, Phone Number: ${phoneNumber}, City: ${city}, Country: ${country}`);
   

    navigation.navigate("UserProfile");
  };


  const handleUsernameChange = (text) => {
    setUsername(text);
    setUsernameError(validateUsername(value));
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError(validateEmail(value));
  };

  const handleNameChange = (text) => {
    setName(text);
    setNameError(validateName(value));
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
    setPhoneNumberError(validatePhoneNumber(value));
  };

  const handleCityChange = (text) => {
    setCity(text);
    setCityError(validateCity(value));
  };

  const handleCountryChange = (text) => {
    setCountry(text);
    setCountryError(validateCountry(value));
  };




  return (
    <View style={styles.container}>
    <Text style={styles.text}>Name</Text>
      <InputTextUserForms 
        placeholder="Name"
        onChangeText={handleNameChange}
        value={name}
      />
    <Text style={styles.text}>Username</Text>
      <InputTextUserForms 
        placeholder="Username"
        onChangeText={handleUsernameChange}
        value={username}
      />
    <Text style={styles.text}>Email</Text>
      <InputTextUserForms 
        placeholder="Email"
        onChangeText={handleEmailChange}
        value={email}
      />
    <Text style={styles.text}>Phone Number</Text>
      <InputTextUserForms 
        placeholder="Phone Number"
        onChangeText={handlePhoneNumberChange}
        value={phoneNumber}
      />
   
    <Text style={styles.text}>City</Text>
      <InputTextUserForms 
        placeholder="City"
        onChangeText={handleCityChange}
        value={city}
      />
     <Text style={styles.text}>Country</Text>
      <InputTextUserForms 
        placeholder="Country"
        onChangeText={handleCountryChange}
        value={country}
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
  
  