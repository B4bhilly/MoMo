import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import {Ionicons, FontAwesome6, SimpleLineIcons, Entypo, FontAwesome, Feather, MaterialCommunityIcons} from '@expo/vector-icons';


const VBScreen = ({navigation}) => {
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
                    <Text style={styles.text}>Video bundles</Text>
                </View>   
                <TouchableOpacity>
                    <Feather name="x" size={30} color="#cccc00" />    
                </TouchableOpacity> 
            </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
            <View>
                <Text style={styles.text3}>Use these packages to stream video services such as IrokoTV, DSTV & YouTube</Text>
            </View>

            <TouchableOpacity style={styles.sbox}>
                <View style={[styles.ibox,{height:'100%'}]}>
                    <View>
                        <Text style={styles.text1}>156.01 MB</Text>
                        <Text style={styles.text3}>Non-expiry</Text>
                    </View>
                    <Text style={styles.text2}>GHS 1</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sbox}>
                <View style={[styles.ibox,{height:'100%'}]}>
                    <View>
                        <Text style={styles.text1}>780.03 MB</Text>
                        <Text style={styles.text3}>Non-expiry</Text>
                    </View>
                    <Text style={styles.text2}>GHS 5</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sbox}>
                <View style={[styles.ibox,{height:'100%'}]}>
                    <View>
                        <Text style={styles.text1}>1.52 GB</Text>
                        <Text style={styles.text3}>Non-expiry</Text>
                    </View>
                    <Text style={styles.text2}>GHS 10</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

export default VBScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
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
        // justifyContent:'center',
        padding:20,
    },
    ibox:{
        height:'70%',
        flexDirection:'row',
        justifyContent:'space-between', 
        alignItems:'center', 
        padding:10,
    },
    text1:{
        fontSize:20,
        fontWeight:'bold',
    },
    text2:{
        fontSize:24,
        color:'#005e80',
        fontWeight:'bold'   ,
    },
    text3:{
        fontSize:16,
        color:'grey',
        fontWeight:'500'   ,
    },
    color:{
        height:'30%',
        width:'100%',
        backgroundColor:'#005e80',
        alignItems:'center',
        justifyContent:'center',
    },
    sbox:{
        marginTop:15,
        height:75,
        width:'100%',
        backgroundColor:'#fff',
        borderRadius:10,
        overflow:'hidden',
    },
})