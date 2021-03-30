import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  
} from 'react-native';

import Drawer from './Drawer';

const App = () =>{

  return(
    
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
    
    
  );
}
export default App;
