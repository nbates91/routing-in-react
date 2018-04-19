import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Films extends Component {
	constructor(props) {
		super(props);
		this.state = {
			films: [],
		};
	}
	componentDidMount() {
		fetch('https:ghibliapi.herokuapp.com/films')
			.then(res => {
				return res.json();
			})
			.then(films => this.setState({ films }));
	}

	render() {
		let films = this.state.films.map(card => {
			return (
				<React.Fragment key={card.id}>
					<div className="card col-md-3" style={{ width: '18rem' }}>
						<img
							className="card-img-top"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhh-6QawFfHp2p2c3mMb-7BHCfcqob9LvdxF86JcpJ8s872Vy"
							alt="Card cap"
						/>
						<div className="card-body">
							<h5 className="card-title">{card.title}</h5>
							<p className="card-text">{card.description.substring(0, 100)}...</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">{card.director}</li>
							<li className="list-group-item">{card.producer}</li>
							<li className="list-group-item">{card.release_date}</li>
						</ul>
						<div className="card-body">
							<Link className="btn btn-warning m-3" to={`/films/${card.id}`}>
								Single Film Info
							</Link>
						</div>
					</div>
				</React.Fragment>
			);
		});
		return (
			<React.Fragment>
				<div class="jumbotron jumbotron-fluid bg-white mt-0">
					<div class="container">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfm_rjPv9_fae9KlW3LbTLvZELZ1qXGG7l251h5u6wIC5xAEWZ"
							className="w-100"
							alt=""
						/>
					</div>
				</div>
				<div className="text-center">
					<Link className="btn btn-warning m-3 " to="/">
						Home
					</Link>
				</div>
				<div className="row">{films}</div>
			</React.Fragment>
		);
	}
}
