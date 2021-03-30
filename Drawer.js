import React from 'react';
import {View, Text, Button, TouchableHighlight ,Image} from 'react-native';
import { 
    createDrawerNavigator ,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Contacts from './screens/Contacts';
import Dashboard from './screens/Dashboard';
import Messages from './screens/Messages';
import LOGO from './assets/playstationb.svg';
import { SvgXml } from 'react-native-svg';

const DrawerC = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({navigation}) =>{
    return(
        <Stack.Navigator screenOptions={{
            headerTransparent: true,
            headerTitle: null,
            headerLeft: () =>(
                //<Button title="Menu" containerStyle={{borderRadious: 100}} onPress={()=>navigation.openDrawer() } />
                <TouchableHighlight
                    style={{
                        padding: 10,
                        borderRadius: 10,
                        backgroundColor: '#68a0cf',
                        marginLeft:10,
                        marginTop:10,
                        
                    }}
                    onPress={()=>navigation.openDrawer()}
                >
                    <Text>Menú</Text>
                </TouchableHighlight>
            )
        }} >
            <Stack.Screen name="Dashboard" component={Dashboard}/>
            <Stack.Screen name="Messages" component={Messages} />
            <Stack.Screen name="Contacts" component={Contacts} />
        </Stack.Navigator>
    )
}

const DrawerContent = (props) => {
    return(
        
        < >
            <LOGO
                style={{marginLeft: 15}}
                width={60}
                height={60}
            />
            <DrawerContentScrollView {...props}>
                {/*<DrawerItemList {...props} /> */}
                <DrawerItem
                    label="Dashboard"
                    onPress={() => props.navigation.navigate("Dashboard")}
                />
                <DrawerItem
                    label="Contacts"
                    onPress={() => props.navigation.navigate("Contacts")}
                />
                <DrawerItem
                    label="Messages"
                    onPress={() => props.navigation.navigate("Messages")}
                />
            </DrawerContentScrollView>
        </>
    );
}

export default () =>{

    return(
        <DrawerC.Navigator initialRouteName="Dashboard" drawerContent={(props) => <DrawerContent {...props} />}  >
            <DrawerC.Screen name="Screens" component={Screens}/>

        </DrawerC.Navigator>
    )
}