import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput,Pressable } from 'react-native';
import React from 'react';
import {Ionicons, FontAwesome6, SimpleLineIcons, Entypo, FontAwesome, Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

const ONScreen = ({navigation}) => {
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
                    <Text style={styles.text}>Other networks</Text>
                </View>   
                <TouchableOpacity>
                    <Feather name="x" size={30} color="#cccc00" />    
                </TouchableOpacity> 
            </View>
        </View>

        <View style={{marginTop:10}}>
            <TouchableOpacity style={styles.box}>
                <View style={styles.bstyle}>
                    <View style={styles.image}>
                        <Image
                            source={require('../../assets/Images/Telecel.png')}
                            style={styles.size}
                            resizeMode="stretch"
                        
                        />
                    </View>
                    <Text style={styles.text1}>Telecel</Text>
                </View>
                <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
                <View style={styles.bstyle}>
                    <View style={styles.image}>
                        <Image
                            source={require('../../assets/Images/At.png')}
                            style={styles.size}
                            resizeMode="stretch"
                        
                        />
                    </View>
                    <Text style={styles.text1}>AirtelTigo</Text>
                </View>
                <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
                <View style={styles.bstyle}>
                    <View style={styles.image}>
                        <Image
                            source={require('../../assets/Images/Gm.jpg')}
                            style={styles.size}
                            resizeMode="stretch"
                        
                        />
                    </View>
                    <Text style={styles.text1}>G Money</Text>
                </View>
                <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
                <View style={styles.bstyle}>
                    <View style={styles.image}>
                        <Image
                            source={require('../../assets/Images/E.jpg')}
                            style={styles.size}
                            resizeMode="stretch"
                        
                        />
                    </View>
                    <Text style={styles.text1}>E-zwich</Text>
                </View>
                <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
                <View style={styles.bstyle}>
                    <View style={styles.image}>
                        <Image
                            source={require('../../assets/Images/Z.png')}
                            style={styles.size}
                            resizeMode="stretch"
                        
                        />
                    </View>
                    <Text style={styles.text1}>Zeepay</Text>
                </View>
                <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
                <View style={styles.bstyle}>
                    <View style={styles.image}>
                        <Image
                            source={require('../../assets/Images/G.jpg')}
                            style={styles.size}
                            resizeMode="stretch"
                        
                        />
                    </View>
                    <Text style={styles.text1}>Ghana Pay</Text>
                </View>
                <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00" />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ONScreen

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
        fontSize:24,
        color:'white',
        textAlign:'center',
        fontWeight:'bold'   ,
    },
    box:{
        height:75,
        backgroundColor:'white',
        marginHorizontal:20,
        marginVertical:5,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:10,
    },
    bstyle:{
        padding:20,
        flexDirection:'row',
        alignItems:'center',
    },
    text1:{
        color:'#005e80',
        fontWeight:500,
        fontSize:18,
        marginLeft:10,
    },
    image:{
        height:35,
        width:35,
        // backgroundColor:'black',
        borderRadius:50,
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center',
    },
    size:{
        height:'100%',
        width:'100%',
    },
})