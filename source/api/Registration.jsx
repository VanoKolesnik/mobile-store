import React, {Component} from "react"

import Preloader from "../components/Preloader.jsx"
import Button from "../components/Button.jsx"

import "./styles/Registration.scss"

class Registration extends Component {
	render() {
		return (
			<div className="registration 	d-flex
								flex-column
								justify-content-center
								align-items-center">
				<Preloader />
				<form>
					<div className="form-group">
						<label htmlFor="usernameInput">Ім'я користувача</label>
						<input type="text" className="form-control rounded-0" id="usernameInput" placeholder="Username" />
					</div>
					<div className="form-group">
						<label htmlFor="inputEmail">Електронна пошта</label>
						<input type="email" className="form-control rounded-0" id="inputEmail" aria-describedby="emailHelp" placeholder="Email" />
						<small id="emailHelp" className="form-text text-muted">Ми не передаємо адресу стороннім особам. 🤐</small>
					</div>
					<div className="form-group">
						<label htmlFor="passwordInput">Пароль</label>
						<input type="password" className="form-control rounded-0" id="passwordInput" placeholder="Password" />
					</div>
					<div className="form-group">
						<label htmlFor="secondPasswordInput">Повторіть пароль</label>
						<input type="password" className="form-control rounded-0" id="secondPasswordInput" placeholder="Password" />
					</div>
					<Button content="Зареєструватися ✍" type="submit" buttonType="button" />
				</form>
			</div>
		)
	}
}

export default Registration