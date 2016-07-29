import React from 'react';
import '../css/main.css';

require('bootstrap-webpack');

var Photo = React.createClass({
    render() {
        return (
            <div id="photo-header" className="text-center">
                <div id="photo">
                    <img src="http://medlogotyp.se/cv/img/avatar.jpg" />
                </div>
            </div>
        );
    }
    
    
});

export default Photo;