import React, {Component} from "react"
import SimpleReactValidator from "simple-react-validator"
import axios from "axios"

import Preloader from "../components/Preloader.jsx"

import "./styles/Registration.scss"

class Registration extends Component {
	constructor() {
		super()
		this.state = {
			apiURL: "https://ancient-depths-61345.herokuapp.com",
			data: {
				name: "",
				mail: "",
				password: "",
				secondPassword: ""
			}
		}
		SimpleReactValidator.addLocale("ua", {
			alpha: "Не повинно бути пробілів та спецсимволів.",
			email: "Вкажіть електронну пошту.",
			required: "Заповніть це поле."
		})
		this.validator = new SimpleReactValidator({
			autoForceUpdate: this,
			locale: "ua",
			validators: {
				text: {
					message: "Перевірте правильність введених даних..",
					rule: (val, params, validator) => {
						return validator.helpers.testRegex(val, /^[\u0400-\u052F\u2DE0-\u2DFF\uA640-\uA69F']+$/i) && params.indexOf(val) === -1
					},
					required: true
				},
				mail: {
					message: "Перевірте правильність введених даних..",
					rule: (val, params, validator) => {
						return validator.helpers.testRegex(val, /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i) && params.indexOf(val) === -1
					},
					required: true
				}
			  }		  
		})
		this.handleInput = this.handleInput.bind(this)
		this.handleRegistration = this.handleRegistration.bind(this)
	}
	handleInput(e) {
		let name = e.target.name,
			value = e.target.value,
			stateCopy = Object.assign({}, this.state.data)
		stateCopy[name] = value
        this.setState({
			data: stateCopy })
	}
	handleRegistration() {
		if (this.validator.allValid()) {
			if (this.state.data.password === this.state.data.secondPassword) {
				axios.post(`${this.state.apiURL}/insert-user`, {
					user: this.state.data })
					.then(res =>
						location.reload() )
					.catch(err =>
						console.log(`POST | ${this.state.apiURL}/insert-user is faild. Error: ${err}`) )
			}
		} else {
			this.validator.showMessages()
		}
	}
	render() {
		return (
			<div className="
						registration d-flex
						flex-column
						justify-content-center
						align-items-center">
				<Preloader />
				<div>
					<div className="form-group">
						<label htmlFor="usernameInput">Ім'я користувача</label>
						<input type="text" className="form-control rounded-0" id="usernameInput" placeholder="Username" name="name" value={this.state.name} onChange={this.handleInput} />
						<div className="text-danger">{this.validator.message("", this.state.data.name, "text")}</div>
					</div>
					<div className="form-group">
						<label htmlFor="inputEmail">Електронна пошта</label>
						<input type="email" className="form-control rounded-0" id="inputEmail" aria-describedby="emailHelp" placeholder="Email" name="mail" value={this.state.mail} onChange={this.handleInput} />
						<small id="emailHelp" className="form-text text-muted">Ми не передаємо адресу стороннім особам. 🤐</small>
						<div className="text-danger">{this.validator.message("", this.state.data.mail, "mail")}</div>
					</div>
					<div className="form-group">
						<label htmlFor="passwordInput">Пароль</label>
						<input type="password" className="form-control rounded-0" id="passwordInput" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInput} />
						<div className="text-danger">{this.validator.message("", this.state.data.password, "alpha_num_dash")}</div>
					</div>
					<div className="form-group">
						<label htmlFor="secondPasswordInput">Повторіть пароль</label>
						<input type="password" className="form-control rounded-0" id="secondPasswordInput" placeholder="Password" name="secondPassword" value={this.state.secondPassword} onChange={this.handleInput} />
						<div className="text-danger">{this.validator.message("", this.state.data.secondPassword, "alpha_num_dash")}</div>
					</div>
					<button className="btn btn-block btn-outline-primary rounded-0" onClick={this.handleRegistration}>Зареєструватися ✍</button>
				</div>
			</div>
		)
	}
}

export default Registration