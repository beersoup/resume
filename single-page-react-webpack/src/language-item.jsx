import React from 'react';
import '../css/main.css';

require('bootstrap-webpack');

var LanguageItem = React.createClass({
    render() {
        return (
            <div className="skill">{this.props.languageName}
                <div className="icons pull-right">
                    <div style={{ 
                    width: 120, height: 14, 
                    }} className="icons-red">
                        
                    </div>
                </div>
            </div>
        );
    }
});

export default LanguageItem;