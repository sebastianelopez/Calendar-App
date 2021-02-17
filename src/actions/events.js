import { types } from "../types/types";


export const eventAddNew = (event)=>({

    type: types.eventAddNew,
    payload: event

});

export const setActive = (event)=>({

    type: types.eventSetActive,
    payload: event

});

export const eventClearActiveEvent = ()=>({

    type: types.eventClearActiveEvent,    

});

export const eventUpdated = (event)=>({

    type: types.eventUpdate,
    payload: event    

});

export const eventDeleted = ()=>({

    type: types.eventDeleted  

});