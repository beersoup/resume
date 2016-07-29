import React from 'react';
import '../css/main.css';
import LanguageItem from './language-item';

require('bootstrap-webpack');

var Language = React.createClass({
    render() {
        return(
            <div className="box">
                <h2>Språk</h2>
                <div id="language-skills">
                    <LanguageItem languageName="Thailändska" />
                    <LanguageItem languageName="Engelska" />
                    <LanguageItem languageName="Svenska" />
                </div>
            </div>
        );
    }
});

export default Language;