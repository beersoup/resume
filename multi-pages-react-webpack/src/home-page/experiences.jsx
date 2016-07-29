import React, { Component } from 'react';
import '../../assets/custom/css/style.css';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/hover/css/hover.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css'

require('bootstrap-webpack');

export default class Experiences extends Component {
    render () {
        return (
                <ul className="">
                    <li className="date" style={{ color: '#3f3f3f' }}>{this.props.experiences.yearEng}</li>
                    <li className="company uppercase">
                        <a style={{ color: '#3f3f3f' }}>{this.props.experiences.placeEng}</a>
                    </li>
                    <li className="position" style={{ color: '#3f3f3f' }}>{this.props.experiences.positionEng}</li>
                </ul>

        );
    }

}