import React, {Component} from "react"

import "./styles/Cover.scss"

class Cover extends Component {
	render() {
		return (
			<div className="container-fluid cover">
				<div className="cover-text
								d-flex
								flex-column
								justify-content-center
								align-items-center text-light">
					<h1>Mobile Store</h1>
					<h2>У нас є все! 🤗 І навіть більше.. 🙃</h2>
					<hr />
					<h3>Хапай мрію! 😏</h3>
				</div>
			</div>
		)
	}
}

export default Cover