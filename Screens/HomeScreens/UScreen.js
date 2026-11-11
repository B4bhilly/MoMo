import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Svg, { Path, Defs, LinearGradient as SvgGradient, Stop } from 'react-native-svg';
import {Ionicons, FontAwesome6, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import TopTab5Navigator from '../../Navigation/TopTab5Navigator';

const { width } = Dimensions.get('window');
const height = 210; // adjust if needed
const curveHeight = 70;



const UScreen = ({navigation}) => {

  const path = `
    M0,0 
    H${width} 
    V${height - curveHeight} 
    A${width / 1.5},${curveHeight} 0 0 1 0,${height - curveHeight} 
    Z
  `;

  const handleNavigationToDB = () =>{
    navigation.navigate("DB", {
      hideBB:false,
    });
  };

  const handleNavigationToDBHideBB = () =>{
    navigation.navigate("DB", {
      hideBB:true,
    });
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
          <View style={styles.yellow}>
            <Text style={styles.text1}>Utilities</Text>
          </View>    
        </View>
      </View>

        <View style={styles.cont}>
          <TouchableOpacity style={[styles.box,{marginRight:7}]}>
            <View style={styles.image}>
                <Image
                    source={require('../../assets/Images/img3.jpg')}
                    style={styles.size}
                    resizeMode="stretch"                        
                />
            </View>
            <Text style={styles.text}>Electricity</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={[styles.box,{marginRight:7,marginLeft:7}]}>
            <View style={styles.image}>
                <Image
                    source={require('../../assets/Images/img4.png')}
                    style={styles.size}
                    resizeMode="stretch"                        
                />
            </View>
            <Text style={styles.text}>Ghana Water</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.box,{marginLeft:7}]}>
            <MaterialCommunityIcons name="calendar-clock" size={30} color="#005e80" />
            <Text style={styles.text}>Schedule</Text>
          </TouchableOpacity>
        </View>

      <View style={{flex:1,marginTop:30}}>
          <TopTab5Navigator/>
      </View>

    </View>
  )
}

export default UScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff', 
  },
  top: {
    height:100,
  },
  head: {
    padding:10,
    marginTop:10,
    alignItems:'center',
    flexDirection:'row',
    // backgroundColor:'red',
  },
  yellow: {
    height:40,
    width:'85%',
    justifyContent:'center',
    // backgroundColor:'#cccc00',
  },
  text1: {
    fontSize:26,
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
  },
  cont:{
    width:'100%',
    flexDirection:'row',
    marginTop: 10,
    justifyContent:'center',
  },
  box: {
    height:100,
    width:100,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
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
  image:{
        height:35,
        width:35,
        backgroundColor:'black',
        borderRadius:50,
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center',
    },
    size:{
        height:'100%',
        width:'100%',
    },
})