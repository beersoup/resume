import React, { Component } from 'react';
import '../../assets/custom/css/pastel.css';
import '../../assets/custom/css/style.css';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/hover/css/hover-min.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css'

require('bootstrap-webpack');

export default class HeaderDownload extends Component {
    render () {
        return (
            <a href="http://medlogotyp.se/cv/img/cv.pdf" target='_blank' className="hvr-sweep-to-right">
                <i className="flaticon-download149"></i>
            </a>
        );
    }

}