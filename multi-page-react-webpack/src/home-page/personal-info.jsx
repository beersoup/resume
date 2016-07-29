import React, { Component } from 'react';
import '../../assets/custom/css/style.css';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/hover/css/hover.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css'

require('bootstrap-webpack');

export default class PersonalInfo extends Component {
    render () {
        return (
            <div className="fullwidth box">
                <div className="one">
                    <p className="small uppercase">{this.props.infoLeft}</p>
                </div>
                <div className="two">
                    <p className="small">{this.props.infoRight}</p>
                </div>
            </div>

        );
    }

}