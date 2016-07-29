import React, { Component } from 'react';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/hover/css/hover-min.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css';

require('bootstrap-webpack');

export default class HeaderNameIcon extends Component {
    render () {
        return (
            <a href="https://github.com/beersoup" target='_blank' className="hvr-sweep-to-right">
                <i className="fa fa-github fa-4x"></i>
            </a>
        );
    }

}