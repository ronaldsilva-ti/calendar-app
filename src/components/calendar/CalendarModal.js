import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';

import { uiCloseModal } from '../../actions/ui';



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

    const { modalOpen } = useSelector( state => state.ui );
    const dispatch = useDispatch();

    const [ startDate, setStartDate ] = useState( now.toDate() );
    const [ endDate, seEndDate ] = useState( nowPlus1.toDate() );
    const [ titleValid,setTitleValid ]  = useState( true );

    const [ formValues, setFormValues ] = useState({
        title: 'Evento',
        notes:'',
        start: now.toDate(),
        end: nowPlus1.toDate()
    })

    const { notes, title, start, end } = formValues;

    const closeModal = () => {    
        dispatch(  uiCloseModal() )
        console.log('Close Modal')
    }

    const handleInputChange = ({ target }) => {
        
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }    


    const handleStartDateChange = e =>{
        setStartDate( e )

        setFormValues({
            ...formValues,
            start: e
        })
    }

    
    const handleEndtDateChange = e =>{
        seEndDate( e )

         setFormValues({
            ...formValues,
            end: e
        })
    }

    const handleInputSubmit = e => {
        e.preventDefault();

        const momentStart = moment( start );
        const momentEnd = moment( end );
        
        if( momentStart.isSameOrAfter( momentEnd ) ){
            return Swal.fire('Erro','A data final deve ser maior que a data inicial','error')
        }

        if( title.trim().length < 2 ){
            return setTitleValid( false )
        }

        closeModal()
        setTitleValid( true )
    }

    return(
        <Modal
        isOpen={ modalOpen}
        onRequestClose={ closeModal }
        style={ customStyles }
        closeTimeoutMS={ 200 }
        className="modal"
        overlayClassName="modal-fondo"
        >

        <h1>Novo Evento</h1>
        <hr />
        <form
          onSubmit={ handleInputSubmit }
         className="container"
         >

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
                    minDate={ startDate }
                    onChange={ handleEndtDateChange }
                    value={ endDate }
                    className="form-control"
                /> 
            </div>

            <hr />
            <div className="form-group">
                <label>Titulo e notas</label>
                <input 
                    type="text" 
                    className={`form-control ${!titleValid && 'is-invalid'}`}
                    placeholder="Título do evento"
                    name="title"
                    onChange={ handleInputChange }
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
                    onChange={ handleInputChange }
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