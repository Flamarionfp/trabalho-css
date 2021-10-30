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
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 110
  },
  defaultText: {
    fontSize: 18,
    textAlign: 'center',
  },
  textStyleHome: {
    color: "#fff",
    fontFamily: "Inter",
    fontSize:25
  },
  styleDrawer: {
    backgroundColor: '#D9D9D9',
    height: 1000,
    width: 300,
    paddingTop: 400
  },
  styleTouchOpacity: {
    paddingBottom: 30,
    paddingLeft: 20,
    marginBottom: 10,
    fontSize: 25,
    backgroundColor: '#808080',
    height: 60,
    width: 250,
    borderRadius: 25
  }
});

export default globalStyles;
