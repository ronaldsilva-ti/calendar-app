import React from 'react';
import { useDispatch } from 'react-redux';
import { eventDeleted } from '../../actions/event';

export default function DeleteEventFab(){

    const dispatch = useDispatch()

     function deleteEvent(){
        dispatch( eventDeleted())
     } 





    return (
        <button className="btn btn-danger fab-danger" onClick={ deleteEvent }>
            <i className="fas fa-trash"></i>
            <span> Apagar Evento</span>
        </button>
    )

}