import React, {Component} from "react"

import FilterCheckbox from "./FilterCheckbox.jsx"

import "./styles/FilterCheckboxesGroup.scss"

class FilterCheckboxesGroup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			filterGroupData: props.filterGroupData
		}
	}
	render() {
		return (
			<>
				<hr />
				<h5>{this.state.filterGroupData.title}</h5>
				<ul className="p-0">
					{this.state.filterGroupData.list.map((listItems, id) => 
						<FilterCheckbox key={id} filterCheckboxesData={listItems} filterCheckboxesId={id} /> )}
				</ul>
			</>
		)
	}
}

export default FilterCheckboxesGroup