import React, { Component } from 'react';
import '../../assets/custom/css/style.css';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css'
import SecondRowLeft from './second-row-left';
import SecondRowRight from './second-row-right';

require('bootstrap-webpack');

export default class SecondRow extends Component {
    render () {
        return (
            <div className="row nopadding" style={{ backgroundColor: '#fce2d6' }}>
                <SecondRowLeft />
                <SecondRowRight />
            </div>
        );
    }

}