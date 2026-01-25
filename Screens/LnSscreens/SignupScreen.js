import { StyleSheet, Text, View, Dimensions, TouchableOpacity  } from 'react-native';
import React from 'react';
import Svg, { Path, Defs, LinearGradient as SvgGradient, Stop } from 'react-native-svg';
import {Ionicons,Entypo} from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const height = 320; // adjust if needed
const curveHeight = 70;

const SignupScreen = ({navigation}) => {
    const path = `
    M0,0 
    H${width} 
    V${height - curveHeight} 
    A${width / 1.5},${curveHeight} 0 0 1 0,${height - curveHeight} 
    Z
  `;

  const handleNavigationToLogin =() =>{
    navigation.navigate('Login');
  };

  const handleNavigationToBottomTab =() =>{
    navigation.navigate('BottomTab');
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
        </View>

        <View>
            <View style={styles.box}>
                <Text style={styles.text1}> Hi MoMo</Text>
                <Text style={styles.text1}>02833746364</Text>

                <View style={styles.buttons}>
                    <TouchableOpacity onPress={handleNavigationToBottomTab} style={styles.button}>
                        <Text style={[styles.text, {color:'white', fontWeight:'bold'}]}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNavigationToLogin} style={[styles.button,{marginTop:10,backgroundColor:'white'}]}>
                        <Text style={[styles.text, {color:'#005e80'}]}>Switch Account</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            
            <View style={styles.tedit}>
              <Text style={styles.textx}>
                 By using this app you agree to our{' '}
                <Text style={styles.link}>Mobile {'\n'} Terms of Use{' '}</Text>
                and
                <Text style={styles.link}> Privacy Policy</Text>
              </Text>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.center}>
                    <View style={styles.color}>
                        <Ionicons name="qr-code-outline" size={24} color="#005e80" />
                    </View>
                    <Text style={styles.textx}>Scan QR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.center}>
                    <View style={styles.color}>
                        <Ionicons name="location-sharp" size={24} color="#005e80" />
                    </View>
                    <Text style={styles.textx}>Agents</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.center}>
                    <View style={styles.color}>
                        <Ionicons name="notifications" size={24} color="#005e80" />
                    </View>
                    <Text style={styles.textx}>Approvals</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.center}>
                    <View style={styles.color}>
                        <Entypo name="dots-three-horizontal" size={24} color="#005e80" />
                    </View>
                    <Text style={styles.textx}>More</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      top: {
        height: height, // matches SVG height
      },
      box: {
        position: 'absolute',
        top: -120,
        alignSelf:'center',
        height: 230,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      text:{
        color:'#005e80',
        fontSize:20,
      },
      text1:{
        color:'black',
        fontSize:20,
        textAlign:'center'
      },
      textx:{
        color:'grey',
        fontSize:16,
        textAlign:'center'
      },
      tedit:{
        marginTop:120,
        padding:10,
        alignItems:'center',
      },
      link:{
        color:'#005e80'
      },
      buttons:{
        alignItems:'center',
         marginTop: '10%',
      },
      button:{
        height:50,
        width:'90%',
        backgroundColor:'#005e80',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        
      },
      bottom:{
        top:'50%',
        flexDirection:'row',
        justifyContent:'space-evenly'
        
      },
      color:{
        height:40,
        width:40,
        borderRadius:100,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
      },
      center:{
        alignItems:'center'
      },
})