import React, {Component} from "react"

import Preloader from "../components/Preloader.jsx"
import Cover from "../components/Cover.jsx"
import LatestPhones from "../components/LatestPhones.jsx"
import ToShop from "../components/ToShop.jsx"
import MailContact from "../components/MailContact.jsx"

import "./styles/MainPage.scss"

class MainPage extends Component {
	constructor() {
		super()
		this.state = {
			apiURL: "http://localhost:1337"
		}
	}
	render() {
		return (
			<>
				<Preloader />
				<Cover />
				<LatestPhones />
				<ToShop />
				<MailContact />
			</>
		)
	}
}

export default MainPage