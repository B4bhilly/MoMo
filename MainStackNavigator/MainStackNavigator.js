import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/login/LoginScreen';


const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
    </Stack.Navigator>
    
  );
}

export default MainStackNavigator
