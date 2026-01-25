import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const ScheduledScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.cont}>
        <Image
          source={require('../../assets/Images/img1.jpg')}
          style={styles.image}
          resizeMode='center'
        />
        <Text style={styles.text}>No schedule found</Text>
      </View>
    </ScrollView>
  )
}

export default ScheduledScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
  cont:{
    alignItems:'center',
    alignSelf:'center',
  },
  image:{
    marginTop:40,
    height: 200,
    width: 200,
  },
  text: {
    color:'grey',
    fontWeight:'500',
  },
})