import React from 'react';

var fetch = require('node-fetch');

var EducationFetch = React.createClass({
    componentDidMount: function() {
        var myInit = {
            method: "GET"
        };
    fetch('http://medlogotyp.se/cv/education.php', myInit).then((response) => {
        return response.json();
    }).then((data) => {
        this.state.list = data;
        this.setState(this.state);
    });

},

    render() {
        return (<div></div>);
}
});

export default EducationFetch;