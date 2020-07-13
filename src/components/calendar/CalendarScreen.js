import React,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';

//Components
import Navbar from '../ui/Navbar';
import CalendarEvent from './CalendarEvent';
import CalendarModal  from './CalendarModal';
import AddNewFab from '../ui/AddNewFab';

import moment from 'moment';
import { messages } from '../../helpers/calendar-messages-pt';

import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/event';


moment.locale('pt-br');

const localizer = momentLocalizer( moment );




export default function CalendarScreen(){
   const { events } = useSelector(state => state.calendar)
   // console.log(events)
   
   const dispatch = useDispatch()

   const [ lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'month' );

   const onDoubleClick = () => {
      dispatch( uiOpenModal()  )
      // console.log('Abrir Modal');
      
   }

   const onSelectedEvent = e => {
     dispatch( eventSetActive ( e ) )
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

            
         <AddNewFab />   

         <CalendarModal />                            
       </div>
    )
}
