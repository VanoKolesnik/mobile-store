import React, {Component} from "react"

import "./styles/PhoneCard.scss"

class PhoneCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			apiURL: "https://ancient-depths-61345.herokuapp.com"
		}
		this.handleCardClick = this.handleCardClick.bind(this)
	}
	handleCardClick(e) {
		localStorage.setItem("selectedProduct", e.currentTarget.getAttribute("value"))
	}
	render() {
		return (
			<a href={`${this.state.apiURL}/product`} className="card" onClick={this.handleCardClick} value={this.props.phone.id}>
				<img src={this.props.phone.imageSource} className="card-img-top" alt={this.props.phone.title} />
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