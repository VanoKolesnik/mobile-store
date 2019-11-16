import React, {Component} from "react"

import Preloader from "../components/Preloader.jsx"
import Breadcrumb from "../components/Breadcrumb.jsx"
import PhoneList from "../components/PhoneList.jsx"

import "./styles/Cart.scss"

class Cart extends Component {
	constructor() {
		super()
		this.state = {
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
			phones:  [
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
				
				<Breadcrumb path={this.state.breadcrumbPath} />
				<PhoneList  phoneList={this.state.phones}
							filterText={""} />
			</div>
		)
	}
}

export default Cart