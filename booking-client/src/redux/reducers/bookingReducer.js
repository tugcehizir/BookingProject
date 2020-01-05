
const initialState = {
    hotels: [],
    request: false

};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'hotel/request':
            return { ...state };
        case 'hotel/success':
            return { ...state, hotels: action.data };
        default:
            return state;
    }
}