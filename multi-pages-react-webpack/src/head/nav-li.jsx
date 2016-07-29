import React, { Component } from 'react';
import '../../assets/custom/css/style.css';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/hover/css/hover.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css';

require('bootstrap-webpack');
import { Link } from 'react-router';

export default class NavLi extends Component {
    
    
    render () {
        return (
            <li className="col-xs-4 col-sm-4 nopadding menuitem" 
                style={{ background : this.props.bgcolor }}>
                <Link to={this.props.navUrl} className="hvr-sweep-to-bottom">
                    <i className={this.props.navIcon}></i>
                    <span>{this.props.navPage}</span>
                </Link>
            </li>
        );
    }

}