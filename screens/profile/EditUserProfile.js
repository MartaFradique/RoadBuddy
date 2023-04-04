import React, { useState }  from 'react'
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme'
import { RectangleButton } from '../../components/UI/Buttons'
import { Ionicons } from '@expo/vector-icons'; 


const EditUserProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // You can perform other actions here, such as sending the form data to a server
  };



  return (
    <View style={{margin:8}}>
      <View style={{ }}>
        <View>
        <Ionicons name="chevron-back" size={24} color="black" />
        </View>
        <View>
        <Text style={{fontSize: 16, fontFamily: FONTS.semiBold, marginBottom: '5%', marginTop: 2, alignItems: 'center'}}>Edit Profile</Text>
        </View>
        <View>
        <Ionicons name="chevron-back" size={24} color="black" />

          
        </View>
          
         
          
      </View>
   <View style={styles.container}>
      <Text style={styles.text}>Edit Profile</Text>
      <TextInput
         placeholderTextColor=  {COLORS.darkGray}
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.text}>Edit Profile</Text>
      <TextInput
         placeholderTextColor=  {COLORS.darkGray}
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.text}>Edit Profile</Text>
      <TextInput
         placeholderTextColor=  {COLORS.darkGray}
        style={styles.input}
        placeholder="Message"
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
      />
      <Text style={styles.text}>Edit Profile</Text>
        <TextInput
           placeholderTextColor=  {COLORS.darkGray}
        style={styles.input}
        placeholder="Message"
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
      />
      <Text style={styles.text}>Edit Profile</Text>
        <TextInput
          placeholderTextColor=  {COLORS.darkGray}
        style={styles.input}
        placeholder="Message"
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
      />
      <Text style={styles.text}>Edit Profile</Text>
        <TextInput
        style={styles.input}
        placeholderTextColor=  {COLORS.darkGray}
        placeholder="Message"
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
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

            handlePress={{handleSubmit}}
          ></RectangleButton>
    </View>
    </View>
  )
}

export default EditUserProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal:'10%',
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
  },
  text:{
    fontSize: 16,
    // alignSelf: 'center', 
    alignSelf: 'flex-start',
    fontFamily: FONTS.semiBold, 
    marginTop: 2,
    marginBottom: 5

  }
});

