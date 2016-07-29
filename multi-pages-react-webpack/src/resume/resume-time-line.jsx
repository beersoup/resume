import React, { Component } from 'react';
import TimelineItem from './time-line-item';

require('bootstrap-webpack');

export default class ResumeTimeLine extends Component {
    render () {
        return (
            <section id="timeline-vertical" className="inner-section">
                <div className="container-fluid nopadding">
                    <div className="text-center wow fadeInDown" data-wow-delay="0.6s" data-wow-offset="10">
                        <div className="dividewhite4"></div>
                        <h3 className="font-accident-two-normal uppercase">Professional Timeline</h3>
                        <h5 className="font-accident-one-bold uppercase subtitle" style={{ color: '#E5989B' }}>Working hard and making the success</h5>
                        <div className="dividewhite1"></div>
                        <p className="small fontcolor-medium">
                            My Work Experiences Timeline
                        </p>
                    </div>
                </div>
                <div className="dividewhite4"></div>
                <ul className="timeline-vert timeline-light">
                    <TimelineItem timeLineIcon="flaticon-clocks18" 
                                  period="2012 - Present"
                                  photoClass="timeline-photo timeline-bg04"
                                  timeLinePlace="Lenier Solutions, Sweden"
                                  timeLinePosition="Self-employed Web developer" />
                    <TimelineItem invertClass="timeline-inverted"
                                  timeLineIcon="flaticon-clocks18"
                                  period="2011 - 2012"
                                  photoClass="timeline-photo timeline-bg03"
                                  timeLinePlace="Norwegian Properties, Thailand"
                                  timeLinePosition="Sales & Graphic designer" />
                    <TimelineItem timeLineIcon="flaticon-clocks18"
                                  period="2009 - 2011"
                                  photoClass="timeline-photo timeline-bg02"
                                  timeLinePlace="Crown Cork, Thailand"
                                  timeLinePosition="Digital artwork editor" />
                    <TimelineItem invertClass="timeline-inverted"
                                  timeLineIcon="flaticon-clocks18"
                                  period="1998 - 2008"
                                  photoClass="timeline-photo timeline-bg01-01"
                                  timeLinePlace="Silpakorn, Thailand"
                                  timeLinePosition="Graphic designer & Pre-press operator
" />
                </ul>
                <div className="dividewhite6"></div>
            </section>

        );
    }
}