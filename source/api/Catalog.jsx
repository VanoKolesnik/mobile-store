import React, {Component} from "react"

import Preloader from "../components/Preloader.jsx"
import Breadcrumb from "../components/Breadcrumb.jsx"
import SearchPhone from "../components/SearchPhone.jsx"
import FilterModal from "../components/FilterModal.jsx"
import PhoneCard from "../components/PhoneCard.jsx"

import "./styles/Catalog.scss"

class Catalog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			breadCrumbData: [
				{
					id: 0,
					locate: "Home",
					urlLink: "#"
				},
				{
					id: 1,
					locate: "Catalog",
					urlLink: "#"
				}
			],
			phones: [
				{
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
				},
				{
					id: 2,
					title: "Samsung Galaxy S10",
					price: "40 000",
					imageSource: "../images/products/samsung_galaxy_s10.jpg"
				},
				{
					id: 3,
					title: "Xiaomi Redmi Note 7",
					price: "24 000",
					imageSource: "../images/products/xiaomi_redmi_note_7.jpg"
				},
				{
					id: 4,
					title: "Huawei P30 Pro 8",
					price: "25 000",
					imageSource: "../images/products/huawei_p30_pro8.jpg"
				},
				{
					id: 5,
					title: "Samsung Galaxy M20",
					price: "28 000",
					imageSource: "../images/products/samsung_galaxy_m20.jpg"
				},
				{
					id: 6,
					title: "Samsung Galaxy S10",
					price: "40 000",
					imageSource: "../images/products/samsung_galaxy_s10.jpg"
				},
				{
					id: 7,
					title: "Xiaomi Redmi Note 7",
					price: "24 000",
					imageSource: "../images/products/xiaomi_redmi_note_7.jpg"
				}
			]
		}
	}
	render() {
		return (
			<div>
				<Preloader />
				<div className="d-flex
								flex-column
								flex-md-row
								justify-content-around
								align-items-center">
					<Breadcrumb />
					<SearchPhone />
					<FilterModal />
				</div>
				<div className="container-fluid row phonelist">
					{this.state.phones.map((phone, id) => (
						<div className="col-12
										col-sm-6
										col-md-3
										mt-3"
										key={id}>
							<PhoneCard  phone={phone} />
						</div>
					))
					}
				</div>
			</div>
		)
	}
}

export default Catalog