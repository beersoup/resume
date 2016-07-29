import React, { Component } from 'react';
import '../../assets/custom/css/pastel.css';
import '../../assets/custom/css/style.css';



require('bootstrap-webpack');

export default class ResumeTitle extends Component {
    render () {
        return (
            <section id="page-title" className="inner-section">
                <div className="container-fluid nopadding wow fadeInRight" data-wow-delay="0.2s" data-wow-offset="10">
                    <h2 className="font-accident-two-normal uppercase">Resume</h2>
                    <h5 className="font-accident-one-bold uppercase subtitle" style={{ color: '#E5989B' }}>
                        Hard-working and quick learning person...</h5>
                    <p className="small" style={{ color: '#676767' }}>
                        My name is Jennie Lenier. I'm now studying in Web Development for E-commerce at <a href="http://cmeducations.se/" className="resumeLink" target="_blank">CMEducations</a>
                        , Stockholm and also a freelancer web developer. I have knowledge in HTML, CSS, PHP, JavaScript. I'm very interested in making websites with different framework such as
                        Handlebars and React with Webpack. I've been freelancer web developer since 2012 as before that I had full time 
                        job as a graphic designer and pre-press operator for 13 years.
                    </p>
                    <p className="small">
                        <a href="https://github.com/beersoup" target="_blank" className="resumeLink">
                            Check out my code <i className="fa fa-github fa-lg" style={{ color: '#3f3f3f'}}></i></a>
                    </p>
                    <div className="dividewhite2"></div>
                </div>
            </section>

        );
    }
}