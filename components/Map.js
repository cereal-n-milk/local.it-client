import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';
import store from '../store/locationStore';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: store.getState().latitude,
        longitude: store.getState().longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      itineraries: [],
    };
  }
  
  render() {
    console.log('props:', this.props.navigation.state.params.list);
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
          {this.props.navigation.state.params.list.map((itinerary, index) => (
            <View>
              {console.log(itinerary)}
              <MapView.Marker
                key={itinerary.id}
                title={itinerary.name}
                description={itinerary.categories[0].title}
                coordinate={{
                  latitude: itinerary.coordinates.latitude,
                  longitude: itinerary.coordinates.longitude,
                }}
              />
            </View>
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
