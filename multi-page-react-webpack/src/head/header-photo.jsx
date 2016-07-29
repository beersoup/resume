import React, { Component } from 'react';
import '../../assets/custom/css/pastel.css';
import '../../assets/custom/css/style.css';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/hover/css/hover-min.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css';

require('bootstrap-webpack');

export default class  HeaderPhoto extends Component {
    render () {
        return (
            <a href="#">
                <div className="col-md-5 col-lg-4 vc-photo">&nbsp;</div>
            </a>
        );
    }
    
}