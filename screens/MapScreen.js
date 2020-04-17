import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = (props) => {

    const [locationpicked, setlocationpicked] = useState()
    const mapregion = {
        latitude: /* 37.78 */ props.navigation.getParam('lat'),
        longitude: /* -122.43 */ props.navigation.getParam('lng'),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421 
    }

    const picklocationHandler = (event) => {
        console.log(event)
        setlocationpicked({
            lat: event.nativeEvent.coordinate.latitude ,
            lng: event.nativeEvent.coordinate.longitude 
        })
    }

    let markercoordinates;

    if(locationpicked) {
        markercoordinates = {
            latitude: locationpicked.lat,
            longitude: locationpicked.lng
        }
    }

    return (
        <MapView
        showsUserLocation={true}
        style={styles.map}
        region={mapregion}
        onPress={picklocationHandler}>
        {markercoordinates && ( <MapView.Marker title="your location" coordinate={markercoordinates} /> )}
            
        
        </MapView>
        )
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
})

export default MapScreen;