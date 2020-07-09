import { combineReducers } from 'redux';

//Reducers
import { uiReducer } from './uiReducer';
import { calendarReducer } from './calendarReducer'



export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer
})