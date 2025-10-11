import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LnSscreens/LoginScreen';
import SignupScreen from '../Screens/LnSscreens/SignupScreen';
import MainTab from './BottomTabNavigator';
import HomeScreen from '../Screens/HomeScreens/HomeScreen';
import TransfersScreen from '../Screens/TransfersScreens/TransfersScreen';
import OffersScreen from '../Screens/OffersScreens/OffersScreen'
import MoreScreen from '../Screens/MoreScreens/MoreScreen';
import BottomTabNavigator from './BottomTabNavigator';


const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Transfer" component={TransfersScreen} />
        <Stack.Screen name="Offer" component={OffersScreen} />
        <Stack.Screen name="More" component={MoreScreen} />
    </Stack.Navigator>
    
  );
}

export default MainStackNavigator
