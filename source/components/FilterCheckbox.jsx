import React, {Component} from "react"

import "./styles/FilterCheckbox.scss"

class FilterCheckbox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: props.filterCheckboxesId,
			filterData: props.filterCheckboxesData,
			isChecked: false
		}
		this.setChecked = this.setChecked.bind(this)
	}
	setChecked() {
		this.setState({
			isChecked: this.state.isChecked ? false : true
		})
	}
	render() {
		return (
			<li className="form-check" onClick={this.setChecked}>
			        <input type="checkbox" checked={this.state.isChecked} 
						id={`filter_checkbox${this.state.id}`} 
						onChange={this.setChecked} />
				<label 	className="form-check-label"
						htmlFor={`filter_checkbox${this.state.id}`}>
					{this.state.filterData}
				</label>
			</li>
		)
	}
}

export default FilterCheckbox