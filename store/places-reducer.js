import { CREATE_PLACE, SET_NEW } from "./places-action";
import Place from '../models/place';

const initState = {
    places: []
}

export default (state = initState, action) => {
    switch(action.type){
        case SET_NEW:
           return {
               places: action.places.map(pl => new Place(pl.id.toString(), pl.title, pl.imageUri)
               )
           }
        case CREATE_PLACE:
           const newOne = new Place(
           action.placeData.id.toString(), 
           action.placeData.title, 
           action.placeData.image)
           return {
               places: state.places.concat(newOne)
           }
        default:
           return state
    }
}