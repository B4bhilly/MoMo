import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BalancesScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.center}>
            <Text style={styles.color}>For more information, please visit the <Text style={{color:'#005e80'}}>MTN app.</Text></Text>

            <View style={{width:'90%',}}>
                <View style={styles.box}>
                    <Text style={{fontWeight:'500'}}>Airtime balance</Text>
                    <Text style={styles.color1}>GHS 0.00</Text>
                </View>

                <View style={styles.box}>
                    <Text style={{fontWeight:'500'}}>Data bundle</Text>
                    <Text style={styles.color1}>0 MB</Text>
                </View>

                <View style={styles.box}>
                    <Text style={{fontWeight:'500'}}>Minutes</Text>
                    <Text style={styles.color1}>0 Minutes</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default BalancesScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    center:{
        width:'100%',
        alignItems:'center',
        marginTop:20,
    },
    color:{
        fontSize:17,
        fontWeight:'500',
        color:'grey',
        marginBottom:10,
    },
    color1:{
        fontSize:17,
        fontWeight:'500',
        color:'#005e80'
    },
    box:{
        marginTop:10,
        height:45,
        width:'100%',
        backgroundColor:'white',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:10,
    },
    
})