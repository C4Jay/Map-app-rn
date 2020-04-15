import { CREATE_PLACE } from "./places-action";
import Place from '../models/place';

const initState = {
    places: []
}

export default (state = initState, action) => {
    switch(action.type){
        case CREATE_PLACE:
           const newOne = new Place(new Date().toString(), 
           action.placeData.title, 
           action.placeData.image)
           return {
               places: state.places.concat(newOne)
           }
        default:
           return state
    }
}