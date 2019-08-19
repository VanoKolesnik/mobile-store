import React, {Component} from "react"

import Preloader from "../components/Preloader.jsx"
import Button from "../components/Button.jsx"

import "./styles/Login.scss"

class Login extends Component {
	render() {
		return (
			<div className="login 	d-flex
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
						<label htmlFor="passwordInput">Пароль</label>
						<input type="password" className="form-control rounded-0" id="passwordInput" placeholder="Password" />
					</div>
					<Button content="Увійти 🚪" type="submit" buttonType="button" />
				</form>
			</div>
		)
	}
}

export default Login