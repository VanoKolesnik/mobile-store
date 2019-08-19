import React, {Component} from "react"

import Preloader from "../components/Preloader.jsx"

import "./styles/Contact.scss"

class Catalog extends Component {
	render() {
		return (
			<div className="contact-block container
							d-flex
							flex-column
							justify-content-around
							align-items-center">
				<Preloader />
				<div className="row text-center">	
					<h2>Пиши мені 🤗</h2>
				</div>
				<div className="row container-fluid">
					<div className="col-6 text-center">
						<a className="instagram" href="#">
							<h3>Instagram</h3>
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
		)
	}
}

export default Catalog