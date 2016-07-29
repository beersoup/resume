import React from 'react';
import '../css/main.css';
import ExperienceItem from './experience-item'

require('bootstrap-webpack');



var Experience = React.createClass({
    getInitialState: function() {
        return {lists: []};
    },
    requestAjax: function () {
        $.ajax({
            type: 'GET',
            url: 'http://medlogotyp.se/cv/experience.php',
            success: function(lists) {
                //console.log('success', lists);
                this.setState({lists: lists});
            }.bind(this)

        });

    },

    componentWillMount: function() {
        this.requestAjax();
    },

    render() {
        return (
            <div id="experience" className="box">
                <h2>Erfarenhet</h2>
                <div className="job clearfix">
                    <div>
                        {this.state.lists.map(function(item, i) {
                            return (
                                <ExperienceItem experience={item} key={i} />
                            );
                        })}
                    </div>
                </div>
            </div>


        );

    }
});

export default Experience;