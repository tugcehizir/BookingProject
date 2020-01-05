import { combineReducers } from 'redux';
import bookingReducer from './bookingReducer';

const reducers = combineReducers({ app: bookingReducer});

export default reducers;