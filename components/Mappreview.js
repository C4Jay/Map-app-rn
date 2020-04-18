import React from 'react';
import {View, ActivityIndicator, Text, Image, StyleSheet } from 'react-native';
import env from '../vars/env';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Mappreview = (props) => {
    let mapPreviewUrl = 'https://s29081.pcdn.co/wp-content/uploads/2019/08/rochers-de-naye-hike-05157.jpg.optimal.jpg';
    /* if(props.location) {
        mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=13&size=600x300&maptype=roadmap&markers=markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=AIzaSyA_UeV4hwzgEG2h2iT0rwoYvgHv6snP9jM`;
    } */
    /* if(props.location) {
        mapPreviewUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyA_UeV4hwzgEG2h2iT0rwoYvgHv6snP9jM'
    } */

    /* if(props.location) {
        mapPreviewUrl = 'https://s29081.pcdn.co/wp-content/uploads/2019/08/rochers-de-naye-hike-05157.jpg.optimal.jpg';

    } */

    if(props.location) {
        mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=13&size=600x400&maptype=roadmap&markers=markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=${env.googleapiKeyworking} `
    }

    // AIzaSyAiI5UcfWWLo-t5L0K4GHYjZUQgmm5Xfu0

return (
    <TouchableOpacity onPress={props.pickonmap}>
    <View style={{...props.style,...styles.mappreview}}>
    { props.location ? <Image style={{height: 300, width: 600}} source={{uri: mapPreviewUrl}}></Image> : props.children }
    </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mapimg: {
        height: '100%',
        width: '100%'
    },
    mappreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1
    }

})

export default Mappreview;