import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import {Ionicons,Entypo, Feather,FontAwesome6, SimpleLineIcons} from '@expo/vector-icons';
import Svg, { Path, Defs, LinearGradient as SvgGradient, Stop } from 'react-native-svg';

const { width } = Dimensions.get('window');
const height = 260; // adjust if needed
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
        <TouchableOpacity>
          <FontAwesome6 name="user-circle" size={30} color="#cccc00" />
        </TouchableOpacity>
        <TouchableOpacity>
          <SimpleLineIcons name="bell" size={30} color="#cccc00" />
        </TouchableOpacity>
      </View>
    </View>

    <View>
      <View style={styles.box}>
        <View></View>
      </View>
    </View>
  </View>
);
};


export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    top: '-150',
    left:'50%',
    transform: [{ translateX: '-50%' }],//to center the box
    alignItems: 'center',
    height: 160,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

})