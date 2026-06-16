import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { AntDesign, Feather, MaterialCommunityIcons, Entypo} from '@expo/vector-icons';


const ForYouScreen = ({navigation}) => {

  const handleNavigationToTransfer =() => {
    navigation.navigate('Transfers');
  };

  const handleNavigationToBundles =() =>{
    navigation.navigate('Bundles');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.mid}>
        <View style={styles.row1}>
          <TouchableOpacity onPress={handleNavigationToBundles} style={styles.box}>
            <AntDesign name="wifi" size={30} color="#005e80" />
            <Text style={styles.text}>Bundles</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNavigationToTransfer} style={styles.box}>
            <Feather name="send" size={30} color='#005e80' />
            <Text style={styles.text}>Transfers</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <MaterialCommunityIcons name="phone-message-outline" size={30} color="#005e80" />
            <Text style={styles.text}>Airtime</Text>
          </TouchableOpacity>
        </View>

        {/* second row */}
        <View style={styles.row2}>
          <TouchableOpacity style={styles.box}>
            <MaterialCommunityIcons name="lightbulb-on-30" size={30} color="#005e80" />
            <Text style={styles.text}>Utilities</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Feather name="tv" size={30} color="#005e80" />
            <Text style={styles.text}>TV</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Entypo name="shop" size={30} color="#005e80" />
            <Text style={styles.text}>Merchant</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.bbox}>
          
        </View>
      </View>
    </ScrollView>
  )
}

export default ForYouScreen

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
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  text:{
    marginTop:5,
    color:'grey',
    fontWeight: 500
  },
  bottom:{
    flex:1,
    paddingHorizontal:20,
    marginBottom:50,
  },
  bbox:{
    height:120,
    width:'100%',
    backgroundColor:'yellow',
    borderRadius:20,
    paddingBottom:10,
  },
})