import React, { Component } from 'react';


require('bootstrap-webpack');

export default class TimelineItem extends Component {
    render () {
        return (
            <li className={this.props.invertClass}>
                <div className="timeline-badge primary"><i className={this.props.timeLineIcon}></i></div>
                <div className="timeline-panel wow fadeInLeft" data-wow-delay="0.3s" data-wow-offset="10">
                    <p className="timeline-time fontcolor-invert">
                        <i className="glyphicon glyphicon-time"></i> {this.props.period}
                    </p>
                    <div className={this.props.photoClass}></div>
                    <div className="timeline-heading">
                        <h4 className="font-accident-two-normal uppercase">{this.props.timeLinePlace}</h4>
                        <h6 className="uppercase">{this.props.timeLinePosition}</h6>
                    </div>
                </div>
            </li>

        );
    }
}