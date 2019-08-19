import React, {Component} from "react"

import "./styles/Header.scss"

let emojiList = [
			"😃", "😎", "😉", "😍", "😘", "🥰", "😏", "😝", "🙃", "🤪", "😇", 
			"🧐", "🐧", "🦅", "🕊", "👌", "👍", "👋", "📱", "💸", "❤", "💲", "👁‍🗨"
		]

class Header extends Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		responce: ""
	// 	}
	// }
	
	// callApi() {
	// 	fetch(`http://localhost:1337/`)
	// 		.then(res => res.text())
	// 		.then(res => this.setState({
	// 			responce: res
	// 		}))
	// 		.catch(err => err)
	// }

	// componentDidMount() {
	// 	this.callApi()
	// }

	render() {
		return (
			<nav className="navbar
							navbar-expand-sm
							navbar-light
							fixed-top
							bg-light
							shadow">
				<a className="navbar-brand" href="/">Mobile Store {emojiList[Math.floor(Math.random() * emojiList.length)]}</a>
				<button className="navbar-toggler" type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item  ml-auto active">
							<a className="nav-link" href="/">🏠</a>
						</li>
						<li className="nav-item ml-auto">
							<a className="nav-link" href="/catalog">📱 Каталог</a>
						</li>
						<li className="nav-item ml-auto">
							<a className="nav-link" href="/contact">💌 Контакти</a>
						</li>
						<li className="nav-item ml-auto">
							<a className="nav-link" href="/login">🚪 Увійти</a>
						</li>
						<li className="nav-item ml-auto">
							<a className="nav-link" href="/registration">✍ Зареєструватися</a>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Header