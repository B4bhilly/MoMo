import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useState } from 'react';
import {Ionicons, FontAwesome6, SimpleLineIcons ,AntDesign, MaterialCommunityIcons, Octicons} from '@expo/vector-icons';
import Svg, { Path, Defs, LinearGradient as SvgGradient, Stop } from 'react-native-svg';
import TopTab0Navigator from '../../Navigation/TopTab0Navigator';

const { width } = Dimensions.get('window');
const height = 240; // adjust if needed
const curveHeight = 70;

const HomeScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);

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
          <TouchableOpacity onPress={() => setModalVisible(true)}>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable  
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)', // dim background
          }}
        >
          <View style={styles.modalContainer}>
            <View style={{justifyContent:'space-between', flexDirection:'row'}}>
              <View style={{flexDirection:'row', alignContent:'center'}}>
                <View style={styles.usericon}>
                  <FontAwesome6 name="user-large" size={20} color="black" />
                </View>
                <View>
                  <Text style={{ fontSize: 16, marginBottom: 5 , color:'#007099', fontWeight:'500'}}>
                    User
                  </Text>

                  <Text style={{ marginBottom: 20 }}>
                    01234456789
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style=   {styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.switch}>
                  <Text>Switch account</Text> 
                </TouchableOpacity>
            </View>
            <View style={styles.qr}>

            </View>

            <View>
              <View style={styles.rec}>
                <SimpleLineIcons name="settings" size={25} color="#cccc00" style={{paddingHorizontal:10}}/>
                <View style={{paddingRight:40}}>
                  <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>Account Settings</Text>
                  <Text style={{color:'white', fontSize:12}}>Manage wallet and app settings</Text>
                </View>
                <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00"  />
              </View>

              <View style={styles.rec1}>
                <MaterialCommunityIcons name="headset" size={25} color="#cccc00" style={{paddingHorizontal:10}}/>
                <View style={{paddingRight:20}}>
                  <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>Help</Text>
                  <Text style={{color:'white', fontSize:12}}>Find Agent, Report Fraud and more...</Text>
                </View>
                <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00"  />
              </View>

              <View style={styles.rec1}>
                <MaterialCommunityIcons name="check-decagram-outline" size={28} color="#cccc00" style={{paddingHorizontal:10}}/>
                <View style={{paddingRight:70}}>
                  <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>Recommend MoMo</Text>
                  <Text style={{color:'white', fontSize:12}}>Refer a Friend, Share App</Text>
                </View>
                <Ionicons name="chevron-forward-sharp" size={30} color="#cccc00"  />
              </View>
            </View>

            <View style={styles.end}>
              <View style={{flexDirection:'row', alignItems:'center',marginBottom:10}}>
                <Octicons name="sign-out" size={28} color="#007099" />
                <Text  style={{color:'#007099', fontSize:15, fontWeight:'bold', marginLeft:10}}>Sign out</Text>
              </View>
              <View>
                <Text style={{color:'grey', fontSize:15, fontWeight:'400', marginLeft:10}}>Version Number: 2.4.7</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
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
  modalContainer: {
    width: '90%',
    height: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderBottomRightRadius:20,
  },
  usericon:{
    height: 40,
    width: 40, 
    borderRadius: 40, 
    backgroundColor: '#cccc00', 
    justifyContent:'center', 
    alignItems:'center', 
    marginBottom: 10,
    marginRight: 10,
  },
  switch:{
    height:35,
    width:120,
    borderRadius:20,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:50,
    borderColor:'#007099',
    marginBottom:40,    
  },
  qr:{
    height:120,
    width:120,
    backgroundColor:'black',
    alignSelf:'center',
    marginBottom:20,
  },
  rec:{
    height:65,
    width:'95%',
    backgroundColor:'#007099',
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    borderRadius:20,
    marginTop:20,
    // paddingleft:10,
    flexDirection:'row',
  },
  rec1:{
    height:65,
    width:'95%',
    backgroundColor:'#007099',
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    borderRadius:20,
    marginTop:15,
    flexDirection:'row',
  },
  end:{
    marginTop:"auto",
    marginBottom:20,
    alignItems:'center',
  },
});