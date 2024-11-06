import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { MapDrawing } from './components/MapView';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MapDrawing />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});