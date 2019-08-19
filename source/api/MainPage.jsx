import React, {Component} from "react"

import Preloader from "../components/Preloader.jsx"
import Cover from "../components/Cover.jsx"
import LatestPhones from "../components/LatestPhones.jsx"
import ToShop from "../components/ToShop.jsx"
import MailContact from "../components/MailContact.jsx"

import "./styles/MainPage.scss"

class MainPage extends Component {
	render() {
		return (
			<div>
				<Preloader />
				<Cover />
				<LatestPhones />
				<ToShop />
				<MailContact />
			</div>
		)
	}
}

export default MainPage