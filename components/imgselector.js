import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const ImgPicker = (props) => {
    const [imgpicked, setimgpicked] = useState('')

    const Permissionverify = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL)
        if(result.status != 'granted'){
            Alert.alert('permission need','need permissions to proceed',
            [{text: 'OK'}]
            )
            return false
        }
        return true
    } 

    const takeImageHandler = async () => {
        const haspermission = await Permissionverify();
        if(!haspermission){
            return
        }
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
            base64: true
        })

        setimgpicked(image.uri)
    }
    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
            {!imgpicked ? <Text>no image selected</Text> : null }
            {imgpicked ?  <Image source={{uri: imgpicked}} style={styles.img}></Image>
            : null  }
            </View>
            <Button color="purple" onPress={takeImageHandler}>take picture</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center'
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom :10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',

    },
    img:{
        width: '100%',
        height: '100%'
    }

})

export default ImgPicker;