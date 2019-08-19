import React, {Component} from "react"

import "./styles/Breadcrumb.scss"

class Breadcrumb extends Component {
	constructor(props) {
		super(props)
		this.data = props.breadCrumbData
	}
	render() {
		return (
			<li className="breadcrumb-item"><a href={this.data.urlLink}>{this.data.locate}</a></li>
		)
	}
}

export default Breadcrumb