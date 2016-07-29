import React from 'react';
import '../css/main.css';

require('bootstrap-webpack');

var HeaderText = React.createClass({
    
    render() {
        
        return (
            <div id="text-header">
                <h1>Hej,
                    <br></br>
                    <span style={{color: '#777'}}> Jag heter Jennie </span>
                    <span> Lenier, </span>
                    <span style={{color: '#777'}}> och här är min CV </span>
                </h1>
            </div>
        );
    }


});

export default HeaderText;