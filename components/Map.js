import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';
import itinerary from '../data/itinerary-data.js';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 34.027373;
const LONGITUDE = -118.409287;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      itineraries: itinerary,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
        >
          <MapView.Marker
            title="Current Location"
            coordinate={this.state.region}
          />
          {this.state.itineraries.map((itinerary, index) => (
            <MapView.Marker
              key={index}
              title={itinerary.name}
              description={itinerary.categories[0].title}
              coordinate={{
                latitude: itinerary.coordinates.latitude,
                longitude: itinerary.coordinates.longitude,
              }}
            />
          ))}
        </MapView>
      </View>
    )
  }

}

Map.propTypes = {
  provider: MapView.ProviderPropType,
};


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
