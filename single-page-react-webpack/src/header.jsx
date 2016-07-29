import React from 'react';
import '../css/main.css';
import Photo from './photo';
import HeaderText from './header-text';


require('bootstrap-webpack');


var Header = React.createClass({
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <Photo />
                    <HeaderText />
                </div>
            </div>
        );
    }

});

export default Header;