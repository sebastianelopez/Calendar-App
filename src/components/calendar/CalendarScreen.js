import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import { NavBar } from '../ui/NavBar';
import { messages } from '../../helpers/calendar-messages-es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent } from './CalendarEvent';
import { useState } from 'react';
import { CalendarModal } from './CalendarModal';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events = [{
    title: 'Cumpleaños de Oscar',
    start: moment().toDate(),
    end:moment().add(2,'hours').toDate(),
    bgcolor: 'red',
    notes: 'Comprar una torta',
    user: {
            _id: '123',
            name: 'Sebastian'
          }
}];

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = ()=>{

    }

    const onSelectEvent = ()=>{

    }

    const onViewChange = (e)=>{
        setLastView(e);
        localStorage.setItem('lastView',e);
    }
    
    const eventStyleGetter = (event, start, end, isSelected)=>{

        const style ={
            backgroundColor: `${event.bgcolor}`,
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white',
            
        }

        return {
            style
        }
    }

    return (
        <div className="calendar-screen">
            <NavBar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            <CalendarModal />
        </div>
    )
}
