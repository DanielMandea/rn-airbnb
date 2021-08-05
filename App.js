import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/Home';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
