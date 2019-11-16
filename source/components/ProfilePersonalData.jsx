import React, {Component} from "react"
import axios from "axios"

import "./styles/ProfilePersonalData.scss"
import "./styles/Button.scss"

class DisplayData extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<>
				{this.props.value === null || this.props.value === "" ? (
					<>
						{this.props.isInput ? (
							<>
								<p className="col-12 col-md-6 text-muted">
									{this.props.title}:
								</p>
								<input
									className="	col-12 col-md-6	mb-2"
									type={this.props.type === null ? "text" : this.props.type}
									name={this.props.name}
									value=""
									onChange={this.props.handleInput} />
							</>
						) : null}
					</>
				) : (
					<>
						<p className="col-12 col-md-6 text-muted">
							{this.props.title}:
						</p>
						{this.props.isInput ? (
							<input
								className="	col-12 col-md-6	mb-2"
								type={this.props.type === null ? "text" : this.props.type}
								name={this.props.name}
								value={this.props.value}
								onChange={this.props.handleInput} />
						) : (
							<p className="col-12 col-md-6 mb-2">
								{this.props.value}
							</p>
						)}
					</>
				)}
			</>
		)
	}
}
class ProfilePersonalData extends Component {
	constructor(props) {
		super(props)
		this.state = {
			titles: [
				["name", "Ім'я"],
				["lastname", "Прізвище"],
				["patronymic", "По-батькові"],
				["mail", "Пошта"],
				["phone", "Телефон"],
				["gender", "Стать"],
				["country", "Країна"],
				["district", "Район / Штат"],
				["city", "Місто"],
				["street", "Вулиця"],
				["houseNumber", "Будинок №"],
				["apartmentNumber", "Квартира №"]
			],
			...this.props
		}
		this.handleInput = this.handleInput.bind(this)
		this.handleSave = this.handleSave.bind(this)
	}
	UNSAFE_componentWillReceiveProps(nextProps){
		if (nextProps.user !== this.props.user) {
			this.setState({
				user: nextProps.user
			})
		}
	}
	handleInput(e) {
		let value = e.target.value,
			name = e.target.name
		
		this.setState(prevState => ({ 
            user: {
                ...prevState.user, 
                [name]: value
            }
        }))
	}
	handleSave() {
		axios.post(`${this.props.apiURL}/update-user`, {
			user: this.state.user })
			.then(res => {
				location.reload() })
			.cath(err => {
				console.log(err) })
	}
	render() {
		if (this.props.isEdit) {
			return (
				<div className="pt-5">
					<div className="row">	
						<h3 className="col-12">Особисті дані:</h3>
					</div>
					<div className="row ml-5">
						{Object.keys(this.state.user).map(key => (
							this.state.titles.map((title, id) => {
								if (title[0] === key) {
									return <DisplayData title={title[1]} name={key} value={this.state.user[key]} isInput={true} type={key === "mail" ? "mail" : null} handleInput={this.handleInput} key={id} />
								}
							})
						))}
					</div>
					<div className="row">
						<div className="col-12
										col-md-6">
							<button className="btn btn-block btn-outline-primary rounded-0" onClick={this.handleSave}>Зберегти зміни</button>
						</div>
						<div className="col-12
										col-md-6">
							<button className="btn btn-block btn-outline-secondary rounded-0" onClick={this.props.handelEditState}>Скасувати</button>
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
					{Object.keys(this.props.user).map(key => (
						this.state.titles.map((title, id) => {
							if (title[0] === key 
								&& this.props.user[key] !== null) {
								return <DisplayData title={title[1]} name={key} value={this.props.user[key]} isInput={false} type={null} handleInput={this.handleInput} key={id} />
							}
						})
					))}
					</div>
				</div>
			)
		}
	}
}

export default ProfilePersonalData