import React from 'react';
import '../css/main.css';


require('bootstrap-webpack');

var EducationItem = React.createClass({
    render() {
        return(
            <li>
                <div className="year pull-left">{this.props.education.year}</div>
                <div className="description pull-right">
                    <h3>{this.props.education.head_description}</h3>
                    <p>{this.props.education.description}</p>
                </div>
            </li>
        );
    }
});

export default EducationItem;