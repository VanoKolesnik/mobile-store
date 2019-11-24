import React, {Component} from "react"
import md5 from "md5"
import axios from "axios"
import displayNotify from "../components/displayNotify.js"

import Preloader from "../components/Preloader.jsx"
import { ToastContainer } from "react-toastify"

import "./styles/Login.scss"

class Login extends Component {
	constructor() {
		super()
		this.state = {
			apiURL: "https://ancient-depths-61345.herokuapp.com",
			users: [
				{
					id: "",
					name: "",
					password: "",
					role: ""
				}
			],
			authData: {
				name: "",
				password: ""
			},
		}
		this.handleInput = this.handleInput.bind(this)
		this.handleLogin = this.handleLogin.bind(this)

		axios.get(`${this.state.apiURL}/select-users`)
			.then(res => {
				res.data.map((user, id) => {
					if (id === 0) {
						this.setState({
							users: [
								{
									id: user.id,
									name: user.name,
									password: user.password,
									role: user.role
								}
							]
						})
					} else {
						this.setState(prevState => ({
							users: [
								...prevState.users,
								{
									id: user.id,
									name: user.name,
									password: user.password,
									role: user.role
								}
							]
						}))
					}
				}
			)})
	}
	handleInput(e) {
		let name = e.target.name,
			value = e.target.value
		this.setState(prevState => ({
			authData: {
                ...prevState.authData, 
                [name]: value
            }
		}))
	}
	handleLogin() {
		let auth = this.state.authData,
			isValid = false
		this.state.users.map(user => {
			if (auth.name === user.name
				&& md5(auth.password) === user.password) {
				isValid = true
				sessionStorage.setItem("userId", user.id)
				location = `${this.state.apiURL}/`
			}
		})
		if (isValid) {
			displayNotify("success", "Вітаю! Ви увійшли")
		} else {
			displayNotify("error", "Перевірте введені дані")
		}
	}
	render() {
		return (
			<div className="login
							d-flex
							flex-column
							justify-content-center
							align-items-center">
				<Preloader />
				<div>
					<div className="form-group">
						<label htmlFor="usernameInput">Ім'я користувача</label>
						<input type="text" className="form-control rounded-0" id="usernameInput" placeholder="Username" name="name" value={this.state.authData.name} onChange={this.handleInput} />
					</div>
					<div className="form-group">
						<label htmlFor="passwordInput">Пароль</label>
						<input type="password" className="form-control rounded-0" id="passwordInput" placeholder="Password" name="password" value={this.state.authData.password} onChange={this.handleInput} />
					</div>
					<button className="btn btn-block btn-outline-secondary rounded-0" onClick={this.handleLogin}>Увійти 🚪</button>
				</div>
				<ToastContainer />
			</div>
		)
	}
}

export default Login