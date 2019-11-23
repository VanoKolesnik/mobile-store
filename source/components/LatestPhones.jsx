import React, {Component} from "react"
import axios from "axios"

import PhoneCard from "./PhoneCard.jsx"
import "./styles/LatestPhones.scss"

class LatestPhones extends Component {
	constructor(props) {
		super(props)
		this.state = {
			apiURL: "https://ancient-depths-61345.herokuapp.com",
			latestPhones: [
				{
					id: "",
					title: "",
					price: "0",
					imageSource: ""
				}
			]
		}
		axios.get(`${this.state.apiURL}/select-products`)
            .then(res => {
				let products = res.data.splice(res.data.length - 2, 2)

                products.map((product, id) => {
                    if (id === 0) {
                        this.setState({
							latestPhones: [
								{
									id: product.id,
									title: product.title,
									price: product.price,
									imageSource: `../images/products/${product.imgurl}`,
								}
							]
						})
					} else {
                        this.setState(prevState => ({
                            latestPhones: [
								...prevState.latestPhones,
								{
									id: product.id,
									title: product.title,
									price: product.price,
									imageSource: `../images/products/${product.imgurl}`,
								}
							]
                        }))
                    }
				})
			})
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