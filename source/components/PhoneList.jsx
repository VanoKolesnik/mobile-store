import React, {Component} from "react"

import PhoneCard from "./PhoneCard.jsx"

import "./styles/PhoneList.scss"

class PhoneList extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}
	render() {
		let isFound = false
		return (
			<div className="container-fluid row phonelist">
				{this.props.phoneList.map((phone, id) => {
						// TODO: Improve search engine.
						if (phone.title.toLowerCase().indexOf(this.props.filterText.toLowerCase()) != -1 
						|| this.props.filterText === "") {
							isFound = true
							return (
									<div className="col-12
													col-sm-6
													col-md-3
													mt-3"
													key={id}>
										<PhoneCard  phone={phone} />
									</div>
								)
							}
						}
					)
				}
				{isFound ? (<></>) : (
					<div className="container-fluid
									d-flex
									justify-content-center
									align-items-center">
						<h3>Телефон не знайдено. 🤔</h3>
					</div> )}
			</div>
		)
	}
}

export default PhoneList