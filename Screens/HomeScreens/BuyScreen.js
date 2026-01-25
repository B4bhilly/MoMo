import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons, Feather, MaterialCommunityIcons, Entypo, AntDesign, Fontisto} from '@expo/vector-icons';


const BuyScreen = () => {
  return (
    <View showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.mid}>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.box}>
            <MaterialCommunityIcons name="phone-message-outline" size={30} color="#005e80" />
          <Text style={styles.text}>Airtime</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <AntDesign name="wifi" size={30} color="#005e80" />
          <Text style={styles.text}>Bundles</Text>
          </TouchableOpacity>

          

          <TouchableOpacity style={styles.box}>
            <Fontisto name="ticket-alt" size={30} color="#005e80" /> 
            <Text style={styles.text}>Tickets</Text>
          </TouchableOpacity>
        </View>

        {/* second row */}
        <View style={styles.row2}>
          <TouchableOpacity style={styles.box}>
            <MaterialCommunityIcons name="cookie-outline" size={30} color="#005e80" />
            <Text style={styles.text}>Food</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default BuyScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  mid:{
    // marginTop:20,
    paddingHorizontal:15,
    paddingTop:15,
    // backgroundColor:'yellow',
    height:'65%',
  },
  row1:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  row2:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15,
  },
  box:{
    height:90,
    width:100,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
  },
  text:{
    marginTop:5,
    color:'grey',
    fontWeight: 500
  },
})