import React, {Component} from "react"

import "./styles/Footer.scss"

class Footer extends Component {
	render() {
		return (
			<div className="container-fluid
							text-center
							bg-light
							shadow
							p-2">
				<h5>
					&copy; { new Date().getFullYear() } Ivan Kolesnik 👨‍💻
				</h5>
			</div>
		)
	}
}

export default Footer