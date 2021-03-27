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

  const aumentarContador = () =>{
    setContador(contador+1);
  }

  return(
    <View>
      <Text>Texto tocado {contador} veces</Text>
      <Text onPress={()=>{
        aumentarContador();
      }} >Hola mundo</Text>
    </View>
  );
}
export default App;
