

export const eventItem = (state = {}, action) => {
	// console.log('eventObject called', arguments);

	switch(action.type) {
		case 'ADD_EVENT': 
			return {
				id: action.id,
				name: action.name,
				saved: true
			}
		default:
			return state;
	}
}

const EventList = (state = [], action) => {
	//console.log('EventList called', arguments);

	switch(action.type) {
		case 'ADD_EVENT': 
			if(!action.name || !action.address){
				var events = [...state];
				events.errorMessage = {};

				if(!action.name){
					events.errorMessage.name = {
						id: 1,
						message: 'Name field is required'
					}
				}
				if(!action.address){
					events.errorMessage.address = {
						id: 2,
						message: 'Address field is required'
					}
				}	
				return events; 
			}
			
			return [...state, eventItem(undefined, action)];
		case 'EVENTS_FULFILLED':
			events = [];
			if(action.events){
				for(var key in action.events){
					var event = action.events[key];
					event.id = key;
					events.push(event);
				}
			}
			return events;
		default: return state;
	}
}

export default EventList;