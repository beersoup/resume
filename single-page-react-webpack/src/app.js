'use strict';

import React from 'react';
import { render } from 'react-dom';
import Header from './header';
import Content from './content';





var App = React.createClass({
	render() {
		return (
			<div>
				<Header />
				<Content />
			</div>
		);
	}
	
});


render(<App />, document.getElementById('app'));