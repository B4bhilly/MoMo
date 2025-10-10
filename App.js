import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';


import MainStackNavigator from './MainStackNavigator/MainStackNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.SafeAreaView}>
        <NavigationContainer>
          <View style={styles.container}>          
            <StatusBar style='auto' />

              <MainStackNavigator/>
              
          </View>
          </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SafeAreaView: {
    flex: 1,
  }, 
});
