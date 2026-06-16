import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RPScreen from '../Screens/HomeScreens/RPScreen';
import BalancesScreen from '../Screens/HomeScreens/BalancesScreen';

const TopTab2 = createMaterialTopTabNavigator();

const TopTab2Navigator = () =>{
    return(
        <TopTab2.Navigator
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
                tabBarInactiveTintColor:'rgba(0, 94, 128, 0.4)'
        
            }}
        >
            <TopTab2.Screen name="RECENTLY PURCHASED" component={RPScreen} />
            <TopTab2.Screen name="BALANCES" component={BalancesScreen} />

        </TopTab2.Navigator>
    )
}

export default TopTab2Navigator

const styles = StyleSheet.create({})