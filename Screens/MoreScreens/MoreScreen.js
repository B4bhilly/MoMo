import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {Ionicons, FontAwesome6, SimpleLineIcons, Feather} from '@expo/vector-icons';


const MoreScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back-sharp" size={30} color="#cccc00" />
        </TouchableOpacity>
          <Text style={styles.text}>More</Text>  
      </View>

      <View>
        <TouchableOpacity style={styles.box}>
          <View style={styles.bstyle}>
            <SimpleLineIcons name="bell" size={30} color="#005e80" />
            <Text style={styles.text1}>Approvals</Text>
          </View>
          <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <View style={styles.bstyle}>
            <Feather name="gift" size={30} color="#005e80" />
            <Text style={styles.text1}>Offers</Text>
          </View>
          <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <View style={styles.bstyle}>
            <Ionicons name="wallet-outline" size={30} color="#005e80" />
            <Text style={styles.text1}>Wallet Limits</Text>
          </View>
          <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <View style={styles.bstyle}>
            <FontAwesome6 name="person-arrow-up-from-line" size={30} color="#005e80" />
            <Text style={styles.text1}>Approvals</Text>
          </View>
          <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MoreScreen

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
  text: {
    fontSize:26,
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
    marginLeft:'33%'
  },
  text1:{
    color:'#005e80',
    fontWeight:500,
    fontSize:18,
    marginLeft:10,
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
})