import React, {Component} from "react"

import "./styles/ProfileEdit.scss"

class ProfileEdit extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="conteiner-fluid
							pt-5
							profile-edit">
				<ul className="row">
					<li className="	col-4
									col-md-12">
						<a onClick={this.props.handelEditState}>Редагувати</a>
					</li>
					<li className="	col-4
									col-md-12">
						<a href="#">Вихід</a>
					</li>
				</ul>
			</div>
		)
	}
}

export default ProfileEdit