import React from 'react';
import '../css/main.css';



require('bootstrap-webpack');

var SkillItem = React.createClass({
    render() {
        
        var styleWidth = this.props.skillItem['data-percent']*100;
        
        return (
            <div className="item-skills"
                 data-percent={this.props.skillItem['data-percent']} 
                 style={{ width: styleWidth }}>{this.props.skillItem.skill}>
            </div>
        );
    }
});

export default SkillItem;