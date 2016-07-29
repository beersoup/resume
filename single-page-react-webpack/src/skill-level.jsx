import React from 'react';
import '../css/main.css';


require('bootstrap-webpack');

var SkillLevel = React.createClass({
    render() {
        return (
            <div className="skills-legend clearfix">
                <div className="legend-left legend">Beginner</div>
                <div className="legend-left legend">Proficient</div>
                <div className="legend-right legend">Expert</div>
                <div className="legend-right legend">Master</div>
            </div>
        );
    }

});

export default SkillLevel;