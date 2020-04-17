import React, { useState } from 'react';
import {View, Text, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Modal, TextInput, Button } from 'react-native-paper';

const MapScreen = (props) => {

    const [locationpicked, setlocationpicked] = useState()
    const [userinput, setuserinput] = useState(false)
    const [title, settitle] = useState('')
    const [markername, setmarkername] = useState('')

    const mapregion = {
        latitude: /* 37.78 */ props.navigation.getParam('lat'),
        longitude: /* -122.43 */ props.navigation.getParam('lng'),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421 
    }

    const picklocationHandler = (event) => {
        console.log(event)
        setuserinput(true)
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

    const turnoff = () => {
        setmarkername(title)
        setuserinput(false)
    }

    const titleHandler = (event) => {
        settitle(event)
    }

/*     return (
        <MapView
        showsUserLocation={true}
        style={styles.map}
        region={mapregion}
        onPress={picklocationHandler}>
        {markercoordinates && ( <MapView.Marker title="your location" coordinate={markercoordinates} /> )}
            
        
        </MapView>
        ) */

        let markernameinput;
        if(userinput) {
        markernameinput = <View>
        <Text style={styles.label}>Title</Text>
            <TextInput
             onChangeText={titleHandler} 
             value={title}
             style={styles.textinput}></TextInput>
              <Button onPress={turnoff}>click</Button>

        </View>
        }

        return (
            <View style={styles.map}>
            {markernameinput}
            <MapView
            showsUserLocation={true}
            style={styles.map}
            region={mapregion}
            onPress={picklocationHandler}>
            {markercoordinates && ( <MapView.Marker title={markername} coordinate={markercoordinates} /> )}            
            </MapView>
            </View>
        
        )
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    centeredView: {
      //  flex: 1,
        height: 219,
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'white'
    },
    markerinput: {
        padding: 20
    },
    label: {
        fontSize: 18,
        marginBottom: 15,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginTop: 8
    },
    textinput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        height: 16,
        backgroundColor: 'rgba(200, 227, 149, 0.57)'
    }
})

export default MapScreen;