import React from 'react';
import About from './about';
import Education from './education';
import Experience from './experience';
import Contact from './contact';
import Skill from './skill';
import Language from './language';
import Interesse from './interesse';



var Content = React.createClass({
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-7">
                    <About />
                    <Education />
                    <Experience />
                </div>
                <div className="col-xs-12 col-sm-5">
                    <Contact />
                    <Skill />
                    <Language />
                    <Interesse />
                </div>
            </div>
        );
    }
});

export default Content;