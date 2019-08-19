import React, {Component} from "react"

import "./styles/Filter.scss"

class FilterModal extends Component {
	constructor(props) {
		super(props)
		this.filterData = props.filterData
	} 
	render() {
		return (
			<div className="modal-body">
				<div className="form-check">
					<input className="form-check-input" type="checkbox" value="" id={`filter_${this.filterData.id}`} />
					<label className="form-check-label" htmlFor={`filter_${this.filterData.id}`}>
						{this.filterData.label}
					</label>
				</div>
			</div>
		)
	}
}

export default FilterModal