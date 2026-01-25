import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons, Ionicons, MaterialCommunityIcons, Entypo, FontAwesome, FontAwesome6, Octicons} from '@expo/vector-icons';


const FServiceScreen = () => {
  return (
    <View showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.mid}>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.box}>
            <FontAwesome name="bank" size={30} color="#005e80" />
            <Text style={styles.text}>Bank Services</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <FontAwesome6 name="hand-holding-dollar" size={30} color="#005e80" />
            <Text style={styles.text}>Advances</Text>
          </TouchableOpacity>

          

          <TouchableOpacity style={styles.box}>
            <FontAwesome6 name="hand-holding-dollar" size={30} color="#005e80" />
            <Text style={styles.text}>Loans</Text>
          </TouchableOpacity>
        </View>

        {/* second row */}
        <View style={styles.row2}>
          <TouchableOpacity style={styles.box}>
            <Octicons name="shield-check" size={30} color="#005e80" />
            <Text style={styles.text}>Insure</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Ionicons name="wallet-outline" size={30} color="#005e80" />
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Ionicons name="trending-up" size={30} color="#005e80" />
            <Text style={styles.text}>Invest</Text>
          </TouchableOpacity>
        </View>

        {/* third row */}
        <View style={styles.row2}>
          <TouchableOpacity style={styles.box}>
            <FontAwesome6 name="hands-holding-circle" size={30} color="#005e80" />
            <Text style={styles.text}>MyOwnPension</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default FServiceScreen

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