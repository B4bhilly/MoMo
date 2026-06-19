import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput,Pressable } from 'react-native';
import React from 'react';
import {Ionicons, FontAwesome6, SimpleLineIcons, Entypo, FontAwesome, Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

const CVScreen = ({navigation}) => {
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
                    <Text style={styles.text}>Create voucher</Text>
                </View>   
                <TouchableOpacity>
                    <Feather name="x" size={30} color="#cccc00" />    
                </TouchableOpacity> 
            </View>
        </View>

        <View style={styles.body}>
            <View style={[styles.tb,{marginTop:5}]}>
                <TextInput
                    placeholder="Recipient name *"
                    placeholderTextColor={'black'}
                    value={Number}
                    keyboardType="default"
                    maxLength={10}
                    style={[styles.textbox,{width:'100%'}]}
                          
                />
            </View>

            <View style={styles.tb}>
                <TextInput
                    placeholder="Enter Number *"
                    placeholderTextColor={'black'}
                    value={Number}
                    keyboardType="numeric"
                    maxLength={10}
                    style={styles.textbox}
                     
                />
                <Pressable style={styles.icon}>
                    <AntDesign name="user-add" size={30} color="black" />
                </Pressable>
            </View>
        
            <View style={styles.tb}>
                <View style={styles.icon}>
                    <Text style={styles.cedi}>GHS</Text>
                </View>
                <TextInput
                    placeholder="Amount*"
                    placeholderTextColor={'black'}
                    value={Number}
                    keyboardType="numeric"
                    maxLength={10}
                    textAlign='right'
                    style={[styles.textbox,{paddingRight:20}]}
                          
                />
            </View>

            <Text style={styles.text1}>Available balance: GHS 0.00</Text>

            <View style={styles.tb}>
                <TextInput
                    placeholder="Enter secret code *"
                    placeholderTextColor={'black'}
                    value={Number}
                    keyboardType="numeric"
                    maxLength={10}
                    style={[styles.textbox,{width:'100%'}]}
                          
                />
            </View>

            <View style={styles.tb}>
                <TextInput
                    placeholder="Reason (optional)"
                    placeholderTextColor={'black'}
                    value={Number}
                    keyboardType='default'
                    maxLength={10}
                    style={[styles.textbox,{width:'100%'}]}
                          
                />
            </View>
                </View>
        
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize:20,fontWeight:'bold', color:'white'}}>NEXT</Text>
                </TouchableOpacity>
    </View>
  )
}

export default CVScreen

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
        // marginTop:20,
        alignContent:'center',
        padding:10,
        paddingTop:5,
        paddingHorizontal:20,
    },
    tb:{
        height:75,
        width:'100%',
        borderRadius:20,
        borderWidth:1,
        flexDirection:'row',
        overflow:'hidden',
        marginTop:25,
    },
    textbox:{
        backgroundColor:'white',
        width:'80%',
        fontSize:20,
        fontWeight:'500',
        paddingLeft:20,
    },
    icon:{
        width:'20%',
        backgroundColor:'#fff',
        justifyContent:'center',
        // alignItems:'center'
    },
    cedi:{
        justifyContent:'center',
        fontSize:25,
        fontWeight:'bold',
        alignSelf:'center',

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
    text1:{
        fontSize:16, 
        fontWeight:'600', 
        textAlign:'right', 
        marginRight:20,
        marginTop:5,
    },
})