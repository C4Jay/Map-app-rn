import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import * as placesactions from '../store/places-action';
import ImgPicker from '../components/imgselector';

const CreateplaceScreen = (props) => {
    
   
    const [title, settitle] = useState('')

    const dispatch = useDispatch()

    const titleHandler = (title) => {
        settitle(title)
    }

    const savePlaceHandler = () => {
        dispatch(placesactions.createPlace(title))
        props.navigation.navigate('Placeslist')
    }

    return (
    <ScrollView>
        <View style={styles.form}>
            
            <Text style={styles.label}>Title</Text>
            <TextInput
             onChangeText={titleHandler} 
             value={title}
             style={styles.textinput}></TextInput>

             <ImgPicker></ImgPicker>


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