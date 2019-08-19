import React, {Component} from "react"

import "./styles/PhoneCard.scss"

class PhoneCard extends Component {
	constructor(props) {
		super(props)
		this.phone = props.phone
	}
	render() {
		return (
			<a href="#" className="card">
				<img src={this.phone.imageSource} className="card-img-top" alt={this.phone.title} />
				<div className="card-body">
					<div className="card-text">
						<div className="row">
							<p className="col text-dark">
								{this.phone.title}
							</p>
						</div>
						<div className="row">
							<p className="col text-teal">
								{this.phone.price} &#8372;
							</p>
						</div>
					</div>
				</div>
			</a>
		)
	}
}

export default PhoneCard