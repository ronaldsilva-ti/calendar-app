import { types } from '../types/types';

const { EVENT_ADD_NEW, EVENT_SET_ACTIVE } = types;

export const eventAddNew = event => ({
    type: EVENT_ADD_NEW,
    payload: event
})

export const eventSetActive = event => ({
    type: EVENT_SET_ACTIVE,
    payload: event
})  