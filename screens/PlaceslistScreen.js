import React from 'react';
import { View, Text, Platform, FlatList} from 'react-native';
import { Button } from 'react-native-paper';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderbutton from '../components/Custombutton';
import { useSelector } from 'react-redux';
import PlaceItem from '../components/PlaceItem';


const PlaceslistScreen = (props) => {

    const places = useSelector(state => state.places.places)
    
    return (
        <FlatList data={places} keyExtractor={item => item.id} renderItem={itemData => (
        <PlaceItem
        image={itemData.item.image}
        title={itemData.item.title}
        address={null}
        onSelect={() => {props.navigation.navigate('Placesdetail', {placeTitle: itemData.item.title, placeId:itemData.item.id})}}
        ></PlaceItem>)}></FlatList>
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