import React, {Component} from "react"

import "./styles/Breadcrumb.scss"

class Breadcrumb extends Component {
	constructor(props) {
		super(props)
		this.state = {
			breadCrumbData: this.props.data
		}
	}
	render() {
		return (
			<>
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb bg-white rounded-0">
						{this.state.breadCrumbData.map((data, id) => (
							<li className="breadcrumb-item" key={id}><a href={data.urlLink}>{data.locate}</a></li>
						))}
					</ol>
				</nav>
			</>
		)
	}
}

export default Breadcrumb