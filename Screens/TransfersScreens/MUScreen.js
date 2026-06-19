import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput,Pressable } from 'react-native';
import React from 'react';
import {Ionicons, FontAwesome6, SimpleLineIcons, Entypo, FontAwesome, Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import TopTab3Navigator from '../../Navigation/TopTab3Navigator';

const MUScreen = ({navigation}) => {
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
                    <Text style={styles.text}>MoMo User</Text>
                </View>   
                <TouchableOpacity>
                    <Feather name="x" size={30} color="#cccc00" />    
                </TouchableOpacity> 
            </View>
        </View>

        <TopTab3Navigator/>
    </View>
  )
}

export default MUScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
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
        fontSize:26,
        color:'white',
        textAlign:'center',
        fontWeight:'bold'   ,
    },
    body:{
      marginTop: 10,
      padding:10,
    },
    tb:{
        height:75,
        width:'100%',
        borderRadius:20,
        borderWidth:1,
        flexDirection:'row',
        overflow:'hidden'
    },
    textbox:{
        backgroundColor:'white',
        width:'85%',
        fontSize:20,
        fontWeight:'500',
        paddingLeft:20
    },
    icon:{
        width:'20%',
        backgroundColor:'#fff',
        justifyContent:'center',
        // alignItems:'center'
    },
    button:{
        height:50,
        width:'90%',
        backgroundColor:'#ac9b9b',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        verticalAlign:'bottom',
        marginTop:'auto',
        marginBottom:20,
    },
})