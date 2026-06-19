import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {Ionicons, FontAwesome6, SimpleLineIcons, Entypo, FontAwesome, Feather, MaterialCommunityIcons} from '@expo/vector-icons';


const DBScreen = ({navigation,route}) => {
    const hideBB = route?.params?.hideBB ?? false; // Default to false if not provided

    const handleNavigationToIB = () =>{
        navigation.navigate("IB");
    };

    const handleNavigationToVB = () =>{
        navigation.navigate("VB");
    };

    const handleNavigationToOIB = () =>{
        navigation.navigate("OIB");
    };

    const handleNavigationToOVB = () =>{
        navigation.navigate("OVB");
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
                <View style={styles.yellow}>
                    <Text style={styles.text1}>Data Bundles</Text>
                </View>   
                <TouchableOpacity>
                    <Feather name="x" size={30} color="#cccc00" />    
                </TouchableOpacity> 
            </View>
        </View>

        {!hideBB && (
            <View style={styles.body}>

                <TouchableOpacity onPress={handleNavigationToIB} style={styles.box}>
                        <Text style={styles.text}>Internet Bundles</Text>
                        <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00" />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNavigationToVB} style={styles.box}>
                        <Text style={styles.text}>Video Bundles</Text>
                        <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                        <Text style={styles.text}>Broadband Bundles</Text>
                        <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00" />
                </TouchableOpacity>
            </View>
        )}

        {hideBB && (
        <View style={styles.body}>

                <TouchableOpacity onPress={handleNavigationToOIB} style={styles.box}>
                        <Text style={styles.text}>Internet Bundles</Text>
                        <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00" />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNavigationToOVB} style={styles.box}>
                        <Text style={styles.text}>Video Bundles</Text>
                        <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00" />
                </TouchableOpacity>
        </View>
        )}
    </View>
  )
}

export default DBScreen;

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
    // yellow:{
    //     height:'100%',
    //     width:'70%',
    //     justifyContent:'center',
    //     // backgroundColor:'#cccc00',
    // },
    text1:{
        fontSize:26,
        color:'white',
        textAlign:'center',
        fontWeight:'bold'   ,
    },
    text:{
        fontSize:18,
        color:'#005e80',
        fontWeight:'bold'   ,
    },
    body:{
        padding:10,
        paddingHorizontal:20,
        marginTop:20,
    },
    box:{
        height:65,
        width:'100%',
        backgroundColor:'#fff',
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        marginTop:15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})