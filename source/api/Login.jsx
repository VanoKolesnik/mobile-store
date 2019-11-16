import React, {Component} from "react"
import md5 from "md5"
import axios from "axios"

import Preloader from "../components/Preloader.jsx"

import "./styles/Login.scss"

class Login extends Component {
	constructor() {
		super()
		this.state = {
			apiURL: "http://localhost:1337",
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
			isValid: false
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
		let auth = this.state.authData
		this.state.users.map(user => {
			if (auth.name === user.name
				&& md5(auth.password) === user.password) {
				this.setState({
					isValid: true
				})
				sessionStorage.setItem("userId", user.id)
				location.reload()
			}
		})
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
					{this.state.isValid ? (
						<div className="alert alert-success text-center">
							Вітаю! Ви увійшли!
						</div>
					) : null}
					<div className="form-group">
						<label htmlFor="usernameInput">Ім'я користувача</label>
						<input type="text" className="form-control rounded-0" id="usernameInput" placeholder="Username" name="name" value={this.state.authData.name} onChange={this.handleInput} />
					</div>
					<div className="form-group">
						<label htmlFor="passwordInput">Пароль</label>
						<input type="password" className="form-control rounded-0" id="passwordInput" placeholder="Password" name="password" value={this.state.authData.password} onChange={this.handleInput} />
					</div>
					<button className="btn btn-block btn-outline-secondary rounded-0" onClick={(this.handleLogin)}>Увійти 🚪</button>
				</div>
			</div>
		)
	}
}

export default Login