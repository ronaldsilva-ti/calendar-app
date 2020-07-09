import moment  from 'moment';
import { types } from '../types/types';

const { EVENT_ADD_NEW, EVENT_SET_ACTIVE } = types

const INITIAL_STATE = {
    events:[{        
        title:'Cumprir tarefa',
        start: moment().toDate(),
        end: moment().add( 2,'hours' ).toDate(),
        bgcolor: '#fafafa',
        notes: 'Comprar pastel',
        user:{
            id: '123',
            name: 'Ronald Silva'
        }
    }],
    activeEvent: null
}

export const calendarReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) { 
        case EVENT_SET_ACTIVE:
            return { ...state, activeEvent: action.payload }     
        default:
            return { ...state }
    }
}