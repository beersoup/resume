import React from 'react';
import '../css/main.css';

require('bootstrap-webpack');

var About = React.createClass({

    render() {

        return (
        <div className="box">
            <h2>Om mig</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non,
                dolorem, cumque distinctio magni quam expedita velit laborum sunt amet facere
                tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.</p>
        </div>
            
        );
    }


});

export default About;