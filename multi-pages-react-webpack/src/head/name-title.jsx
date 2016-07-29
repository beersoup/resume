import React, { Component } from 'react';
import '../../assets/custom/css/pastel.css';
import '../../assets/custom/css/style.css';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/hover/css/hover-min.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css';

require('bootstrap-webpack');

export default class NameTitle extends Component {
    render () {
        return (
            <h2 className="font-accident-two-light uppercase">
                Jennie Lenier
            </h2>
        );
    }

}