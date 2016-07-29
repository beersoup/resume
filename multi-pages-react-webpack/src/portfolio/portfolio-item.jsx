import React, { Component } from 'react';
import '../../assets/custom/css/style.css';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/hover/css/hover.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css'
import '../../assets/vendor/mfp/css/magnific-popup.css';
import '../../assets/vendor/wow/animate.css';



require('bootstrap-webpack');

var PortfolioItem = React.createClass({
    render () {
        var styleHead = {
            color : 'black',
            textDecoration : 'none'
        }
        var styleFig = {
            textAlign : 'center',
             paddingTop: 30,
            
        }
        
           
        return (
            <div className="col-md-4 col-sm-6">
                <div className="item-wrap">
                    <figure className="effect-goliath">
                        <img src={this.props.portfolio.imageThumbUrl}
                             className="img-responsive" alt="img11"/>
                        <figcaption>
                            <a href={this.props.portfolio.linkUrl} target="_blank" style={{ textDecoration: 'none' }}>
                                <div style={styleFig}>Visit website</div>
                            </a>
                        </figcaption>
                    </figure>
                    <div>
                        <div className="post-header">
                            <h5 style={{ paddingBottom : 30, paddingTop: 10 }}>
                                <a href="http://medlogotyp.se/cv/index.html" style={styleHead}>
                                    <p className="small fontcolor-medium">
                                        {this.props.portfolio.headCaption}
                                    </p>
                                </a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default PortfolioItem;
