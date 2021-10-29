import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import Field from './field';
import globalStyles from '../styles/globalStyles.js';
import ButtonCustom from './button';

const Cadastro = ({navigation: {goBack}}) => {
  //printar route
  //console.log(route)

  //const {numeroSelecionado}=route.params

  //hooks
  const [codigo, setCodigo] = useState(null);
  const [nome, setNome] = useState(null);
  const [dataNascimento, setDataNascimento] = useState(new Date());
  const [open, setOpen] = useState(false); //abre e fecha o modal data..default fechado

  return (
    <>
      <ImageBackground>
        <View style={globalStyles.container}>
          <View style={globalStyles.inputContainer}>
            <Field
              label="Código"
              changeText={codigo => setCodigo(codigo)}
              value={codigo}
              keyboardType="numeric"
              placeholder="45864546"
            />
          </View>

          <View style={globalStyles.inputContainer}>
            <Field
              label="Nome"
              changeText={nome => setNome(nome)}
              value={nome}
              placeholder="Pedro"
            />
          </View>

          <ButtonCustom
            value="Escolher a data"
            onFunction={() => setOpen(true)}
          />

          <DatePicker
            modal
            open={open}
            mode={'date'}
            locale="pt-BR"
            style={{width: 250, backgroundColor: '#ccc'}}
            date={dataNascimento}
            onConfirm={date => {
              setOpen(false);
              setDataNascimento(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />

          <Text style={{textAlign: 'center', marginTop: 20, fontSize: 18}}>
            `Data Nascimento: {dataNascimento.toDateString()}`
          </Text>

          <TouchableOpacity onPress={() => goBack()}>
            <View style={{marginTop: 20, marginBottom: 20}}>
              <View style={globalStyles.center}>
                <Text style={{fontSize: 18}}>Cancelar</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={globalStyles.cadastrarBtn}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Cadastro realizado',
                  `Código:${codigo} Nome: ${nome} Data Nascimento: ${dataNascimento}}`,
                  [
                    {
                      text: 'Parabéns :)',
                      onPress: () => goBack(),
                    },
                  ],
                );
              }}>
              <Text style={globalStyles.btnText}>Cadastar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

//definir os estilos aqui
const styles = StyleSheet.create({});
export default Cadastro;
