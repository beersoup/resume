import React, { Component } from 'react';
import ResumeTitle from './resume-title';
import ResumeTimeLine from './resume-time-line';


require('bootstrap-webpack');

export default class Resume extends Component {
    render () {
        return (
            <div id="resume" className="inner-content">
                <ResumeTitle />
                <ResumeTimeLine />
            </div>

        );
    }
}