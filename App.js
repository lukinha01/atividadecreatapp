import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>lukinhas 2025</Text>
      <Text>Rogerio Lucas do Nascimento Silva</Text>
      <Text>17 anos</Text>
      <Text> atleta</Text> 
      <Text>futebol/volei</Text>
      <Text>2026 é hexa!!</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
