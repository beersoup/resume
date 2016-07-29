import React, { Component } from 'react';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/hover/css/hover.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css'




require('bootstrap-webpack');

export default class About extends Component {
    render () {
        return (
            <div className="col-md-12 nopadding">
                <h3 className="font-accident-two-normal uppercase">About me</h3>
                <div className="quote">
                    <h5 className="font-accident-one-bold uppercase subtitle" style={{ color: '#E5989B' }}>
                        Hard-working and quick learning person...</h5>
                    <div className="dividewhite1"></div>
                    <div className="dividewhite2"></div>
                </div>
            </div>
        );
    }

}