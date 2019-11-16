import React, {Component} from "react"

import Preloader from "./Preloader.jsx"
import Button from "./Button.jsx"

import "./styles/SideBar.scss"

class SideBar extends Component {
	constructor() {
		super()
		this.state = {
			sideBarItems: [
				{
					content: "Переглянуті товари",
					link: "#",
					isAdmin: false
				},
				{
					content: "Кошик",
					link: "#",
					isAdmin: false
				},
				{
					content: "Мої замовлення",
					link: "#",
					isAdmin: false
				},
				{
					content: "Додати товар",
					link: "#",
					isAdmin: true
				}
			]
		}
	}
	render() {
		return (
			<div className="side-bar
							container-fluid
							pt-5">
				<ul className="row">
					{this.state.sideBarItems.map((item, id) => {
						if (item.isAdmin) {
							return (
								<li key={id} className="col-12">
									<a href={item.link}>{item.content}</a>
								</li>
							)
						}
					})}
				</ul>
			</div>
		)
	}
}

export default SideBar