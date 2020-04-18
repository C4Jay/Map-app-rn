import React, { useState, useEffect, useCallback } from 'react';
import {View, Text, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Modal, TextInput, Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

var markers = []

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

    const picklocationHandler = async (event) => {
        console.log(event)
        setuserinput(true)
        try {
        setlocationpicked({
            lat: event.nativeEvent.coordinate.latitude ,
            lng: event.nativeEvent.coordinate.longitude 
        })
        const newmarker = {
            markercoordinates : {
                latitude: /* locationpicked.lat */ 6.973191023122209,
                longitude: /* locationpicked.lng */ 79.91679947823286
            }
        }
        markers.push(newmarker)
        }
        catch (err) {
            console.log(err)
        }
        return markers  
        
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

    const savepickHandler = useCallback(() => {
        if(!locationpicked) {
         
            return            
        }
        props.navigation.navigate('Createplace', {locationselected: locationpicked })
    }, [locationpicked])

    useEffect(() => {
        props.navigation.setParams({savelocation: savepickHandler})
    }, [savepickHandler])

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
            {markercoordinates && ( 
             
            <MapView.Marker title={markername} coordinate={markercoordinates} /> 
             )}
            
                 
                       
            </MapView>
            </View>
        
        )
}

MapScreen.navigationOptions = navData => {
    const saveFn = navData.navigation.getParam('savelocation')
    return {
        headerRight: <TouchableOpacity style={styles.hdrbtn} onPress={saveFn}><Text style={styles.btntext}>Save</Text></TouchableOpacity>
    }
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
    },
    hdrbtn: {
        marginHorizontal: 20
    },
    btntext: {
        fontSize: 16,
        color: Platform.OS === 'android' ? 'white' : '#94cc3f'
    }
})

export default MapScreen;