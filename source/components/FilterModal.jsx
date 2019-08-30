import React, {Component} from "react"

import FilterCheckboxesGroup from "./FilterCheckboxesGroup.jsx"
import FilterRange from "./FilterRange.jsx"

class FilterModal extends Component {
	constructor() {
		super()
		this.state = {
			filterGroupData: [
				{
					id: 0,
					title: "Виробник",
					list: [
						"Apple",
						"Asus",
						"Samsung",
						"Honor",
						"Huawei"
					]
				},
				{
					id: 1,
					title: "Діагональ екрана",
					list: [
						"до 4",
						"4.1'' - 4.5''",
						"4.5\" - 5\"",
					]
				},
				{
					id: 2,
					title: "Ємність акумулятора",
					list: [
						"до 2999 мА*год",
						"3000 - 3999 мА*год",
						"більше 4000 мА*год"
					]
				}
			]
		}
	}
	render() {
		return (
			<div>
				<button type="button"
						className="btn btn-block btn-outline-primary rounded-0"
						data-toggle="modal" data-target="#filterModal">
					👓 Фільтр
				</button>
				<div className="modal fade rounded-0" id="filterModal" tabIndex="-1" role="dialog" aria-labelledby="filterModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<form action="" className="modal-content rounded-0">
							<div className="modal-header">
								<h5 className="modal-title" id="filterModalLabel">Фільтр</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<FilterRange />
								{this.state.filterGroupData.map((groupData, id) =>
									<FilterCheckboxesGroup key={id} filterGroupData={groupData} /> )}
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary rounded-0" data-dismiss="modal">Закрити</button>
								<button type="submit" className="btn btn-outline-primary rounded-0">Зберегти зміни</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default FilterModal