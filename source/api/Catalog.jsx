import React, {Component} from "react"

import Preloader from "../components/Preloader.jsx"
import Breadcrumb from "../components/Breadcrumb.jsx"
import SearchPhone from "../components/SearchPhone.jsx"
import FilterModal from "../components/FilterModal.jsx"
import PhoneList from "../components/PhoneList.jsx"

import "./styles/Catalog.scss"

class Catalog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			breadCrumbData: [
				{
					id: 0,
					locate: "Home",
					urlLink: "/"
				},
				{
					id: 1,
					locate: "Catalog",
					urlLink: "/catalog"
				}
			],
			filterText: "",
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
		this.handelFilterText = this.handelFilterText.bind(this)
	}
	handelFilterText(filterText) {
		this.setState({
			filterText: filterText
		})
	}
	render() {
		return (
			<>
				<Preloader />
				<div className="d-flex
								flex-column
								flex-md-row
								justify-content-around
								align-items-center">
					<Breadcrumb data={this.state.breadCrumbData} />
					<SearchPhone 	filterText={this.state.filterText}
									onFilterTextChange={this.handelFilterText} />
					<FilterModal />
				</div>
				<PhoneList 	phoneList={this.state.phones}
							filterText={this.state.filterText} />
			</>
		)
	}
}

export default Catalog