import React, {Component} from "react"

import "./styles/PhoneCard.scss"

class PhoneCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			apiURL: "http://localhost:1337"
		}
		this.handleCardClick = this.handleCardClick.bind(this)
	}
	handleCardClick(e) {
		console.log(e.target.value)
	}
	render() {
		return (
			<a href="#" className="card" onClick={this.handleCardClick}>
				<img src={this.props.phone.imageSource} className="card-img-top" alt={this.props.phone.title} value={this.props.phone.id} onChange={() => {}} />
				<div className="card-body">
					<div className="card-text">
						<div className="row">
							<p className="col text-dark">
								{this.props.phone.title}
							</p>
						</div>
						<div className="row">
							<p className="col text-teal">
								{this.props.phone.price} &#8372;
							</p>
						</div>
					</div>
				</div>
			</a>
		)
	}
}

export default PhoneCard