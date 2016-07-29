import React from 'react';
import '../css/main.css';
import SkillItem from './skill-item';
import SkillLevel from './skill-level';


require('bootstrap-webpack');



var Skill = React.createClass({
    getInitialState: function() {
        return {lists: []};
    },
    requestAjax: function () {
        $.ajax({
            type: 'GET',
            url: 'http://medlogotyp.se/cv/skill.php',
            success: function(lists) {
                //console.log('success', lists);
                //console.log(lists[0].hasOwnProperty("data_percent"));

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
                <h2>Färdigheter</h2>
                <div className="skills">
                {this.state.lists.map(function(item, i) {
                        return (
                            <SkillItem skillItem={item} key={i} />
                        );
                    }
                )}
                </div>
                <SkillLevel />
            </div>
        );
    }
});

export default Skill;