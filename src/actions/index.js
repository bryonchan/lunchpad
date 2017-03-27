import database from '../data/data';

let idCount = 1;

export const getEventsRequestedAction = () => {
	return {
		type: "EVENTS_REQUESTED"
	}
}

export const getEventsRejectedAction = () => {
  return {
    type: "EVENTS_REJECTED"
  }
}

export const getEventsFulfilledAction = (events) => {
  return {
    type: "EVENTS_FULFILLED",
    events
  };
}

export const eventAddedAction = (event) => {
  return {
    type: "EVENT_ADDED",
    event
  };
}

export const saveEventRequestedAction = () => {
	return {
		type: "SAVE_EVENT_REQUESTED"
	}
}

export const saveEventRejectedAction = () => {
  return {
    type: "SAVE_EVENT_REJECTED"
  }
}

export const saveEventFulfilledAction = (events) => {
  return {
    type: "SAVE_EVENT_FULFILLED",
    events
  };
}

export const removeEventRequestedAction = () => {
	return {
		type: "REMOVE_EVENT_REQUESTED"
	}
}

export const removeEventRejectedAction = () => {
  return {
    type: "REMOVE_EVENT_REJECTED"
  }
}

export const removeEventFulfilledAction = (events) => {
  return {
    type: "REMOVE_EVENT_FULFILLED",
    events
  };
}


export const getEvents = () => {
	console.log('getEvents call');
	return (dispatch) => {
		dispatch(getEventsRequestedAction());
		return database.ref('/events').once('value', snap => {
	      const events = snap.val();
	      dispatch(getEventsFulfilledAction(events))
	    })
	    .catch((error) => {
	      console.log(error);
	      dispatch(getEventsRejectedAction());
	    });
	}
}

export const saveEvent = (name, address) => {
	return (dispatch) => {
		dispatch(saveEventRequestedAction());
		const eventsRef = database.ref('/events');
		var newEvent = {name, address};
		eventsRef.push(newEvent)
		.then(() => {
	      dispatch(saveEventFulfilledAction(newEvent));
		})
		.catch((error) => {
	      console.log(error);
	      dispatch(saveEventRejectedAction());
	    });
	}
}

export const removeEvent = (event) => {
	return (dispatch) => {
		dispatch(removeEventRequestedAction());
		const eventsRef = database.ref('/events/'+event.id);
		
		eventsRef.remove()
		.then(() => {
	      dispatch(removeEventFulfilledAction());
		})
		.catch((error) => {
	      console.log(error);
	      dispatch(removeEventRejectedAction());
	    });
	}
	return {
		type: 'REMOVE_EVENT',
		event: event
	}
}


export const addEvent = (name, address) => {
	return {
		type: 'ADD_EVENT',
		id: idCount++,
		name, 
		address
	}
}

export const showAddEventForm = () => {
	return {
		type: 'SHOW_ADD_EVENT_FORM'
	}
}

export const hideAddEventForm = () => {
	return {
		type: 'HIDE_ADD_EVENT_FORM'
	}
}

