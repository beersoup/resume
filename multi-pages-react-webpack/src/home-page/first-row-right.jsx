import React, { Component } from 'react';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/hover/css/hover.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css'
import PersonalInfo from './personal-info';

require('bootstrap-webpack');

export default class FirstRowRight extends Component {
    render () {
        return (
            <div className="col-md-4 personal nopadding ui-block-color01">
                <div className="padding-50 wow fadeInRight" data-wow-delay="0.4s" data-wow-offset="10" 
                     style={{ background:'#eef5db' }}>
                    <h3 className="font-accident-two-normal uppercase">Personal Info</h3>
                    <div className="dividewhite3"></div>
                    <div>
                        <PersonalInfo infoLeft="Name:" infoRight="Jennie Lenier"/>
                        <PersonalInfo infoLeft="Date of birth:" infoRight="10/06/76"/>
                        <PersonalInfo infoLeft="Address:" infoRight="Sankt Paulsgatan 3, Stockholm"/>
                        <PersonalInfo infoLeft="Phone:" infoRight="070-530-9573"/>
                        <PersonalInfo infoLeft="E-mail:" infoRight="jennie.lenier@gmail.com"/>
                    </div>
                    <div className="dividewhite1"></div>
                </div>
            </div>

        );
    }

}