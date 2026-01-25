import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons, Feather, MaterialCommunityIcons, Entypo} from '@expo/vector-icons';


const PayScreen = () => {
  return (
    <View showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.mid}>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.box}>
            <Feather name="send" size={30} color='#005e80' />
            <Text style={styles.text}>Transfers</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <MaterialCommunityIcons name="lightbulb-on-30" size={30} color="#005e80" />
            <Text style={styles.text}>Utilities</Text>
          </TouchableOpacity>

          

          <TouchableOpacity style={styles.box}>
            <Entypo name="circle" size={30} color="#005e80" />
            <Text style={styles.text}>MTN Postpaid</Text>
          </TouchableOpacity>
        </View>

        {/* second row */}
        <View style={styles.row2}>
          <TouchableOpacity style={styles.box}>
            <Feather name="tv" size={30} color="#005e80" />
            <Text style={styles.text}>TV</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Entypo name="shop" size={30} color="#005e80" />
            <Text style={styles.text}>Merchant</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <MaterialIcons name="attach-money" size={30} color="#005e80" />
            <Text style={[styles.text, {textAlign:'center'}]}>General {'\n'} Payments</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default PayScreen;

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