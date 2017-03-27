import {combineReducers} from 'redux';
import EventListReducer from './event-list.js';
import dialogs from './dialogs.js';
import notifications from './notifications.js';

const listApp = combineReducers({dialogs, EventListReducer, notifications});

export default listApp;