import React from 'react';
import { View, Text } from 'react-native';

const PlacesdetailScreen = (props) => {
    return (
        <View>
            <Text>Hey</Text>
            <Text>{props.navigation.getParam('placeTitle')}</Text>
        </View> 
        )
}

PlacesdetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('placeTitle')
    }
}

export default PlacesdetailScreen;