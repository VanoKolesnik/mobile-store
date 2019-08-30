import React, {Component} from "react"

import PhoneCard from "./PhoneCard.jsx"

import "./styles/PhoneList.scss"

class PhoneList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			phones: this.props.phoneList
		}
	}
	render() {
		return (
			<div className="container-fluid row phonelist">
				{this.state.phones.map((phone, id) => {
						if (phone.title.toLowerCase().indexOf(this.props.filterText) != -1 || this.props.filterText == "") {
							return (
									<div className="col-12
													col-sm-6
													col-md-3
													mt-3"
													key={id}>
										<PhoneCard  phone={phone} />
									</div>)
						}
					}
				)}
			</div>
		)
	}
}

export default PhoneList