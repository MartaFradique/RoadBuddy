import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme'

const InputTextUserForms = ({placeholder, onChangeText, value}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const containerStyle = [
    styles.container,
    isFocused && styles.containerFocused,
  ];

  const inputStyle = [
    styles.input,
    isFocused && styles.inputFocused,
  ];

  return (
    <TextInput
        placeholderTextColor=  {COLORS.darkGray}
        style={inputStyle}
        placeholder={placeholder}
        multiline
        numberOfLines={4}
        onChangeText={onChangeText}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  containerFocused: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
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

export default InputTextUserForms;


