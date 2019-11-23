import React, {Component} from "react"
import axios from "axios"

import "./styles/MailContact.scss"

class MainPage extends Component {
	constructor() {
		super()
		this.state = {
			apiURL: "http://localhost:1337",
			feedBackData: {
				email: "",
				name: "",
				message: "",
			}
		}
		this.handleInput = this.handleInput.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleInput(e) {
		let value = e.target.value,
			name = e.target.name
		
		this.setState(prevState => ({ 
            feedBackData: {
                ...prevState.feedBackData, 
                [name]: value
            }
        }))
	}
	handleSubmit() {
		let isValid = true
		const data = this.state.feedBackData
		for (const key in data) {
			if (data.hasOwnProperty(key)) {
				const item = data[key];
				if (item === "" || item === null) {
					isValid = false
				}
			}
		}
		if (isValid) {
			axios.post(`${this.state.apiURL}/send-feedback`, {
				data: data,	})
				.then(res => {
					console.log("Toasty!") })
		}
	}
	render() {
		return (
			<section className="container-fluid py-4 d-flex flex-column justify-content-around">
				<div className="row">
					<h2 className="col-12 text-center">Зворотній зв'язок</h2>
				</div>
				<hr />
				<div className="row">
					<form 	className="	col-10
										col-md-6
										offset-1
										offset-md-3 p-3">

						<div className="form-group">
							<label htmlFor="inputEmail">Введіть адресу електронної пошти ~</label>
							<input 	type="email" className="form-control rounded-0" id="inputEmail" 
									aria-describedby="emailHelp" placeholder="Email" name="email" value={this.state.feedBackData.email} onChange={this.handleInput} />

							<small id="emailHelp" className="form-text text-muted">Ми не передаємо адресу стороннім особам. 🤐</small>
						</div>
	
						<div className="form-group">
							<label htmlFor="inputName">Введіть своє ім'я ~</label>
							<input type="text" className="form-control rounded-0" id="inputName" placeholder="Name" name="name" value={this.state.feedBackData.name} onChange={this.handleInput} />
						</div>

						<div className="form-group">
							<label htmlFor="inputMessage">Введіть повідомлення ~</label>
							<textarea className="form-control rounded-0" id="inputMessage" rows="3" name="message" value={this.state.feedBackData.message} onChange={this.handleInput}></textarea>
						</div>

						<button type="button" className="col-6 offset-3 btn btn-block btn-outline-primary rounded-0" onClick={this.handleSubmit}>Відправити 📧</button>
					</form>
				</div>
			</section>
		)	
	}
}

export default MainPage