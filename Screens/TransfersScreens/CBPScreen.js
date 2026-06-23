import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput,Pressable } from 'react-native';
import React from 'react';
import {Ionicons, FontAwesome6, SimpleLineIcons, Entypo, FontAwesome, Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import TopTab4Navigator from '../../Navigation/TopTab4Navigator';

const CBPScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <View style={styles.head}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="chevron-back-sharp" size={30} color="#cccc00" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.text}>Cross Border Payment</Text>
                </View>   
                <TouchableOpacity>
                    <Feather name="x" size={30} color="#cccc00" />    
                </TouchableOpacity> 
            </View>
        </View>

        <TopTab4Navigator/>
    </View>
  )
}

export default CBPScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    top:{
        height:100,
        backgroundColor:'#005e80',
        padding:10,
    },
    head: {
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        height:'100%',
        width:'100%',
        paddingTop: 20,
    },
    text:{
        fontSize:22,
        color:'white',
        textAlign:'center',
        fontWeight:'bold'   ,
    },
})