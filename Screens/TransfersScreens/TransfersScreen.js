import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native';
import React from 'react';
import {Ionicons, FontAwesome6, SimpleLineIcons, Entypo, FontAwesome5, Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import Svg, { Path, Defs, LinearGradient as SvgGradient, Stop } from 'react-native-svg';
import TopTab1Navigator from '../../Navigation/TopTab1Navigator';

const { width } = Dimensions.get('window');
const height = 210; // adjust if needed
const curveHeight = 70;

const TransfersScreen = ({navigation}) => {
  const path = `
    M0,0 
    H${width} 
    V${height - curveHeight} 
    A${width / 1.5},${curveHeight} 0 0 1 0,${height - curveHeight} 
    Z
  `;

  const handleNavigationToMU = () =>{
    navigation.navigate('MU')
  };

  const handleNavigationToCV = () =>{
    navigation.navigate('CV')
  };

  const handleNavigationToON = () =>{
    navigation.navigate('ON')
  };

  return (
    <View style={styles.container}>
    <View style={styles.top}>
      <Svg height={height} width={width} style={StyleSheet.absoluteFill}>
        <Defs>
          <SvgGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#007099" stopOpacity="1" />
            <Stop offset="1" stopColor="#002e47" stopOpacity="1" />
          </SvgGradient>
        </Defs>
        <Path d={path} fill="url(#grad)" />
      </Svg>
      <View style={styles.head}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back-sharp" size={30} color="#cccc00" />
        </TouchableOpacity>
        <View style={{width:'80%',}}>
          <Text style={styles.text1}>Transfer</Text>
        </View>    
      </View>
    </View>

    <View style={{flex:1}}>
      <View style={styles.cont}>
        <TouchableOpacity onPress={handleNavigationToMU} style={styles.box}>
          <FontAwesome5 name="money-bill-wave" size={30} color="#005e80" />
          <Text style={styles.text}>MoMo user</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNavigationToCV} style={styles.box}>
          <Feather name="gift" size={30} color="#005e80" />
          <Text style={styles.text}>Create voucher</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNavigationToON} style={styles.box}>
          <FontAwesome6 name="sim-card" size={30} color="#005e80" />
          <Text style={styles.text}>Other networks</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cont1}>
        <TouchableOpacity style={styles.box1}>
          <Ionicons name="globe-outline" size={30} color="#005e80" />
          <Text style={styles.text}>Cross border payment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box1}>
          <MaterialCommunityIcons name="calendar-clock" size={30} color="#005e80" />
          <Text style={styles.text}>Schedule</Text>
        </TouchableOpacity>

      </View>

      <View style={{flex:1,marginTop:20,}}>
        <TopTab1Navigator/>
      </View>

    </View>
  </View>
  )
}

export default TransfersScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  top: {
    height: height, // matches SVG height
  },
  head: {
    padding:20,
    marginTop:10,
    alignItems:'center',
    flexDirection:'row',
  },
  cont:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-evenly',
    marginTop: -110,
  },
  cont1:{
    flexDirection:'row',
    marginTop:15,
    width:'100%',
    justifyContent:'space-evenly',
  },
  box: {
    height:90,
    width:100,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    // padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  box1: {
    height:90,
    width:155,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    // padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color:'grey',
    fontWeight:'500',
    marginTop:5,
  },
  text1: {
    fontSize:26,
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
  },
})