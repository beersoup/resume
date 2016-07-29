import React from 'react';
import '../css/main.css';


require('bootstrap-webpack');


var ExperienceItem = React.createClass ({
    render() {
        return (
            <div className="job clearfix">
                <div className="col-xs-4">
                    <div className="where">{this.props.experience.place}</div>
                    <div className="year">{this.props.experience.year}</div>
                </div>
                <div className="col-xs-8">
                    <div className="profession">{this.props.experience.position}</div>
                    <div className="description">{this.props.experience.job_description}</div>
                </div>
            </div>
        );
    }
    
});

export default ExperienceItem;