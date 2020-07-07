import React, { useState } from 'react';

import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('#root')

 
  const now = moment().minutes(0).seconds(0).add(1,'hours');
  const nowPlus1 = now.clone().add(1, 'hours')

export default function CalendarModal(){

    const [ startDate, setStartDate ] = useState( now.toDate() )
    const [ endDate, seEndDate ] = useState( nowPlus1.toDate() )

    const [ formValues, setFormValues ] = useState({
        title: 'Evento',
        notes:'',
        start: now.toDate(),
        end: nowPlus1.toDate()
    })

    const { notes, title } = formValues;

    const closeModal = () => {
    }

    const handleStartDateChange = e =>{
        setStartDate( e )
        console.log(e)
    }

    
    const handleEndtDateChange = e =>{
        seEndDate( e )
        console.log(e)
    }

    return(
        <Modal
        isOpen={ true }
        onRequestClose={ closeModal }
        style={ customStyles }
        closeTimeoutMS={ 200 }
        className="modal"
        overlayClassName="modal-fondo"
        >

        <h1>Novo Evento</h1>
        <hr />
        <form className="container">

            <div className="form-group">
            <label>Data e hora inicio</label>
                <DateTimePicker
                    onChange={ handleStartDateChange }
                    value={ startDate }
                    className="form-control"
                 />   
            </div>

            <div className="form-group">
                <label>Data e hora final</label>
                <DateTimePicker
                    onChange={ handleEndtDateChange }
                    minDate={ startDate }
                    value={ endDate }
                    className="form-control"
                 /> 
            </div>

            <hr />
            <div className="form-group">
                <label>Titulo e notas</label>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Título do evento"
                    name="title"
                    value={ title }
                    autoComplete="off"
                />
                <small id="emailHelp" className="form-text text-muted">Uma descrição curta</small>
            </div>

            <div className="form-group">
                <textarea 
                    type="text" 
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    value={ notes }
                    name="notes"
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Informação Adicional </small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Salvar</span>
            </button>

        </form>
        </Modal>
    )
}