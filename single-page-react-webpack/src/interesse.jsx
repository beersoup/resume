import React from 'react';
import '../css/main.css';

require('bootstrap-webpack');

var Interesse = React.createClass({
    render() {
        return (
            <div className="box">
                <h2>Interesse</h2>
                <div className="hobby">Resa</div>
                <div className="hobby">Programmering</div>
                <div className="hobby">Fitness</div>
            </div>
        );
    }
});
export default Interesse;