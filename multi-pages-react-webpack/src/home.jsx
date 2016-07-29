import React, { Component } from 'react';
import { Link } from 'react-router';
import '../assets/custom/css/pastel.css';
import '../assets/custom/css/style.css';


require('bootstrap-webpack');

export default class Home extends Component {
    //Set initial property's component,   incase that we didn't set any property to component
    static defaultProps () {
        message: 'Allihop'
    }
    render() {
        return (
            <div>
                <h1 style={{ color: 'white' }}>Hi {this.props.message}</h1>
                <Link
                    to={{ pathname: '/pages' }}
                    style={{ color: 'white' }}>Welcome to BabelCoder Wiki!
                </Link>
                <Link
                    to={{ pathname: '/menu' }}
                    style={{ color: 'white' }}>Menu
                </Link>

            </div>

        );
    }
}



