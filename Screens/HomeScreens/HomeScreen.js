import { StyleSheet, Text, View, Dimensions, TouchableOpacity  } from 'react-native';
import React from 'react';
import {Ionicons, FontAwesome6, SimpleLineIcons} from '@expo/vector-icons';
import Svg, { Path, Defs, LinearGradient as SvgGradient, Stop } from 'react-native-svg';
import TopTab0Navigator from '../../Navigation/TopTab0Navigator';

const { width } = Dimensions.get('window');
const height = 240; // adjust if needed
const curveHeight = 70;


const HomeScreen = () => {
  const path = `
  M0,0 
  H${width} 
  V${height - curveHeight} 
  A${width / 1.5},${curveHeight} 0 0 1 0,${height - curveHeight} 
  Z
  `;

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
          <TouchableOpacity >
            <FontAwesome6 name="user-circle" size={30} color="#cccc00" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons name="bell" size={30} color="#cccc00" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex:1}}>
        <View style={styles.box}>
          <View style={styles.tbox}>
            <Text style={styles.text1}>Details not available.Try refreshing</Text>
          </View>

          <View style={styles.bbox}>
            <TouchableOpacity style={styles.icon}>
              <Ionicons name="wallet-outline" size={24} color="#005e80" />
              <Text style={styles.text}>Deposit</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.icon}>
              <Ionicons name="wallet-outline" size={24} color="#005e80" />
              <Text style={styles.text}>Allow Cashout</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.icon}>
              <FontAwesome6 name="arrow-right-arrow-left" size={24} color="#005e80" />
              <Text style={styles.text}>Statements</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex:1,marginTop:30}}>
          <TopTab0Navigator/>
        </View>
        
      </View>
    </View>
  );
};


export default HomeScreen;

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
    flexDirection:'row',
    justifyContent:'space-between'
  },
  box: {
    position: 'absolute',
    top: -150,
    alignSelf:'center',
    alignContent:'center',
    height: 160,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    // padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tbox:{
    alignItems:'center',
    top:'40%',
  },
  bbox:{
    flex: 1,
    top:'25%',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    padding:20,
    // backgroundColor:'yellow'
  },
  icon:{
    flex:1,
    width:'auto',
    alignItems:'center',
  },
  divider:{
    width: 1,
    height:'35%',
    backgroundColor:'#cccc00'
  },
  text:{
    color:'#005e80',
    fontWeight:'500',
  },
  text1:{
    fontSize:17,
    color:'grey',
  },
  // modal:{
  //   width:50,
  //   height:50,
  //   backgroundColor:'white',
  // },

});