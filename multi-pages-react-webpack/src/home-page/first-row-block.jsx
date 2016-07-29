import React, { Component } from 'react';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/hover/css/hover.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css';

require('bootstrap-webpack');

export default class FirstRowLeft extends Component {
    render () {
        return (
            <div className="col-md-4 infoblock nopadding">
                <div className="row">
                    <div className="col-sm-1 col-md-3">
                        <i className={this.props.classIcon}></i>
                        <div className="dividewhite1"></div>
                    </div>
                    <div className="col-sm-11 col-md-9">
                        <h5 className="font-accident-one-bold uppercase">{this.props.headBlock}</h5>
                        <p className="small">{this.props.infoBlock}</p>
                    </div>
                </div>
                <div className="divider-dynamic"></div>
            </div>
        );
    }

}