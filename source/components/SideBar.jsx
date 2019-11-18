import React, {Component} from "react"
import axios from "axios";

import "./styles/SideBar.scss"

class SideBar extends Component {
	constructor() {
		super()
		this.state = {
			apiURL: "http://localhost:1337",
			user: {
				id: "",
				name: "",
				lastname: "",
				patronymic: "",
				mail: "",
				phone: "",
				gender: "",
				country: "",
				district: "",
				city: "",
				street: "",
				houseNumber: "",
				apartmentNumber: "",
				role: ""
			},
			sideBarItems: [
				{
					content: "Кошик",
					link: "#",
					isAdmin: false
				},
				{
					content: "Додати товар",
					link: "#",
					isAdmin: true
				}
			]
		}
		axios.get(`${this.state.apiURL}/select-users`)
			.then(res => {
				res.data.map(user => {
					if (+user.id === +sessionStorage.getItem("userId")) {
						this.setState({
							user: {
								id: user.id,
								name: typeof user.name === "undefined" ? null : user.name,
								lastname: typeof user.lastname === "undefined" ? null : user.lastname,
								patronymic: typeof user.patronymic === "undefined" ? null : user.patronymic,
								mail: typeof user.mail === "undefined" ? null : user.mail,
								phone: typeof user.phone === "undefined" ? null : user.phone,
								gender: typeof user.gender === "undefined" ? null : user.gender,
								country: typeof user.country === "undefined" ? null : user.country,
								district: typeof user.district === "undefined" ? null : user.district,
								city: typeof user.city === "undefined" ? null : user.city,
								street: typeof user.street === "undefined" ? null : user.street,
								houseNumber: typeof user.houseNumber === "undefined" ? null : user.houseNumber,
								apartmentNumber: typeof user.apartmentNumber === "undefined" ? null : user.apartmentNumber,
								role: user.role
							}
						})
					}
				}
			)})
	}
	render() {
		return (
			<div className="side-bar
							container-fluid
							pt-5">
				<ul className="row">
					{this.state.sideBarItems.map((item, id) => {
						switch (this.state.user.role) {
							case "ADMIN":
								return (
									<li key={id} className="col-12">
										<a href={item.link}>{item.content}</a>
									</li>
								)
							case "USER":
								if (!item.isAdmin) {
									return (
										<li key={id} className="col-12">
											<a href={item.link}>{item.content}</a>
										</li>
									)
								}
						}
					})}
				</ul>
			</div>
		)
	}
}

export default SideBar