import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ForYouScreen from '../Screens/HomeScreens/ForYouScreen';
import PayScreen from '../Screens/HomeScreens/PayScreen';
import BuyScreen from '../Screens/HomeScreens/BuyScreen';
import FServiceScreen from '../Screens/HomeScreens/FServiceScreen';

const TopTab0 = createMaterialTopTabNavigator();

const TopTab6Navigator = () => {
  return (
    <TopTab0.Navigator
        screenOptions={{
            tabBarLabelStyle:{fontSize:18, fontWeight:'bold'},
            tabBarIndicatorStyle:{
                backgroundColor:'#cccc00',
                height:4,
                width:0.5,
                marginLeft:'auto',
                marginRight:'auto',
            },
            tabBarStyle:{backgroundColor:'#fff'},
            headerShown: false, 
            tabBarScrollEnabled:true,
            tabBarItemStyle:{
                width:'auto'
            },
            tabBarActiveTintColor:'#005e80',
            tabBarInactiveTintColor:'rgba(0, 94, 128, 0.4)',
            
        }}
    >
        <TopTab0.Screen name="RECENTLY PURCHASED" component={ForYouScreen} />
        <TopTab0.Screen name="BALANCES" component={PayScreen} />
    </TopTab0.Navigator>
  )
}

export default TopTab6Navigator;

const styles = StyleSheet.create({})