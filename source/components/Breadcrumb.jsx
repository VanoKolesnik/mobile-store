import React, {Component} from "react"

import "./styles/Breadcrumb.scss"

class Breadcrumb extends Component {
	constructor(props) {
		super(props)
		this.state = {
			breadCrumbData: [
				{
					id: 0,
					locate: "Home",
					urlLink: "#"
				},
				{
					id: 1,
					locate: "Catalog",
					urlLink: "#"
				}
			]
		}
	}
	render() {
		return (
			<div>
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb bg-white rounded-0">
						{this.state.breadCrumbData.map((data, id) => (
							<li className="breadcrumb-item" key={id}><a href={data.urlLink}>{data.locate}</a></li>
						))}
					</ol>
				</nav>
			</div>
		)
	}
}

export default Breadcrumb