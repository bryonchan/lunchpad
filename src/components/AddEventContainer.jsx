import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import AddEvent from './AddEvent';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

import {connect} from 'react-redux';

import {showAddEventForm} from '../actions';
import {hideAddEventForm} from '../actions';

 class AddEventContainer extends Component {
     static propTypes = {
         className: PropTypes.string,
     };
 
     constructor(props) {
         super(props);
         
	    this.handleShowEventFormClick = this.handleShowEventFormClick.bind(this);
	    this.handleHideEventFormClick = this.handleHideEventFormClick.bind(this);
	  }
	  handleShowEventFormClick() {
	   this.props.dispatch(showAddEventForm());
	  }
	  handleHideEventFormClick() {
	   this.props.dispatch(hideAddEventForm());
	  }
 
     render() {
     	let actions = (<FloatingActionButton onClick={this.handleHideEventFormClick}>
	            <ContentRemove />
	          </FloatingActionButton>);
         return (
         	<div>

	          <FloatingActionButton onClick={this.handleShowEventFormClick}>
	            <ContentAdd />
	          </FloatingActionButton>
	             <Dialog
		          title="Dialog With Actions"
		          modal={true}
		          actions={actions}
		          open={this.props.form.visible}
		          autoScrollBodyContent={true}
		        >
		          <AddEvent />
		        </Dialog>
	        </div>
         );
     }
 }

 const mapStateToProps = (state) => {
 	return {form: state.dialogs.addEventForm}
 }
 
 export default connect(mapStateToProps)(AddEventContainer);
 