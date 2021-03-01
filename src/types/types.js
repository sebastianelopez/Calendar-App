import { eventClearActiveEvent } from "../actions/events";

export const types = {

    uiOpenModal: '[ui] Open modal',
    uiCloseModal: '[ui] Close modal',

    eventSetActive: '[event] Set active',
    eventStartAddNew: '[event] Start add new',
    eventAddNew: '[event] Add new',
    eventClearActiveEvent: '[event] Clear active event',
    eventUpdated: '[event] Update event',
    eventDeleted: '[event] Delete event',


    authCheckingFinish: '[auth] Finish checking login state',
    authStartLogin: '[auth] Start login',
    authLogin: '[auth] Login',
    authStartRegister: '[auth] Start register',
    authStartTokenRenew: '[auth] Start token renew',
    authLogout: '[auth] Logout',

}