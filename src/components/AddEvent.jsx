import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {addEvent, saveEvent} from '../actions';

class AddEvent extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(ev) {

    	this.props.dispatch(saveEvent(this.refs.name.getValue(), this.refs.address.getValue()));
  	}

	render() {
		let nameErrorMessage, addressErrorMessage;
		if(this.props.events.errorMessage){
			nameErrorMessage = this.props.events.errorMessage.name ? this.props.events.errorMessage.name.message:null;
			addressErrorMessage  = this.props.events.errorMessage.address ? this.props.events.errorMessage.address.message:null;
		}
		return (<div>
            <TextField floatingLabelText="Name" ref="name" errorText={nameErrorMessage} />
            <TextField floatingLabelText="Address sdf" ref="address"  errorText={addressErrorMessage} />
            <DatePicker floatingLabelText="Start Date"/>
            <DatePicker floatingLabelText="End Date 2"/>
            <FlatButton label="Save" primary={true} onClick={this.handleClick}/> 
          </div>)
	}
}

const mapStateToProps = (state) => {
	return {events: state.EventListReducer};
}

AddEvent = connect(mapStateToProps)(AddEvent)

export default AddEvent;