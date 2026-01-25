import React from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
// import PhoneInput from 'react-native-phone-number-input';
import Svg, { Path, Defs, LinearGradient as SvgGradient, Stop } from 'react-native-svg';

const { width } = Dimensions.get('window');
const height = 320; // adjust if needed
const curveHeight = 70;

const LoginScreen = ({navigation}) => {
  const path = `
    M0,0 
    H${width} 
    V${height - curveHeight} 
    A${width / 1.5},${curveHeight} 0 0 1 0,${height - curveHeight} 
    Z
  `;

  const handleNavigationToSignup = () =>{
    navigation.navigate('Signup');
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
                <Text style={[styles.text,{textAlign:'center',fontSize:25}]}>Welcome to <Text style={{fontWeight:'bold',textAlign:'center'}}>MoMo</Text></Text>
                {/* <View style={styles.bstyle}>
                  <View style={styles.sbox}>

                  </View>

                  <View style={styles.bbox}>
                  </View>
                </View> */}
                  {/* <PhoneInput
                    defaultCode='GH'
                    layout='first'
                    placeholder='Enter number *'
                    containerStyle={{
                      // backgroundColor:'red',
                      
                    }}
                    textInputProps={{
                      placeholderTextColor:'black',
                      style:{
                        fontSize:20,
                        fontWeight:'bold',
                        

                      }
                    }}
                    textContainerStyle={{
                      
                    }}                    
                  /> */}
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
              <TouchableOpacity onPress={handleNavigationToSignup} style={styles.button}>
                <Text style={[styles.text, {color:'white'}]}>NEXT</Text>
              </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export default LoginScreen;

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
    height: 170,
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
  bstyle:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between'

  },
  sbox:{
    height:80,
    width:70,
    borderWidth:1,
    borderRadius:20,
  },
  bbox:{
    height:80,
    width:'70%',
    borderWidth:1,
    borderRadius:20,
  },
  text:{
    color:'#005e80',
    fontSize:20,
  },
  textx:{
    color:'grey',
    fontSize:16,
    textAlign:'center'
  },
  tedit:{
    marginTop:80,
    padding:10,
    alignItems:'center',
  },
  link:{
    color:'#005e80'
  },
  bottom:{
    alignItems:'center',
    top: '80%',
  },
  button:{
    height:60,
    width:'90%',
    backgroundColor:'#005e80',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
  },
});
