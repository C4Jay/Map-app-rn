import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Mappreview from '../components/Mappreview';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PlacesdetailScreen = (props) => {
    /* const id = props.navigation.getParam('placeTitle')
    const placeselected = useSelector(state => 
        state.places.places.find(place => place.id === id)
    ) */
    
    // then use placeselected


    const location = props.navigation.getParam('location')
    const adrs = props.navigation.getParam('address')

    const navHandler = () => {
        props.navigation.navigate('Mapviewonly', {lat: location.lat,lng: location.lng, adrs:adrs})
    }

    return (
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={styles.main}>
          
            <Text>{props.navigation.getParam('placeTitle')}</Text>
            
            <Image style={styles.img} source={{uri: props.navigation.getParam('imguri')}}></Image>
         
            <View >
               <View style={styles.adrsview}><Text style={styles.adrs}>{props.navigation.getParam('address')}</Text></View>
                <TouchableOpacity onPress={navHandler}>
                <Mappreview style={styles.mappreview} location={props.navigation.getParam('location')}></Mappreview>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView> 
        )
}

PlacesdetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('placeTitle')
    }
}

const styles = StyleSheet.create({
    img: {
        height: '35%',
    minHeight: 300,
    width: '100%',
    backgroundColor: '#ccc'
    },
    main: {
        marginVertical: 20,
    width: '90%',
    maxWidth: 350,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 100
    },
    adrsview: {
        alignItems: 'center',
        textAlign: 'center',
        padding: 20
    },
    adrs: {
        color: 'green',
        textAlign: 'center'
    },
    mappreview: {
        width: '100%',
    maxWidth: 350,
    height: 500,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    }
})

export default PlacesdetailScreen;