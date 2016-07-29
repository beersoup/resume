import React, { Component } from 'react';
import '../../assets/custom/css/style.css';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/hover/css/hover.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css'
import NavLi from './nav-li';



require('bootstrap-webpack');
 
export default class HeaderNav extends Component {
    render () {
        return (
            <ul id="nav" className="row nopadding cd-side-navigation">
                <NavLi bgcolor="#B5838D" navUrl="/" navIcon="flaticon-insignia" navPage="Home" />
                <NavLi bgcolor="#d78f92" navUrl="resume" navIcon="flaticon-graduation61" navPage="Resume" />
                <NavLi bgcolor="#E5989B" navUrl="portfolio" navIcon="flaticon-book-bag2" navPage="Portfolio" />
            </ul>
        );
    }

}