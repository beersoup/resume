import React, { Component } from 'react';
import '../../assets/custom/css/style.css';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css'


require('bootstrap-webpack');

export default class Foot extends Component {
    render () {
        return (
            <footer className="padding-50" style={{ background: '#9a8f97' }}>
                <div className="container-fluid nopadding">
                    <div className="row wow fadeInDown" data-wow-delay=".2s" data-wow-offset="10">
                        <div className="col-md-3">
                            <h4 className="font-accident-two-normal uppercase">Jennie Lenier</h4>
                            <p className="inline-block" style={{ color: 'white' }}>
                                A student at <a href="http://cmeducations.se/" target="_blank" className="footLink">CMEducations</a><br />
                                Changemaker Educations AB<br />
                                Åsögatan 117, 116 24 Stockholm<br />
                                Tel. 070-351 34 37
                            </p>
                            <div className="divider-dynamic"></div>
                        </div>
                        <div className="col-md-3 cv-link">
                            <h4 className="font-accident-two-normal uppercase">Download cv</h4>
                            <div className="dividewhite1"></div>
                            <a href="http://medlogotyp.se/cv/img/cv.pdf" target='_blank' style={{ color: 'white' }}><i className="fa fa-long-arrow-down" aria-hidden="true"></i>English</a>
                            <a href="http://medlogotyp.se/cv/img/cv-swedish.pdf" target='_blank' style={{ color: 'white' }}><i className="fa fa-long-arrow-down" aria-hidden="true"></i>Swedish</a>
                            <div className="divider-dynamic"></div>
                        </div>
                        <div className="col-md-3">
                            <h4 className="font-accident-two-normal uppercase" style={{ color: 'white' }}>Contact me</h4>
                            <p className="inline-block" style={{ color: 'white' }}>jennie.lenier@gmail.com</p>
                            <div className="divider-dynamic"></div>
                        </div>
                        <div className="col-md-3">
                            <h4 className="font-accident-two-normal uppercase">Follow me</h4>
                            <div className="follow">
                                <ul className="list-inline social">
                                    <li><a target="_blank" href="https://www.facebook.com/jennie.lenier" className="rst-icon-facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li><a target="_blank" href="https://github.com/beersoup" className="rst-icon-github"><i className="fa fa-github"></i></a></li>
                                    <li><a target="_blank" href="https://www.instagram.com/jennie_lenier/" className="rst-icon-instagram"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="divider-dynamic"></div>
                        </div>
                    </div>
                    <div className="dividewhite1"></div>
                    <div className="row wow fadeInDown" data-wow-delay=".4s" data-wow-offset="10">
                        <div className="col-md-12 copyrights">
                            <p>© 2016 Jennie Lenier.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

}