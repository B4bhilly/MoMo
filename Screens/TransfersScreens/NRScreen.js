import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput,Pressable, KeyboardAvoidingView, Platform} from 'react-native';
import React from 'react';
import {Ionicons, Entypo,  AntDesign} from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';

const NRScreen = ({route}) => {
    const oF = route?.params?.oF ?? false;
  return (

    <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
    >
        {oF &&(
            <View style={styles.body}>
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
                <Text style={styles.text}>Available balance: GHS 0.00</Text>

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
                    
                <View>

                </View>
            </View>
        )} 

        {!oF &&(
            <View style={styles.body}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.tb1}></TouchableOpacity>
                    <View style={[styles.tb,{width:'75%'}]}>
                        <TextInput
                            placeholder="Mobile Number *"
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
                </View>

                <View style={styles.tb}>
                    <View style={styles.icon}>
                        <Text style={styles.cedi}>GHS</Text>
                    </View>
                    <TextInput
                    placeholder="Amount *"
                    placeholderTextColor={'black'}
                    value={Number}
                    keyboardType="numeric"
                    maxLength={10}
                    textAlign='right'
                    style={[styles.textbox,{paddingRight:20}]}
                    
                    />
                </View>
                <Text style={styles.text}>Available balance: GHS 0.00</Text>
                
                <View style={styles.tb}>
                    <TextInput
                    placeholder="Purpose of funds *"
                    placeholderTextColor={'black'}
                    value={Number}
                    keyboardType='default'
                    maxLength={10}
                    style={styles.textbox}
                    
                    />
                    <Pressable style={styles.icon}>
                            <Ionicons name="chevron-down-sharp" size={30} color="black" />
                    </Pressable>
                </View>

                <View style={styles.tb}>
                    <TextInput
                    placeholder="Reason"
                    placeholderTextColor={'black'}
                    value={Number}
                    keyboardType='default'
                    maxLength={10}
                    style={[styles.textbox,{width:'100%'}]}
                    
                    />
                </View>
                    
                <View>

                </View>
            </View>
        )}      

        <TouchableOpacity style={styles.button}>
            <Text style={{fontSize:20,fontWeight:'bold', color:'white'}}>NEXT</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default NRScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
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
    tb1:{
        height:85,
        width:'25%',
        borderRadius:20,
        borderWidth:1,
        flexDirection:'row',
        overflow:'hidden',
        marginTop:25,
        marginRight:5,
    },
    textbox:{
        backgroundColor:'white',
        width:'80%',
        fontSize:22,
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
    text:{
        fontSize:16, 
        fontWeight:'600', 
        textAlign:'right', 
        marginRight:20,
        marginTop:5,
    },
})