import React from 'react';
import '../../assets/custom/css/style.css';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/hover/css/hover.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css'
import PortfolioItem from './portfolio-item';

require('bootstrap-webpack');

var Portfolio = React.createClass({
    getInitialState: function() {
        return {lists: []};
    },
    componentDidMount: function () {
        $.ajax({
            type: 'GET',
            url: 'http://medlogotyp.se/cv/portfolio.php',
            success: function(lists) {
                this.setState({lists: lists});
            }.bind(this)

        });
    },

        render () {
        return (
            <div id="portfolio" className="inner-content">
                <section id="page-title" className="inner-section">
                    <div className="container-fluid nopadding wow fadeInRight" data-wow-delay="0.2s" data-wow-offset="10">
                        <h2 className="font-accident-two-normal uppercase">Portfolio</h2>
                        <h5 className="font-accident-one-bold uppercase subtitle" style={{ color: '#E5989B' }}>Hard-working person on the way to the success...</h5>
                        <p className="small fontcolor-medium">
                            In the gallery below showing websites that I've built for my clients and some of them for my code learning.
                        </p>
                        <a href="https://github.com/beersoup" target="_blank" className="resumeLink small">Check out my code <i className="fa fa-github fa-lg" style={{ color: '#3f3f3f'}}></i></a>
                    </div>
                </section>
                <section id="portfolio-block" className="inner-section wow fadeInDown" data-wow-delay="0.4s" data-wow-offset="10">
                    <div className="dividewhite6"></div>
                     <div className="container-fluid text-center wow fadeInDown" 
                          data-wow-delay="0.6s" data-wow-offset="10">
                    <div id="posts" className="row popup-container">
                        {this.state.lists.map(function(item, i) {
                            return (<PortfolioItem portfolio={item} key={i} />);
                        })}
                    </div>
                    </div>
                    <div className="dividewhite8"></div>
                </section>
            </div>

        );
    }
});
export default Portfolio;
