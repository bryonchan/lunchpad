import React, { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {removeEvent} from '../actions';

class EventCard extends Component {
    static propTypes = {
        className: PropTypes.string,
        event: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove() {
    	console.log('hndleRemove');
    	this.props.dispatch(removeEvent(this.props.event));
    }

    render() {
    	let {name, address} = this.props.event;
        return (
            <Card>
			    <CardMedia
			      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
			    >
			      <img src="images/cake.jpg" />
			    </CardMedia>
			    <CardTitle title={name} subtitle={address} />
			    <CardText>
			      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
			      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
			      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
			    </CardText>
			    <CardActions>
			      <FlatButton label="Remove" onClick={this.handleRemove}/>
			      <FlatButton label="Action2" />
			    </CardActions>
			  </Card>
        );
    }
}

export default connect()(EventCard);
