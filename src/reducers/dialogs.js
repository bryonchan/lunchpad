const initialState = {
	addEventForm: {
		visible: false
	}
}

const showForm = (state = {}, action) => {
	return Object.assign({}, state, {visible: true});
}

const hideForm = (state = {}, action) => {
	return Object.assign({}, state, {visible: false});
}

const dialogs = (state = initialState, action) => {
	switch(action.type) {
		case 'SHOW_ADD_EVENT_FORM':
			return Object.assign({}, state, {addEventForm: showForm(state.addEventForm)});
		case 'HIDE_ADD_EVENT_FORM':
			return Object.assign({}, state, {addEventForm: hideForm(state.addEventForm)});
		default: 
			return state;
	}
}

export default dialogs;