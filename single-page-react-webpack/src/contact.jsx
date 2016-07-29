import React from 'react';
import '../css/main.css';
import ContactItem from './contact-item';
require('font-awesome/css/font-awesome.css');
require('bootstrap-webpack');


var Contact = React.createClass({
    render() {
        return(
            <div className="box clearfix">
                <h2>Kontakt</h2>
                <ContactItem 
                    contactIcon="fa fa-phone fa-fw" 
                    contactTitle="500 345 242" />
                <ContactItem 
                    contactIcon="fa fa-envelope fa-fw" 
                    contactTitle="office@kamsolutions.pl" />
                <ContactItem 
                    contactIcon="fa fa-twitter fa-fw" 
                    contactTitle="Twitter" 
                    contactDescription="https://twitter.com/WordPress" />
                <ContactItem 
                    contactIcon="fa fa-facebook fa-fw" 
                    contactTitle="Facebook" 
                    contactDescription="https://www.facebook.com/facebook" />
                <ContactItem 
                    contactIcon="fa fa-skype fa-fw" 
                    contactTitle="Skype" 
                    contactDescription="kamsolutions.pl" />
            </div>
        );
    }
});

export default Contact;