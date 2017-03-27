import dialogs from './dialogs';

describe('dialogs reducers', () => {
	it('should return initial state', () => {
		expect(dialogs(undefined, {})).toEqual({addEventForm: {visible: false}});
	})

	var action = {type: 'SHOW_ADD_EVENT_FORM'};
	it('should return show obj', () => {
		expect(dialogs(undefined, action)).toEqual({addEventForm: {visible: true}});
	})
})