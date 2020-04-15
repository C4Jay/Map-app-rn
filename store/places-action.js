export const CREATE_PLACE = 'CREATE_PLACE';

export const createPlace = title => {
    return { type: CREATE_PLACE, placeData: { title: title }};
}