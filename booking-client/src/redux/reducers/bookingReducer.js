
const initialState = {
    hotels: [],
    request: false,
    selectedHotels: [],
    rooms: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'hotel/request':
            return { ...state };
        case 'hotel/success':
            return { ...state, hotels: action.data, request: false };
        case 'selectedHotel/success':
            return { ...state, selectedHotels: action.data };            
        case 'room/success':
            return { ...state, rooms: action.data };
        default:
            return state;
    }
}