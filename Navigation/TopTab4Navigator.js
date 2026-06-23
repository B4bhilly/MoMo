import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RPScreen from '../Screens/HomeScreens/RPScreen';
import NRScreen from '../Screens/TransfersScreens/NRScreen';


const TopTab3 = createMaterialTopTabNavigator();

const TopTab4Navigator = () =>{
    return(
        <TopTab3.Navigator
            screenOptions={{
                tabBarStyle: {
                    marginTop: 20,
                    marginBottom:10,
                    marginHorizontal: 30,
                    height: 45,
                    borderRadius: 25,
                    backgroundColor: '#F2F2F2', // outer grey background
                    elevation: 0,
                    shadowOpacity: 0,
                    overflow: 'hidden',
                },

            tabBarIndicatorStyle: {
                backgroundColor: '#FFFFFF', // white selected tab
                height: '85%',
                width:'48%',
                borderRadius: 25,
                margin: 3,
            },

            tabBarLabelStyle: {
                fontSize: 15,
                fontWeight: 'bold',
                textTransform: 'none',
            },

            tabBarActiveTintColor: '#005E80',
            tabBarInactiveTintColor: '#666',

            tabBarPressColor: 'transparent',
        
            }}
        >
            <TopTab3.Screen name="New recipient" component={NRScreen} initialParams={{oF: false}} /> 
            <TopTab3.Screen name="Favourites" component={RPScreen} />

        </TopTab3.Navigator>
    )
}

export default TopTab4Navigator

const styles = StyleSheet.create({})