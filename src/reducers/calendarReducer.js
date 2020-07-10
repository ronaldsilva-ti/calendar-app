// import moment  from 'moment';
import { types } from '../types/types';

const { EVENT_ADD_NEW, EVENT_SET_ACTIVE } = types

const INITIAL_STATE = {
    events:[{        
        title:'',
        start: null,
        end: null,
        bgcolor: '#fafafa',
        notes: '',
        user:{
            id: '123',
            name: 'Ronald Silva'
        }
    }],
    activeEvent: null
}

export const calendarReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) { 
        case EVENT_SET_ACTIVE :
            return { ...state, activeEvent: action.payload }     
        case  EVENT_ADD_NEW :
            return { ...state, events: [ ...state.events, action.payload ] }
        default:
            return { ...state }
    }
}