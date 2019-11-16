import React, {Component} from "react"

import "./styles/Breadcrumb.scss"

class Breadcrumb extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="mt-3 ml-3">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb bg-white rounded-0">
						{this.props.path.map((data, id) => (
							<li className="breadcrumb-item" key={id}>
								<a href={data.urlLink}>
									{data.locate}
								</a>
							</li>
						))}
					</ol>
				</nav>
			</div>
		)
	}
}

export default Breadcrumb