import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {Ionicons, FontAwesome6, SimpleLineIcons, Entypo, FontAwesome5, Feather, MaterialCommunityIcons} from '@expo/vector-icons';


const ScanQR = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back-sharp" size={30} color="#cccc00" />
        </TouchableOpacity>
          <Text style={styles.text}>Recommend MoMo</Text>  
      </View>
    </View>
  )
}

export default ScanQR

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  head: {
    padding:20,
    // alignItems:'center',
    alignItems:'flex-end',
    flexDirection:'row',
    backgroundColor:'#005e80',
    height:110,
    marginBottom:10,
  },
  text:{
    fontSize:22,
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
    marginLeft:'15%',
  },
})