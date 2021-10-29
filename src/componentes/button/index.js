import React from 'react';
import { Button } from 'react-native';

const ButtonCustom = ({
  onFunction =  () => {},
  value = '',
}) => {
  return (
    <Button title={value} onPress={() => onFunction()} />
  )
}

export default ButtonCustom;