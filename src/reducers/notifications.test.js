import notifications from './notifications.js';

describe('Notifications', () => {
    afterEach(() => {
        
    });

    beforeEach(() => {
        
    });

    it('should toggle visibility', () => {
        expect(notifications(undefined, {type: 'EVENT_ADDED', event: {name: 'new added event'}}))
        	.toEqual({newEvent: {name: 'new added event', show: true}});
    });
});