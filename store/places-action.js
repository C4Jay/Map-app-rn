import * as FileSystem from 'expo-file-system';

export const CREATE_PLACE = 'CREATE_PLACE';
export const SET_NEW = 'SET_NEW';
import env from '../vars/env'
import { insertPlace, fetchPlaces} from '../helpers/db';

export const createPlace = (title, image, location) => {
    return async dispatch => {

        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=${env.googleapiKey}`)
        const imgname = image.split('/').pop()
        const newPath = FileSystem.documentDirectory + imgname

        try {
            await FileSystem.moveAsync({
            from: image,
            to: newPath
        });
        const dbResult = await insertPlace(title, newPath, 'Dummy', 15.6, 16.6
        );
        console.log(dbResult)
    } catch(err) {
        console.log(err)
        throw err
    }
        dispatch({ type: CREATE_PLACE, placeData: {id: dbResult.insertId, title: title, image: newPath }});

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

   