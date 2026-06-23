import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput,Pressable } from 'react-native';
import React from 'react';
import {Ionicons, FontAwesome6, SimpleLineIcons, Entypo, FontAwesome, Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

const ScheduleScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <View style={styles.head}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    {/* <Ionicons name="chevron-back-sharp" size={30} color="#cccc00" /> */}
                </TouchableOpacity>
                <View>
                    <Text style={styles.text1}>MoMo user</Text>
                </View>   
                <TouchableOpacity style={styles.shead}>
                    <Feather name="x" size={30} color="#cccc00"  />    
                </TouchableOpacity> 
            </View>
        </View>

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
                            placeholder="Reference (optional)"
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
    </View>
  )
}

export default ScheduleScreen

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
        justifyContent:'center',
        flexDirection:'row',
        height:'100%',
        width:'100%',
        paddingTop: 20,
    },
    shead:{
        position:'absolute',
        paddingLeft:'85%',
        bottom:15,
    },
    text1:{
        fontSize:26,
        color:'white',
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