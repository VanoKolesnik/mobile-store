import React, {Component} from "react"

import Preloader from "../components/Preloader.jsx"

import "./styles/PageNotFound.scss"

class PageNotFound extends Component {
	render() {
		return (
			<div className="not-found-block d-flex
											flex-column
											justify-content-center
											align-items-center">
				<Preloader />
				<h2>Page Not Found 😵</h2>
				<small className="text-muted">Сторінка не знайдена</small>
			</div>
		)
	}
}

export default PageNotFound