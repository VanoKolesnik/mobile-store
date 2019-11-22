import React, {Component} from "react"
import axios from "axios"

import Preloader from "../components/Preloader.jsx"
import Breadcrumb from "../components/Breadcrumb.jsx"
import PhoneCard from "../components/PhoneCard.jsx"

import "./styles/Cart.scss"

class Cart extends Component {
	constructor() {
		super()
		this.state = {
			apiURL: "http://localhost:1337",
			breadcrumbPath: [
				{
					id: 0,
					locate: "Головна",
					urlLink: "/"
				},
				{
					id: 1,
					locate: "Кошик",
					urlLink: "/cart"
				}
			],
			phones: [
				{
					id: 0,
					title: "",
					description: "",
					price: 0,
					quantity: 0,
					imageSource: "",
					manufacture: "",
					country: "",
					communicationStandart: "",
					diagonal: "",
					displayResolution: "",
					fromCamera: "",
					backCamera: "",
					ram: "",
					internalMemory: "",
					operationSystem: ""
				}
			]
		}
		axios.get(`${this.state.apiURL}/select-products`)
            .then(res => {
                res.data.map((product, id) => {
                    if (id === 0) {
                        this.setState({
							phones: [
								{
									id: product.id,
									title: product.title,
									description: product.description,
									price: product.price,
									quantity: product.quantity,
									imageSource: `../images/products/${product.imgurl}`,
									manufacture: product.manufactererid,
									country: product.countryofmanufactureid,
									communicationStandart: product.communicationstandartid,
									diagonal: product.diagonalid,
									displayResolution: product.displayresolutionid,
									frontCamera: product.frontcameraid,
									backCamera: product.backcameraid,
									ram: product.ramid,
									internalMemory: product.internalmemoryid,
									operationSystem: product.operationsystemid
								}
							]
						})
					} else {
                        this.setState(prevState => ({
                            phones: [
								...prevState.phones,
								{
									id: product.id,
									title: product.title,
									description: product.description,
									price: product.price,
									quantity: product.quantity,
									imageSource: `../images/products/${product.imgurl}`,
									manufacture: product.manufactererid,
									country: product.countryofmanufactureid,
									communicationStandart: product.communicationstandartid,
									diagonal: product.diagonalid,
									displayResolution: product.displayresolutionid,
									frontCamera: product.frontcameraid,
									backCamera: product.backcameraid,
									ram: product.ramid,
									internalMemory: product.internalmemoryid,
									operationSystem: product.operationsystemid
								}
							]
                        }))
                    }
				})
			})
		}
	render() {
		return (
			<div>
				<Preloader />
				
				<Breadcrumb path={this.state.breadcrumbPath} />
				{JSON.parse(localStorage.getItem("cartItems"))[0] == "0" ? (
					<div className="container-fluid text-center">
						<p>Кошик порожній</p>
					</div>
				) : (
					<>
						{sessionStorage.getItem("userId") === null ? (
							<div className="continer-fluid text-center">
								<h1 className="text-danger">404</h1>
							</div>
						) : (
							<div className="container-fluid row phonelist">
								{JSON.parse(localStorage.getItem("cartItems")).map(item => {
									return this.state.phones.map(phone => {
										if (+item === +phone.id) {
											return (
												<div className="col-12 col-sm-6 col-md-3 mt-3" key={phone.id}>
													<PhoneCard phone={phone} />
												</div>
											)
										}
									})
								})}
							</div>
						)}
						<div className="container-fluid row mt-5">
							<a href={`${this.state.apiURL}/order`} className="btn btn-block btn-outline-primary rounded-0 col-6 offset-3">Придбати</a>
						</div>
					</>
				)}
			</div>
		)
	}
}

export default Cart