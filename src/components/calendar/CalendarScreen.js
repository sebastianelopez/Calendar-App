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
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventStartLoading, setActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';
import { useEffect } from 'react';

moment.locale('es');

const localizer = momentLocalizer(moment);

 

export const CalendarScreen = () => {

    

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(eventStartLoading());

    }, [dispatch])

    const {events,activeEvent} = useSelector(state => state.calendar);
    const {uid} = useSelector(state => state.auth);

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = ()=>{
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (e)=>{
        dispatch(setActive(e));        
    }

    const onViewChange = (e)=>{
        setLastView(e);
        localStorage.setItem('lastView',e);
    }
    const onSelectSlot = ()=>{
        dispatch(eventClearActiveEvent());
    }
   
    
    const eventStyleGetter = (event, start, end, isSelected)=>{

        const style ={
            backgroundColor: (uid === event.user._id) ? `${event.bgcolor}` : '#465660',
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
                onSelectSlot={onSelectSlot}
                selectable={true}
                onView={onViewChange}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            {(activeEvent)&& <DeleteEventFab />}

            <AddNewFab />

            <CalendarModal />
        </div>
    )
}
