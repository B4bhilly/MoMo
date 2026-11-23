import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Ionicons, Feather, } from '@expo/vector-icons';
import OTPInput from '../Screens/OTPInput';


const OTPScreen = ({navigation}) => {

const handleNavigationToBottomTab =() =>{
    navigation.navigate('BottomTab');
  };

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
                    <Text style={styles.text}>OTP</Text>
                </View>   
                <TouchableOpacity>
                    <Feather name="x" size={30} color="#cccc00" />    
                </TouchableOpacity> 
            </View>
        </View>

        <View style={styles.body}>
            <Text style={[styles.text,{color:'#005e80', marginBottom:30}]}>OTP sent to ******* </Text> 
            <View>
                <OTPInput/>
            </View>
            <View style={{marginTop:20}}>
            </View>
        </View>
        <View style={styles.bottom}>
            <TouchableOpacity onPress={handleNavigationToBottomTab} style={styles.button}>
                <Text style={styles.text}>NEXT</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default OTPScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        height:'100%',
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
        marginTop: 25,
        alignItems:'center',
        // padding:20,
    },
    bottom:{
        marginTop: 'auto',
        marginBottom: 20,        
    },
    button:{
        height: 70,
        width:'80%',
        backgroundColor:'#005e80',
        borderRadius:50,
        justifyContent:'center',
        alignSelf:'center',
    },
})