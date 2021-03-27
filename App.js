import 'react-native-gesture-handler';
import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () =>{
  const [contador, setContador] = useState(0);

  const global = StyleSheet.create({
    container: {
      
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: 90,
      padding: 35,
    },
    title: {
      color: "black",
      fontSize: 18,
    },
    btn: {
      color: "black",
      padding: "10%",
      backgroundColor: "white",
      borderRadius: "5px",
      alignSelf: "center",
      textAlign: "center",
      margin: "5%",
    },
  });

  const aumentarContador = () =>{
    setContador(contador+1);
  }

  return(
    <View style={global.container}>
      <Text>Texto tocado {contador} veces</Text>
      <Text onPress={aumentarContador} >Hola mundo</Text>
    </View>
  );
}
export default App;
