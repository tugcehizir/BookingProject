
const initialState = {
    hotels: [],
    request: false,
    selectedHotels: [],
    rooms: [],
    reservation: [],
    selectedReserve: [],
    selectedRoom: "",
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
        case 'reservation/success':
            return { ...state, reservation: action.data };
        case 'selectedReserve/success':
            return { ...state, selectedReserve: action.data };
        case 'selectedRoom/success':
            return { ...state, selectedRoom: action.data };
        default:
            return state;
    }
}