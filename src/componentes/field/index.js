import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const Field = ({
  label = '',
  changeText = () => {},
  value,
  keyboardType = 'default',
  placeholder
}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={changeText()}
        value={value}
        selectTextOnFocus={true}
        keyboardType={keyboardType}
        placeholder={placeholder || ''}
        placeholderTextColor="#666"
      />
    </>
  );
};

export default Field;
