import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class People extends Component {
	constructor(props) {
		super(props);
		this.state = {
			people: [],
		};
	}

	componentDidMount() {
		fetch('https:ghibliapi.herokuapp.com/people')
			.then(res => {
				return res.json();
			})
			.then(people => this.setState({ people }));
	}
	render() {
		let people = this.state.people.map(card => {
			return (
				<React.Fragment>
					<div className="card m-3" style={{ width: '18rem' }}>
						<img
							className="card-img-top"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlVI-nXeHGYm_9yG8WNg196BfeEZ17eswWzEIPWx_Km8rB8nAyQ"
							alt="Card cap"
						/>
						<div className="card-header">{card.name}</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">{card.age}</li>
							<li className="list-group-item">{card.gender}</li>
							<Link className="btn btn-warning m-3" to={`/people/${card.id}`}>
								Single Person Info
							</Link>
						</ul>
					</div>
				</React.Fragment>
			);
		});
		return (
			<React.Fragment>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOvIP2ebzVr1FRPTK8nSqapLUtGlMznOOc0pvK_T4QtlpnMitk"
							className="w-100"
							alt=""
						/>
					</div>
				</div>
				<br />
				<div className="text-center">
					<Link className="btn btn-warning m-3 " to="/">
						Home
					</Link>
				</div>
				<div className="row">{people}</div>;
			</React.Fragment>
		);
	}
}
