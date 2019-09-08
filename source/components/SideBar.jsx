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
					link: "#"
				},
				{
					content: "Список бажань",
					link: "#"
				},
				{
					content: "Кошик",
					link: "#"
				},
				{
					content: "Мої замовлення",
					link: "#"
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
					{this.state.sideBarItems.map((item, id) => (
						<li key={id} className="col-12">
							<Button content={item.content} link={item.link} buttonType="link" />
						</li>
					))}
				</ul>
			</div>
		)
	}
}

export default SideBar