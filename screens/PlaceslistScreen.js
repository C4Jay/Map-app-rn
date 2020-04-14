import React from 'react';
import { View, Text, Platform} from 'react-native';
import { Button } from 'react-native-paper';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderbutton from '../components/Custombutton';



const PlaceslistScreen = (props) => {
    return (
    <View style={{flex:1, textAlign: 'center'}}>
        <Text>Hey</Text>
        <View style={{textAlign: 'center'}}>
        <Button contained onPress={() => {props.navigation.navigate('Placesdetail')}}>Click</Button>
        </View>
   
    </View> 
    )
}

PlaceslistScreen.navigationOptions = navData => {
    return {
    headerTitle: 'Places',
    headerRight: (
        <HeaderButtons HeaderButtonComponent={CustomHeaderbutton}>
        <Item
        title="create place"
        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
        onPress={() => {
            navData.navigation.navigate('Createplace')
        }}>

        </Item>
        </HeaderButtons>
    )
    }
}

export default PlaceslistScreen