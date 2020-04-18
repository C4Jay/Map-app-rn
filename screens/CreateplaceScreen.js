import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import * as placesactions from '../store/places-action';
import ImgPicker from '../components/imgselector';
import Pickerlocation from '../components/Picklocation';

const CreateplaceScreen = (props) => {
    
   
    const [title, settitle] = useState('')
    const [imguri, setimguri] = useState()
    const [locationselected, setlocationselected] = useState()

    const dispatch = useDispatch()

    const titleHandler = (title) => {
        settitle(title)
    }

    const takenimageHandler = (imagepath) => {
        setimguri(imagepath)
    }

    const savePlaceHandler = () => {
        dispatch(placesactions.createPlace(title, imguri, locationselected))
        props.navigation.navigate('Placeslist')
    }

    const locationpickedHandler = useCallback ((location) => {
        console.log(location)
        setlocationselected(location)
    }, [])

    return (
    <ScrollView>
        <View style={styles.form}>
            
            <Text style={styles.label}>Title</Text>
            <TextInput
             onChangeText={titleHandler} 
             value={title}
             style={styles.textinput}></TextInput>

             <ImgPicker onImageTaken={takenimageHandler}></ImgPicker>

             <Pickerlocation onpickedlocation={locationpickedHandler} navigation={props.navigation}></Pickerlocation>
            <Button onPress={savePlaceHandler} color="purple">
            Create
            </Button>

        </View>  
   </ScrollView>
        )
}

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textinput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 10
    }
})

export default CreateplaceScreen