import React, { Component } from 'react';
import '../../assets/custom/css/style.css';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/hover/css/hover-min.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css'

require('bootstrap-webpack');

export default class HeaderExperirnce extends Component {
    render () {
        return (
            <h4 className="cd-headline clip is-full-width font-accident-two-normal uppercase">
                <span>The experienced&nbsp;</span>
                <span className="cd-words-wrapper">
                   <b className="is-visible">Graphic Designer</b>
                   <b>Web Developer</b>
                    <b>Pre-press Operator</b>
                </span>
            </h4>
        );
    }

}