import React from 'react';
import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
  },
  inputContainer: {
    marginVertical: 15,
  },
  cadastrarBtn: {
    backgroundColor: '#0b1a7a',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    height: 50,
    textTransform: 'uppercase',
    paddingTop: 10,
  },
  center:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  defaultText: {
    fontSize: 18,
    textAlign: 'center',
  }
});

export default globalStyles;
