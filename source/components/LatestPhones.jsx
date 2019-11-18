import React, {Component} from "react"
// import axios from "axios"

import PhoneCard from "./PhoneCard.jsx"
import "./styles/LatestPhones.scss"

class LatestPhones extends Component {
	constructor(props) {
		super(props)
		this.state = {
			latestPhones: [{
						id: 0,
						title: "Huawei P30 Pro 8",
						price: "25 000",
						imageSource: "../images/products/huawei_p30_pro8.jpg"
					},
					{
						id: 1,
						title: "Samsung Galaxy M20",
						price: "28 000",
						imageSource: "../images/products/samsung_galaxy_m20.jpg"
					}]
		}
	}
	render() {
		return (
			<section className="container-fluid
								d-flex
								flex-column
								justify-content-center
								align-items-center 
								py-3
								text-dark bg-light">
				<h2>Нові телефони 📞</h2>
				<hr />
				<div className="container-fluid row">
					{this.state.latestPhones.map((phone, id) => (
							<div className="col-12
											col-sm-6
											col-md-3
											mt-1"
								 key={id}>

								<PhoneCard  phone={phone} />
							</div>
						))
					}
				</div>
			</section>
		)
	}
}

export default LatestPhones