import React, {Component} from "react"

import Filter from "./Filter.jsx"

import "./styles/FilterModal.scss"

class FilterModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			filterData: [
				{
					id: 0,
					label: "Huawei"
				},
				{
					id: 1,
					label: "Samsung"
				},
				{
					id: 2,
					label: "Xiaomi"
				}
			]
		}
	}
	render() {
		return (
			<div>
				<button type="button" className="btn btn-block btn-outline-primary rounded-0" data-toggle="modal" data-target="#filterModal">
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
							{this.state.filterData.map((data, id) => (
								<Filter key={id} filterData={data} />
							))}
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