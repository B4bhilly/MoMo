import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import { TextInput } from 'react-native-gesture-handler';

const PhoneInput = () => {
  const [countryCode, setCountryCode] = useState('GH');
  const [callingCode, setCallingCode] = useState('233');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
            <View style={styles.phoneContainer}>

                <CountryPicker
                countryCode={countryCode}
                withFilter
                withFlag
                withCallingCode
                withEmoji
                withCallingCodeButton
                preferredCountries={['GH']}
                onSelect={(country) => {
                    setCountryCode(country.cca2);
                    setCallingCode(country.callingCode[0]);
                }}
                />
            </View>

            <View style={styles.box}>
              <Text style={styles.text}>Enter number*</Text>
                <Text style={styles.code}>
                +{callingCode}
                </Text>

                <TextInput
                style={styles.input}
                // placeholder="Enter phone number"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />

        </View>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  phoneContainer: {
    // backgroundColor: '#c02b2b',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#005e80',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 75,
  },

    box: {
        height: 75,
        width: '70%',
        borderWidth: 2,
        borderColor: '#005e80',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#6fff1b',
        marginLeft: 10,
        overflow: 'none',
 
    },

  code: {
    marginLeft: 10,
    fontSize: 20,
    color: '#967b7b',
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 20,
  },
  text: {
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    fontSize: 16,
    color: '#005e80',
  },
});

export default PhoneInput;
