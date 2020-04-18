import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import * as Maplocation from 'expo-location';
import * as Permissions from 'expo-permissions';
import Mappreview from './Mappreview';

const Pickerlocation = (props) => {

    const [locationpicked, setlocationpicked] = useState()
    const [isfetching, setisfetching] = useState(null)

    const maplocationpicked = props.navigation.getParam('locationselected')
     
    const { onpickedlocation } = props

    useEffect(() => {
        if(maplocationpicked) {
            setlocationpicked(maplocationpicked)
            props.onpickedlocation(maplocationpicked)
        }
    }, [maplocationpicked, onpickedlocation])

    const Permissionverify = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION)
        if(result.status != 'granted'){
            Alert.alert('permission need','need permissions to proceed',
            [{text: 'OK'}]
            )
            return false
        }
        return true
    } 


    const locationHandler = async () => {
        const haspermission = await Permissionverify()
        if(!haspermission) {
            return
        }

        setisfetching(true)

        try {
            const location = await Maplocation.getCurrentPositionAsync({timeout: 5000})
            console.log(location)
            setlocationpicked({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })
            props.onpickedlocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })

        } catch (err) {
            Alert.alert(
                'Couldn`t locate you',
                'Please try later or pick a location on the map',
                [{text: 'OK'}]
            )
        }setisfetching(false)
    }

    const pickonmapHandler = () => {
        props.navigation.navigate('Mapview', {
            lat:locationpicked.lat,
            lng: locationpicked.lng
        })
        }

    return (
        <View style={styles.picker}>
          <Mappreview pickonmap={pickonmapHandler} location={locationpicked} style={styles.mappreview}>
          {isfetching ? <ActivityIndicator size="large"></ActivityIndicator> : <Text>please pick location</Text> }
 
          </Mappreview>
          <View style={styles.btns}> 
            <Button color="purple" onPress={locationHandler}>locate me</Button>
            <Button color="green" onPress={pickonmapHandler}>Pick On Map</Button>
            
            <View>
               {/*  <Text>{locationpicked.lat}</Text>
                <Text>{locationpicked.lng}</Text> */}
            </View>
          
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    picker: {
        marginBottom: 15
    },
    mappreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1
    },
    btns: {
        flexDirection: 'row',
        width: '100%'
    }
})

export default Pickerlocation;