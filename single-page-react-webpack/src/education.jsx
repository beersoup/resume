import React from 'react';
import '../css/main.css';
import EducationItem from './education-item';


require('bootstrap-webpack');



var Education = React.createClass({
    getInitialState: function() {
        return {lists: []};
    },
    requestAjax: function () {
        $.ajax({
            type: 'GET',
            url: 'http://medlogotyp.se/cv/education.php',
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
            <div className="box">
                <h2>Utbildning</h2>
                <ul id="education" className="clearfix">
                    {this.state.lists.map(function(item, i) {
                        return (
                            <EducationItem education={item} key={i} />
                        );
                    })}
                </ul>
            </div>
        );
    }
});

export default Education;
   



