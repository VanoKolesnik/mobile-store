import React, {Component} from "react"
import axios from "axios"

import Preloader from "../components/Preloader.jsx"
import Breadcrumb from "../components/Breadcrumb.jsx"
import SideBar from "../components/SideBar.jsx"
import ProfilePersonalData from "../components/ProfilePersonalData.jsx"
import ProfileEdit from "../components/ProfileEdit.jsx"

import "./styles/Profile.scss"

class Profile extends Component {
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
					id: 0,
					locate: "Профіль",
					urlLink: "/profile"
				}
			],
			isEdit: false,
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
			}
		}
		this.handelEditState = this.handelEditState.bind(this)
		axios.get(`${this.state.apiURL}/select-users`)
			.then(res => {
				res.data.map(user => {
					if (user.id === sessionStorage.getItem("userId")) {
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
	handelEditState() {
		this.setState({
			isEdit: !this.state.isEdit
		})
	}
	render() {
		return (
			<div className="main-content container-fluid">
				<Preloader />

				<Breadcrumb path={this.state.breadcrumbPath} />
				{sessionStorage.getItem("userId") === null ? (
					<div className="continer-fluid text-center">
						<h1 className="text-danger">404</h1>
					</div>
				) : (
					<div className="row">
						<div className="col-12 col-md-4">
							<SideBar role={this.state.role} />
						</div>
						<div className="col-12 col-md-5">
							<ProfilePersonalData
								apiURL={this.state.apiURL}
								isEdit={this.state.isEdit}
								user={this.state.user}
								handelEditState={this.handelEditState} />
						</div>
						<div className="col-12 col-md-3">
							<ProfileEdit
								isEdit={this.state.isEdit}
								handelEditState={this.handelEditState} />
						</div>
					</div>
				)}
			</div>
		)
	}
}

export default Profile