import React, { Component, PropTypes } from 'react';

class TopNavigation extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            	<ul>
            		<li>Submit</li>
            	</ul>
            </div>
        );
    }
}

export default TopNavigation;
