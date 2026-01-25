import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RPaidScreen from '../Screens/TransfersScreens/RPaidScreen';
import FavScreen from '../Screens/TransfersScreens/FavScreen';
import ScheduledScreen from '../Screens/TransfersScreens/ScheduledScreen';

const TopTab1 = createMaterialTopTabNavigator();

const TopTab1Navigator = () =>{
    return(
        <TopTab1.Navigator
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
            <TopTab1.Screen name="RECENTLY PAID" component={RPaidScreen} />
            <TopTab1.Screen name="FAVOURITES" component={FavScreen} />
            <TopTab1.Screen name="SCHEDULED" component={ScheduledScreen} />

        </TopTab1.Navigator>
    )
}

export default TopTab1Navigator

const styles = StyleSheet.create({})