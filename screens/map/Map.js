import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Mapbox from 'mapbox-gl';




Mapbox.setAccessToken('pk.eyJ1IjoibWFydGlzc2UiLCJhIjoiY2xmdjlvNWJrMDJhbjNocHZoZGRlejMzaCJ9.BBAqo1VGk-00bSPlJwCoxw');

const Map = () => {
  return (
    <View style={styles.page}>
    <View style={styles.container}>
      <Mapbox.MapView style={styles.map} />
    </View>
  </View>
  );
}

export default Map;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1
  }
});
