import React, { Component } from 'react';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/hover/css/hover.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css'

require('bootstrap-webpack');

export default class ProgressBar extends Component {
    render () {

        return (
            <div className="col-sm-4 nopadding">
                <div className="progressbar" data-animate="false">
                    <div className="circle font-accident-one-normal" data-percent={this.props.dataPercent}>
                        <div style={{ color: '#3f3f3f' }}></div>
                        <h4 className="font-accident-one-normal uppercase">{this.props.headSkill}</h4>
                        <p className="font-regular-normal" style={{ color: '#3f3f3f' }}>
                            {this.props.infoSkill}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}