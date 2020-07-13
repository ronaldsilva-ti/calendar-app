import { types } from '../types/types';

const { 
    EVENT_ADD_NEW,
    EVENT_SET_ACTIVE,
    EVENT_CLEAR_ACTIVE_EVENT,
    EVENT_UPDATED,
    EVENT_DELETED
 } = types;

export const eventAddNew = event => ({
    type: EVENT_ADD_NEW,
    payload: event
})

export const eventSetActive = event => ({
    type: EVENT_SET_ACTIVE,
    payload: event
})  

export const eventClearActiveEvent = () => ({type: EVENT_CLEAR_ACTIVE_EVENT });

export const eventUpdated = event => ({
    type: EVENT_UPDATED,
    payload: event
})

export const eventDeleted = () => ({ type: EVENT_DELETED })