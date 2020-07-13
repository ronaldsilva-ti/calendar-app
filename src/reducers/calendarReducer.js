// import moment  from 'moment';
import { types } from '../types/types';

const { 
    EVENT_ADD_NEW,
    EVENT_SET_ACTIVE,
    EVENT_CLEAR_ACTIVE_EVENT,
    EVENT_UPDATED,
    EVENT_DELETED
} = types;

const INITIAL_STATE = {
    events:[{      
        id: new Date().getTime(),  
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
    switch ( action.type ) { 
        case EVENT_SET_ACTIVE :
            return { ...state, activeEvent: action.payload }     
        case  EVENT_ADD_NEW :
            return { ...state, events: [ ...state.events, action.payload ] }
        case EVENT_CLEAR_ACTIVE_EVENT :
            return { ...state, activeEvent: null }
        case EVENT_UPDATED : 
            return { ...state, events:  state.events.map(
                event => ( event.id === action.payload.id ) ? action.payload : event
            )}
        case EVENT_DELETED : 
            return { ...state, events:  state.events.filter(
                event => ( event.id !== state.activeEvent.id )
            ),
            activeEvent: null
        }
        default:
            return { ...state }
    }
}