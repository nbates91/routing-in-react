import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise';

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="text-center">
					<h1>Studio Ghibli</h1>
					<Link className="btn btn-warning mx-3 " to="/">
						Home
					</Link>
					<Link className="btn btn-warning mx-3" to="/films">
						Films
					</Link>
					<Link className="btn btn-warning mx-3" to="/people">
						People
					</Link>
				</div>
				<div class="jumbotron jumbotron-fluid bg-white mt-0">
					<div class="container">
						<img
							src="http://dazedimg.dazedgroup.netdna-cdn.com/900/azure/dazed-prod/1210/1/1211926.jpg"
							className="w-100"
							alt=""
						/>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
