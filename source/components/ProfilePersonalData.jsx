import React, {Component} from "react"

import Preloader from "./Preloader.jsx"

import "./styles/ProfilePersonalData.scss"
import "./styles/Button.scss"

class ProfilePersonalData extends Component {
	constructor(props) {
		super(props)
		this.state = {
			profile: {
				id: 0,
				name: "Sam",
				lastname: "Winchester",
				mail: "sam.winchester@gmail.com",
				phone: 380942857283,
				gender: "Чоловіча"
			}
		}
	}
	render() {
		if (this.props.isEdit) {
			return (
				<div className="pt-5">
					<div className="row">	
						<h3 className="col-12">Особисті дані:</h3>
					</div>
					<div className="row ml-5">
						<p className="	col-12
										col-md-6
										text-muted">
							Ім'я:
						</p>	
						<input 	className="	col-12
											col-md-6
											mb-2"
								type="text"
								value={this.state.profile.name} />

						<p className="	col-12
										col-md-6
										text-muted">
							Прізвище:
						</p>	
						<input 	className="	col-12
											col-md-6
											mb-2"
								type="text"
								value={this.state.profile.lastname} />

						<p className="	col-12
										col-md-6
										text-muted">
							Пошта: 	
						</p>	
						<input 	className="	col-12
											col-md-6
											mb-2"
								type="mail"
								value={this.state.profile.mail} />

						<p className="	col-12
										col-md-6
										text-muted">
							Телефон: 	
						</p>	
						<input 	className="	col-12
											col-md-6
											mb-2"
								type="text"
								value={this.state.profile.phone} />

						<p className="	col-12
										col-md-6
										text-muted">
							Стать: 	
						</p>	
						<input 	className="	col-12
											col-md-6
											mb-2"
								type="text"
								value={this.state.profile.gender} />
					</div>
					<div className="row">
						<div className="col-12
										col-md-6">
							<button className="btn btn-block btn-outline-primary rounded-0" >Зберегти зміни</button>
						</div>
						<div className="col-12
										col-md-6">
							<button onClick={this.props.handelEditState} className="btn btn-block btn-outline-secondary rounded-0" >Скасувати</button>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div className="pt-5">
					<div className="row">	
						<h3 className="col-12">Особисті дані:</h3>
					</div>
					<div className="row ml-5">
						<p className="	col-12
										col-md-6
										text-muted">
							Ім'я: 	
						</p>	
						<p className="	col-12
										col-md-6
										mb-2">
							{this.state.profile.name}
						</p>
						<p className="	col-12
										col-md-6
										text-muted">
							Прізвище:
						</p>	
						<p className="	col-12
										col-md-6
										mb-2">
							{this.state.profile.lastname}
						</p>	

						<p className="	col-12
										col-md-6
										text-muted">
							Пошта:
						</p>	
						<p className="	col-12
										col-md-6
										mb-2">
							{this.state.profile.mail}
						</p>

						<p className="	col-12
										col-md-6
										text-muted">
							Телефон:
						</p>	
						<p className="	col-12
										col-md-6
										mb-2">
							{this.state.profile.phone}
						</p>

						<p className="	col-12
										col-md-6
										text-muted">
							Стать: 
						</p>	
						<p className="	col-12
										col-md-6
										mb-2">
							{this.state.profile.gender}
						</p>
					</div>
				</div>
			)
		}
	}
}

export default ProfilePersonalData