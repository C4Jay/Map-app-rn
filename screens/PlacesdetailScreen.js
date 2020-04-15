import React from 'react';
import { View, Text, Image } from 'react-native';

const PlacesdetailScreen = (props) => {

    
    
    return (
        <View>
          
            <Text>{props.navigation.getParam('placeTitle')}</Text>
            <View>
            <Image style={{height: 198, width: 168}} source={{uri: props.navigation.getParam('imguri')}}></Image>
            </View>
        </View> 
        )
}

PlacesdetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('placeTitle')
    }
}

export default PlacesdetailScreen;