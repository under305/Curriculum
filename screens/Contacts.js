import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

const Contacts = ({navigation}) =>{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Text>Contacts</Text>
            <Button title="Ir a dashboard" onPress={()=>navigation.navigate("Dashboard")} />
        </View>
    );
}

export default Contacts;