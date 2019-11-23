import React, {Component} from "react"
import * as $ from "jquery"
import toasty from "toasty"

import "./styles/Header.scss"

let emojiList = [
			"😃", "😎", "😉", "😍", "😘", "🥰", "😏", "😝", "🙃", "🤪", "😇", 
			"🧐", "🐧", "🦅", "🕊", "👌", "👍", "👋", "📱", "💸", "❤", "💲", "👁‍🗨"
		]

class Header extends Component {
	constructor() {
		super()
		this.handleLogout = this.handleLogout.bind(this)
	}
	toasty() {
		const t = toasty().trigger()
	}
	handleLogout() {
		sessionStorage.clear()
		location.reload()
	}
	render() {
		return (
			<nav className="navbar
							navbar-expand-md
							navbar-light
							fixed-top
							bg-light
							shadow">
				<a className="navbar-brand" href="/">Mobile Store</a> <span className="toasty" onClick={this.toasty}>{emojiList[Math.floor(Math.random() * emojiList.length)]}</span>
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
						{sessionStorage.getItem("userId") === null ? (
							<>
								<li className="nav-item ml-auto">
									<a className="nav-link" href="/login">🚪 Увійти</a>
								</li>
								<li className="nav-item ml-auto">
									<a className="nav-link" href="/registration">✍ Зареєструватися</a>
								</li>
							</>
						) : (
							<>
								<li className="nav-item ml-auto">
									<a className="nav-link" href="/card">🏷 Кошик</a>
								</li>
								<li className="nav-item ml-auto">
									<a className="nav-link" href="/profile">📂 Профіль</a>
								</li>
								<li className="nav-item ml-auto">
									<a className="nav-link" href="#" onClick={this.handleLogout}>❎ Вийти</a>
								</li>
							</>
						)}
					</ul>
				</div>
			</nav>
		)
	}
}

export default Header