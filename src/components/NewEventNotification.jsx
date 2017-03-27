import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';

// const mapDispatchToProps = (dispatch) => {
//     return {
//         newEvent: () => {
//             dispatch(newEventAction());
//         },
//     };
// };

const mapStateToProps = (state) => {
    return {newEvent: state.notifications.newEvent};
};

export class NewEventNotification extends Component {
    render() {
        const {
            newEvent
        } = this.props;

        let message = <span>{newEvent.name}</span>
        return (
            <Snackbar open={true} message={message} action="Go"/>
        );
    }
}

export default connect(
    mapStateToProps
)(NewEventNotification);
