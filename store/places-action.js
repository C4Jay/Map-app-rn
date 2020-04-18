import * as FileSystem from 'expo-file-system';

export const CREATE_PLACE = 'CREATE_PLACE';
export const SET_NEW = 'SET_NEW';
import env from '../vars/env'
import { insertPlace, fetchPlaces} from '../helpers/db';

export const createPlace = (title, image, location) => {
    return async dispatch => {

        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${env.googleapiKeyworking}`)

        if(!response.ok) {
            throw new Error('Something went wrong')
        }

        const resData = await response.json()
        console.log(resData)
        if(!resData.results) {
            throw new Error('Something went wrong')
        }

        const locationaddress = resData.results[0].formatted_address

        const imgname = image.split('/').pop()
        const newPath = FileSystem.documentDirectory + imgname

        try {
            await FileSystem.moveAsync({
            from: image,
            to: newPath
        });
        const dbResult = await insertPlace(
            title, 
            newPath, 
            locationaddress, 
            location.lat, 
            location.lng
        );
        console.log(dbResult)
    } catch(err) {
        console.log(err)
        throw err
    }
        dispatch({ type: CREATE_PLACE, placeData: {id: dbResult.insertId, title: title, image: newPath, address: locationaddress, coords: {
            lat: location.lat,
            lng: location.lng
        } }});

    }
   }

   export const loadPlaces = () => {
       return async dispatch => {
        try {
           const dbResult = await fetchPlaces()
           console.log(dbResult)
           dispatch({ type: SET_NEW, places: dbResult.rows._array})           
           
         
       } catch(err) {
           throw(err)
       }
       }
   }

   