export const CREATE_PLACE = 'CREATE_PLACE';

export const createPlace = (title, image) => {
    return { type: CREATE_PLACE, placeData: { title: title, image: image }};
}