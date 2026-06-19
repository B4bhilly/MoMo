import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput,Pressable } from 'react-native';
import React from 'react';
import {Ionicons, FontAwesome6, SimpleLineIcons, Entypo, FontAwesome, Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';


const OIBScreen = ({navigation}) => {
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
                    <Text style={styles.text}>Bundles</Text>
                </View>   
                <TouchableOpacity>
                    <Feather name="x" size={30} color="#cccc00" />    
                </TouchableOpacity> 
            </View>
        </View>

        <View style={styles.body}>
            <View style={styles.cont}>
                <TouchableOpacity style={styles.box}>
                    <View style={styles.image}>
                        <Image
                            source={require('../../assets/Images/Mtn.png')}
                            style={styles.size}
                            resizeMode="stretch"
                        
                        />
                    </View>
                    <Text style={styles.text1}>MTN</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity style={styles.box}>
                    <View style={styles.image}>
                        <Image
                            source={require('../../assets/Images/At.png')}
                            style={styles.size}
                            resizeMode="stretch"
                        
                        />
                    </View>
                    <Text style={styles.text1}>AT</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    <View style={styles.image}>
                        <Image
                            source={require('../../assets/Images/Telecel.png')}
                            style={styles.size}
                            resizeMode="stretch"
                        
                        />
                    </View>
                    <Text style={styles.text1}>Telecel</Text>
                </TouchableOpacity>
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
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={{fontSize:20,fontWeight:'bold', color:'white'}}>NEXT</Text>
        </TouchableOpacity>
    </View>
  )
}

export default OIBScreen

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
        padding:10,
    },
    cont:{
    width:'100%',
    flexDirection:'row',
    marginVertical: 30,
    justifyContent:'space-between',
    // backgroundColor:'red',
    paddingHorizontal:10,
    },
     box: {
        height:90,
        width:100,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text1: {
        color:'grey',
        fontWeight:'500',
        marginTop:5,
        fontSize:16,
    },
    image:{
        height:35,
        width:35,
        backgroundColor:'black',
        borderRadius:50,
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center',
    },
    size:{
        height:'100%',
        width:'100%',
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