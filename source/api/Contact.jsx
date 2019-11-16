import React, {Component} from "react"
import axios from "axios"

import Preloader from "../components/Preloader.jsx"
import Breadcrumb from "../components/Breadcrumb.jsx"

import "./styles/Contact.scss"

class Catalog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			breadcrumbPath: [
				{
					id: 0,
					locate: "Головна",
					urlLink: "/"
				},
				{
					id: 1,
					locate: "Контакти",
					urlLink: "/contact"
				}
			],
			userName: ""
		}
	}
	
	callApi() {
		axios.get("https://localhost:1337/users")
			.then(res => {
				const userName = res.data
				this.setState({ 
					userName: userName
				})
			})
	}

	UNSAFE_componentWillMount() {
		this.callApi()
		console.log(this.state.userName)
	}
	render() {
		return (
			<>
				<Preloader />

				<Breadcrumb path={this.state.breadcrumbPath} />
				<div className="contact-block container
								d-flex
								flex-column
								justify-content-around
								align-items-center">
					<div className="row text-center">	
						<h2>Пиши мені 🤗</h2>
					</div>
					<div className="row container-fluid">
						<div className="col-6 text-center">
							<a className="instagram" href="#">
								<h3>Instagram</h3>
								<h3>{this.state.userName}</h3>
							</a>
							<a className="facebook" href="#">
								<h3>Facebook</h3>
							</a>
						</div>
						<div className="col-6 text-center">
							<a className="telegram" href="#">
								<h3>Telegram</h3>
							</a>
							<a className="linkedin" href="#">
								<h3>LinkedIn</h3>
							</a>
						</div>
					</div>
					<div className="row"></div>
				</div>
			</>
		)
	}
}

export default Catalog