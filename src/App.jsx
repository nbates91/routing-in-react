import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise';
import Home from './Components/Home';
import Films from './Components/Films';
import Film from './Components/Film';
import People from './Components/People';
import Person from './Components/Person';

export default class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/films" component={Films} />
						<Route exact path="/films/:id" component={Film} />
						<Route exact path="/people" component={People} />
						<Route exact path="/people/:id" component={Person} />
					</Switch>
				</React.Fragment>
			</Router>
		);
	}
}
