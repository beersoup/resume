import React from 'react';
import '../css/main.css';
require('font-awesome/css/font-awesome.css');
require('bootstrap-webpack');


var ContactItem = React.createClass({
    render() {
        return (
            <div className="contact-item">
                <div className="icon pull-left text-center">
                    <span className={this.props.contactIcon}></span>
                </div>
                <div className="title only pull-right">{this.props.contactTitle}</div>
                <div className="description pull-right">{this.props.contactDescription}</div>
            </div>
        );
    }
});

export default ContactItem;