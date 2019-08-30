import React, {Component} from "react"

import "./styles/SearchPhone.scss"

class SearchPhone extends Component {
	constructor(props) {
		super(props)
		this.handelTextChange = this.handelTextChange.bind(this)
	}
	handelTextChange(e) {
		this.props.onFilterTextChange(e.target.value)
	}
	render() {
		return (
			<form className="searchPhone rounded-0 d-flex flex-row justify-content-center align-items-center">
				<input 	type="text" 
						className="form-control rounded-0" 
						id="searchPhone" 
						placeholder="Search"
						value={this.props.filterText}
						onChange={this.handelTextChange} />
				<button className="btn btn-outline-primary rounded-0">🔎</button>
			</form>
		)
	}
}

export default SearchPhone