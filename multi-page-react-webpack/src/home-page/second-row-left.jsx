import React, { Component } from 'react';
import '../../assets/custom/css/style.css';
import '../../assets/vendor/flaticons/flaticon.css';
import Experiences from './experiences';

require('bootstrap-webpack');

var SecondRowLeft = React.createClass ({

    getInitialState: function() {
        return {lists: []};
    },
    componentDidMount: function () {
        $.ajax({
            type: 'GET',
            url: 'http://medlogotyp.se/cv/experience.php',
            success: function(lists) {
                this.setState({lists: lists});
            }.bind(this)

        });
    },

    render () {
        const styleEx = {
            backgroundColor : '#d8e2dc',
            minHeight : 420
        };
        return (
            <div className="col-md-4 pro-experience nopadding" style={styleEx}>
                <div className="padding-50 wow fadeInRight" data-wow-delay="0.6s" data-wow-offset="5">
                    <h3 className="font-accident-two-normal uppercase">Pro. Experience</h3>
                    <div className="dividewhite4"></div>
                    <div className="experience" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                        {this.state.lists.map(function(item, i) {
                            return (
                                <Experiences experiences={item} key={i} />
                            );
                        })}
                    </div>
                    <div className="dividewhite1"></div>
                </div>
            </div>
        );
    }

});

export default SecondRowLeft;