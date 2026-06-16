import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screens/HomeScreens/HomeScreen';
import BundlesScreen from '../Screens/HomeScreens/BundlesScreen';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen}/>
      <Stack.Screen name="Bundles" component={BundlesScreen}/>
    </Stack.Navigator>
  );
}