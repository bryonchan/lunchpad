import EventList, {eventItem} from './event-list.js';

describe('Events reducer', () => {
	it('should return initial state', () => {
		expect(EventList(undefined, {})).toEqual([]);
	});
	it('should return added event', () => {
		expect(EventList(undefined, {
			id: 1,
			name: 'New event',
			address: 'New address',
			type: 'ADD_EVENT'
		})).toEqual([{
			id: 1,
			saved: true,
			name: 'New event'}]);
	});
	it('should return name error message', () => {
		var expected = [];
		expected.errorMessage = {};
		expected.errorMessage.name = {
			message: 'Name field is required',
			id: 1}
		expect(EventList(undefined, {
			id: 1,
			name: '',
			address: 'fasdfa',
			type: 'ADD_EVENT'
		})).toEqual(expected);
	});
	it('should return address error message', () => {
		var expected = [];
		expected.errorMessage = {};
		expected.errorMessage.address = {
			message: 'Address field is required',
			id: 2}
		expect(EventList(undefined, {
			id: 1,
			name: 'fasdf',
			address: '', 
			type: 'ADD_EVENT'
		})).toEqual(expected);
	});
	it('should return name and address error message', () => {
		var expected = [];
		expected.errorMessage = {};
		expected.errorMessage.name = {
			message: 'Name field is required',
			id: 1}
		expected.errorMessage.address = {
			message: 'Address field is required',
			id: 2}
		expect(EventList(undefined, {
			id: 1,
			name: '',
			address: '', 
			type: 'ADD_EVENT'
		})).toEqual(expected);
	});
	it('should return initial state', () => {
		expect(EventList(undefined, {})).toEqual([]);
	});
	
});

describe('eventItem reducer', () => {
	it('should do something', () => {
		expect(eventItem(undefined, {})).toEqual({});
	})


});