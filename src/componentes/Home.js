import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Estilo from '../styles/globalStyles.js';

const Home = props => {
  const [appear, setAppear] = React.useState(false);  
  const navigation = useNavigation();

  function abrirDrawer() {
      setAppear(open => !open);
  }

  function fechar() {
    setAppear(false);
}

  return (
    <>
      {/* //é o que vai ser redenrizado */}
    <TouchableOpacity onPress={fechar}>
    {appear === false 
      ? <TouchableOpacity style={Estilo.styleTouchOpacity} onPress={abrirDrawer}>
            <Text style={Estilo.textStyleHome}>
                ABRIR O DRAWER
            </Text>
        </TouchableOpacity>
      : <View style={Estilo.styleDrawer}>
            <TouchableOpacity 
                style={Estilo.styleTouchOpacity} 
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Text style={Estilo.textStyleHome}>Cadastro</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={Estilo.styleTouchOpacity} 
                onPress={() => navigation.navigate('Notas')}
            >
                <Text style={Estilo.textStyleHome}>Notas</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={Estilo.styleTouchOpacity} 
                onPress={() => navigation.navigate('Perfil')}
            >
                <Text style={Estilo.textStyleHome}>Perfil do Aluno</Text>
            </TouchableOpacity>
        </View>
      }
    </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({});
export default Home;
