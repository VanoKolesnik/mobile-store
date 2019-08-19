import React, {Component} from "react"

import Button from "./Button.jsx"
import "./styles/MailContact.scss"

class MainPage extends Component {
	render() {
		return (
			<section className="container-fluid py-4 d-flex flex-column justify-content-around">
				<div className="row">
					<h2 className="col-12 text-center">Зворотній зв'язок</h2>
				</div>
				<hr />
				<div className="row">
					<form className="	col-10
										col-md-6
										offset-1
										offset-md-3 p-3">

						<div className="form-group">
							<label htmlFor="inputEmail">Введіть адресу електронної пошти ~</label>
							<input 	type="email" className="form-control rounded-0" id="inputEmail" 
									aria-describedby="emailHelp" placeholder="Email" />

							<small id="emailHelp" className="form-text text-muted">Ми не передаємо адресу стороннім особам. 🤐</small>
						</div>
	
						<div className="form-group">
							<label htmlFor="inputName">Введіть своє ім'я ~</label>
							<input type="text" className="form-control rounded-0" id="inputName" placeholder="Name" />
						</div>

						<div className="form-group">
							<label htmlFor="inputMessage">Введіть повідомлення ~</label>
							<textarea className="form-control rounded-0" id="inputMessage" rows="3"></textarea>
						</div>

						<Button type="submit" content="Відправити 📧" buttonType="button" />
					</form>
				</div>
			</section>
		)	
	}
}

export default MainPage