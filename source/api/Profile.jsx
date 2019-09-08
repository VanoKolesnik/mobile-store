import React, {Component} from "react"

import Preloader from "../components/Preloader.jsx"
import SideBar from "../components/SideBar.jsx"
import ProfilePersonalData from "../components/ProfilePersonalData.jsx"
import ProfileEdit from "../components/ProfileEdit.jsx"

import "./styles/Profile.scss"

class Profile extends Component {
	constructor() {
		super()
		this.state = {
			isEdit: false
		}
		this.handelEditState = this.handelEditState.bind(this)
	}
	handelEditState() {
		this.setState({
			isEdit: !this.state.isEdit
		})
	}
	render() {
		return (
			<div className="main-content container-fluid">
				<Preloader />
				<div className="row">
					<div className="col-12
									col-md-4">
						<SideBar />
					</div>
					<div className="col-12
									col-md-5">
						<ProfilePersonalData 	isEdit={this.state.isEdit}
												handelEditState={this.handelEditState} />
					</div>
					<div className="col-12
									col-md-3">
						<ProfileEdit 	isEdit={this.state.isEdit}
										handelEditState={this.handelEditState} />
					</div>
				</div>
			</div>
		)
	}
}

export default Profile