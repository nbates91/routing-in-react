import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Film extends Component {
	constructor(props) {
		super(props);
		this.state = {
			film: {},
		};
	}
	componentDidMount() {
		fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
			.then(res => {
				return res.json();
			})
			.then(film => {
				this.setState({ film });
			});
	}

	render() {
		return (
			<React.Fragment>
				<div className="text-center">
					<Link className="btn btn-warning m-3 " to="/">
						Home
					</Link>
					<Link className="btn btn-warning m-3" to="/films">
						Back to Films
					</Link>
				</div>
				<div>
					<div className="card col-md-3" style={{ width: '40rem' }}>
						<img
							className="card-img-top"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGN_9wDvknPaqjQK1spdwR-oeJ2_qHBnWrDYco4FyxvJAt_-mR"
							alt="Card cap"
						/>
						<div className="card-body">
							<h5 className="card-title">{this.state.film.title}</h5>
							<p className="card-text">{this.state.film.description}</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">{this.state.film.director}</li>
							<li className="list-group-item">{this.state.film.producer}</li>
							<li className="list-group-item">{this.state.film.release_date}</li>
						</ul>
						<div className="card-body" />
					</div>
				</div>
			</React.Fragment>
		);
	}
}
