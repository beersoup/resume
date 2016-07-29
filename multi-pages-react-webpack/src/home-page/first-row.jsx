import React, { Component } from 'react';
import '../../assets/custom/css/style.css';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/hover/css/hover.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css'
import FirstRowLeft from './first-row-left';
import FirstRowRight from './first-row-right';

require('bootstrap-webpack');

export default class FirstRow extends Component {
    render () {
        return (
            <div className="m-details row nopadding bg-color01">
                <FirstRowLeft />
                <FirstRowRight />
            </div>

        );
    }

}