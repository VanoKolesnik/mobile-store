import React, {Component} from "react"

import "./styles/SearchPhone.scss"

class SearchPhone extends Component {
	render() {
		return (
			<form action="" className="searchPhone rounded-0 d-flex flex-row justify-content-center align-items-center">
				<input type="text" className="form-control rounded-0" id="searchPhone" placeholder="Search" />
				<button type="submit" className="btn btn-outline-primary rounded-0">🔎</button>
			</form>
		)
	}
}

export default SearchPhone