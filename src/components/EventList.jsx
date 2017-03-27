import React from 'react';
import {connect} from 'react-redux';
import {getEvents, eventAddedAction} from '../actions';
import FlatButton from 'material-ui/FlatButton';
import EventCard from './EventCard';
import database from '../data/data';

class EventList extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillMount() {
	    database.ref('/events').on('child_added', (snap) => {
	      this.props.dispatch(eventAddedAction(snap.val()));
	      this.props.dispatch(getEvents());
	    });
	  }

	render(){
		var list = this.props.events.map((event) => {
			return (<EventCard  key={event.id} event={event} />);
		});
		return (<div>
				{list}
			</div>);
	}
}

EventList.defaultProps = {
	events: [{name: "test"}]
}

const mapStateToProps = (state) => {
	return {events: state.EventListReducer};
}

EventList = connect(mapStateToProps)(EventList);

export default EventList;