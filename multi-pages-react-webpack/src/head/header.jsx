import React, { Component } from 'react';
import HeaderPhoto from './header-photo';
import NameTitle from './name-title';
import HeaderDownload from './header-download';
import HeaderExperience from './header-experience';
import HeaderNameIcon from './header-name-icon';
import HeaderNav from './header-nav';
import Foot from '../footer/foot';

require('bootstrap-webpack');



export default class Header extends Component {
    render () {
        return (
            <div>
            <header>
                <section id="top-navigation" className="container-fluid nopadding">
                    <div className="row nopadding ident ui-bg-color01">
                        <HeaderPhoto />
                        <div className="col-md-7 col-lg-8 vc-name nopadding">
                            <div className="row nopadding name">
                                <div className="col-md-10 name-title" style={{ background: '#9a8f97' }}>
                                    <NameTitle />
                                </div>
                                <div className="col-md-2 nopadding name-pdf" style={{ background: '#8b8188' }}>
                                    <HeaderDownload />
                                </div>
                            </div>
                            <div className="row nopadding position">
                                <div className="col-md-10 position-title" style={{ background: '#7b7279'}}>
                                    <section className="cd-intro">
                                        <HeaderExperience />
                                    </section>
                                </div>
                                <div className="col-md-2 nopadding pdf" style={{ background: '#6c646a' }}>
                                    <HeaderNameIcon />
                                </div>
                                <HeaderNav />
                            </div>
                        </div>
                    </div>
                </section>
            </header>
                <div className="content-wrap">{this.props.children}</div> 
                <Foot />
            </div>
        )
    }
}