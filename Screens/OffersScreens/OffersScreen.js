import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import {Ionicons, FontAwesome6, SimpleLineIcons, Feather, FontAwesome5} from '@expo/vector-icons';


const OffersScreen = ({navigation}) => {
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
      <View style={styles.circle}>
        <Image
          source={require('../../assets/Images/img2.jpg')}
          style={styles.image}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.box}>
          <View style={styles.bstyle}>
            <FontAwesome5 name="user-friends" size={30} color="#005e80" />
            <Text style={styles.text1}>Refer a friend</Text>
          </View>
          <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <View style={styles.bstyle}>
            <Ionicons name="share-social-sharp" size={30} color="#005e80" />
            <Text style={styles.text1}>Share app</Text>
          </View>
          <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OffersScreen

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
    fontSize:22,
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
    marginLeft:'15%'
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
  circle:{
    height:200,
    width:200,
    backgroundColor:'yellow',
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    alignSelf:'center',
    marginVertical:20,
  },
  image:{
    width:200,
    height:200,
  },
})