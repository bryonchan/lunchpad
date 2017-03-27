import {
    NewEventAction
} from '../actions';

const defaultState = {
    newEvent: {
    	show: true
    },
};

const Notifications = (state = defaultState, action = {}) => {
    switch (action.type) {
        case 'EVENT_ADDED':
            return {
                newEvent: {
                	...action.event,
                	show: true
                }
            };

        default:
            return state;
    }
};

export default Notifications;
