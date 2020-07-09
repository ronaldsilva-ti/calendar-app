import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';

//Components
import Navbar from '../ui/Navbar';
import CalendarEvent from './CalendarEvent';
import CalendarModal  from './CalendarModal';

import moment from 'moment';
import { messages } from '../../helpers/calendar-messages-pt';

import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { uiOpenModal } from '../../actions/ui';


moment.locale('pt-br');

const localizer = momentLocalizer( moment );

const events = [{
   title:'Cumprir tarefa',
   start: moment().toDate(),
   end: moment().add( 2,'hours' ).toDate(),
   bgcolor: '#fafafa',
   notes: 'Comprar pastel',
   user:{
      id: '123',
      name: 'Ronald Silva'
   }
}];


export default function CalendarScreen(){
   
   const dispatch = useDispatch()

   const [ lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'month' );

   const onDoubleClick = () => {
      dispatch( uiOpenModal()  )
      // console.log('Abrir Modal');
   }

   const onSelectedEvent = e => {
      console.log(e)
   }

   const OnviewChange = e =>{
      setLastView(e)
      localStorage.setItem('lastView', e)
   }
   


   const eventStyleGetter  = ( event, start, end, isSelected ) => {
      const style = {
         backgroundColor:'#367CF7',
         borderRadius: '01px',
         opacity:0.8,
         display:'block'
      }
      
      return {
         style
      }
   }

    return(
       <div className="calendar-screen">
         <Navbar />
          
         <Calendar
            localizer={ localizer } 
            events={ events }
            startAccessor="start"
            endAccessor="end"
            messages={ messages }           
            eventPropGetter={ eventStyleGetter }
            onDoubleClickEvent={ onDoubleClick }
            onSelectEvent={ onSelectedEvent }
            onView={ OnviewChange }
            view={ lastView }
            components={{
               event: CalendarEvent
            }}
         />

         
         <CalendarModal />                            
       </div>
    )
}
