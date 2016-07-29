import React, { Component } from 'react';
import '../../assets/custom/css/style.css';
import FirstRow from './first-row';
import SecondRow from './second-row';



require('bootstrap-webpack');

export default class Home extends React.Component {
    render () {
        return (
            
                <section id="homesection" className="container-fluid nopadding">
                    <FirstRow />
                    <SecondRow />
                </section>
            
        
            
        )
    }
}


