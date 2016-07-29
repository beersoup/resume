import React, { Component } from 'react';
import '../../assets/custom/css/style.css';
import '../../assets/vendor/flaticons/flaticon.css';
import '../../assets/vendor/hover/css/hover.css';
import '../../assets/vendor/fontawesome/css/font-awesome.min.css'
import FirstRowBlock from './first-row-block';
import About from './about';


require('bootstrap-webpack');

export default class FirstRowLeft extends Component {
    render () {
        return (
            <div className="col-md-8 nopadding">
                <div className="padding-50 wow fadeInDown" data-wow-delay="0.2s" data-wow-offset="10">
                    <div className="row nopadding">
                        <About />
                    </div>
                    <div className="divider-dynamic"></div>
                    <div className="row nopadding">
                        <FirstRowBlock classIcon="flaticon-photo246" headBlock="Responsible" 
                                       infoBlock="It's very important to me to complete every tasks I've got. I always take responsibility for what i do."/>
                        <FirstRowBlock classIcon="flaticon-stats47" headBlock="Motivated" 
                                       infoBlock="Focus on positive goals not negative fears. Planing what to do and start on small part to become a whole job."/>
                        <FirstRowBlock classIcon="flaticon-clocks18" headBlock="Punctual" 
                                       infoBlock="I do my best to get things done on time and always keep it in my mind that someone is waiting for my job."/>
                    </div>
                </div>
            </div>

        );
    }

}