import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons,Entypo, Feather} from '@expo/vector-icons';
import HomeScreen from '../Screens/HomeScreens/HomeScreen';
import TransfersScreen from '../Screens/TransfersScreens/TransfersScreen';
import ScanQR from '../Screens/ScanQR';
import OffersScreen from '../Screens/OffersScreens/OffersScreen';
import MoreScreen from '../Screens/MoreScreens/MoreScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions = {({route}) => ({
        headerShown:false,
        tabBarActiveTintColor: '#005e80',       // title color when selected
        tabBarInactiveTintColor: 'grey', 
        tabBarLabelStyle:{fontSize:15},
        tabBarStyle: {
          height: 55,
          paddingTop: 5,
        }, // title color when not selected
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

        if (route.name === 'Home') {
          // iconName = focused ? 'home' : 'home-outline';
          return <Ionicons name="home-outline" size={24} color={focused ? '#005e80' : 'grey'} />;
        } else if (route.name === 'Transfers') {
          // iconName = focused ? 'Send' : 'Send-outline';
          return <Feather name="send" size={24} color={focused ? '#005e80' : 'grey'} />;
        } else if (route.name === 'ScanQR') {
          return(
          <View style={styles.qr}>
            <Ionicons name="qr-code" size={45} color={focused ? '#005e80' : 'purple'} />
          </View>
          );
        } else if (route.name === 'Offers') {
          return <Feather name="gift" size={24} color={focused ? '#005e80' : 'grey'} />;
        } else if (route.name === 'More') {
          return <Entypo name="dots-three-horizontal" size={24} color={focused ? '#005e80' : 'grey'} />;
        }
      },

  })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        title: "Home",  
      }} />

      <Tab.Screen name="Transfers" component={TransfersScreen} options={{
        title: "Transfers"        
      }} />

      <Tab.Screen name="ScanQR" component={ScanQR} options={{
        title: "Scan QR",
        tabBarButton: () => null        
      }} />

      <Tab.Screen name="Offers" component={OffersScreen} options={{
        title: "Offers",
        tabBarButton: () => null
      }} />

      <Tab.Screen name="More" component={MoreScreen} options={{
        title: "More",
        tabBarButton: () => null
      }} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  qr:{
    backgroundColor: '#cccc00',
    height:80,
    width:80,
    bottom: 16,   // Or any accent color you want
    // padding: 16,
    borderRadius: 50,             // Makes it circular
    marginBottom: 30,             // Pushes it above the tab bar
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
    // elevation: 6,
  },
})