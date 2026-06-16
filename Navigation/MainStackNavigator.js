import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LnSscreens/LoginScreen';
import SignupScreen from '../Screens/LnSscreens/SignupScreen';
import BottomTabNavigator from './BottomTabNavigator';
import BundlesScreen from '../Screens/HomeScreens/BundlesScreen'
import DBScreen from '../Screens/HomeScreens/DBScreen';
import IBScreen from '../Screens/HomeScreens/IBScreen';
import VBScreen from '../Screens/HomeScreens/VBScreen';
import OIBScreen from '../Screens/HomeScreens/OIBScreen';
import OVBScreen from '../Screens/HomeScreens/OVBScreen';


const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        <Stack.Screen name="DB" component={DBScreen} />
        <Stack.Screen name="IB" component={IBScreen} />
        <Stack.Screen name="VB" component={VBScreen} />
        <Stack.Screen name="OIB" component={OIBScreen} />
        <Stack.Screen name="OVB" component={OVBScreen} />
        
        
    </Stack.Navigator>
    
  );
}

export default MainStackNavigator;
