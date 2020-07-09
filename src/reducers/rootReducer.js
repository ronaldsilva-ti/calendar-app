import { combineReducers } from 'redux';

//Reducers
import { uiReducer } from './uiReducer';



export const rootReducer = combineReducers({
    ui: uiReducer
})