import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Polygon, PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

interface Coordinate {
  latitude: number;
  longitude: number;
}

export const MapDrawing = () => {
  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);

  const handleMapPress = (e: any) => {
    if (coordinates.length < 3) {
      setCoordinates([...coordinates, e.nativeEvent.coordinate]);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        mapType="satellite"
        onPress={handleMapPress}
        initialRegion={{
          latitude: 40.4168,
          longitude: -3.7038,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {coordinates.length === 3 && (
          <Polygon
            coordinates={coordinates}
            fillColor="rgba(255, 0, 0, 0.3)"
            strokeColor="red"
            strokeWidth={2}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width,
    height,
  },
});