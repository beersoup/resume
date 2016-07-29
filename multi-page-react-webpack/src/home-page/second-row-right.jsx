import React, { Component } from 'react';
import '../../assets/custom/css/style.css';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css'
import ProgressBar from './progress-bar';

require('bootstrap-webpack');

export default class SecondRowRight extends Component {
    
    render () {
        
        return (
            <div className="col-md-8 circle-skills nopadding" style={{ backgroundColor: '#fce2d6' }}>
                <div className="padding-50 wow fadeInLeft" data-wow-delay="0.6s" data-wow-offset="5">
                    <h3 className="font-accident-two-normal uppercase">My Professional skills</h3>
                    <div className="dividewhite1"></div>
                    <div className="row">
                        <ProgressBar dataPercent="72.5" 
                                     headSkill="Printing" 
                                     infoSkill="Experienced and understanding print working environment. Especially, Offset and Flexography Printing ..."/>
                        <ProgressBar dataPercent="78.5"
                                     headSkill="Graphic Design"
                                     infoSkill="Familiar with Desktop Publishing Software such as Adobe InDesign, Illustrator and Photoshop ..."/>
                        <ProgressBar dataPercent="25.5"
                                     headSkill="Coding"
                                     infoSkill="Love coding, learning how to code by making real sites with Handlebars, React with Webpack  ..."/>
                    </div>
                </div>
            </div>
        );
    }

}