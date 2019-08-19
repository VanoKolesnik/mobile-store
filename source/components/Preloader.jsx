import React, {Component} from "react"

import "./styles/Preloader.scss"

class Preloader extends Component {
	render() {
		return (
			<div id="preloader">
				<div className="sk-cube-grid">
					<div className="sk-cube sk-cube1"></div>
					<div className="sk-cube sk-cube2"></div>
					<div className="sk-cube sk-cube3"></div>
					<div className="sk-cube sk-cube4"></div>
					<div className="sk-cube sk-cube5"></div>
					<div className="sk-cube sk-cube6"></div>
					<div className="sk-cube sk-cube7"></div>
					<div className="sk-cube sk-cube8"></div>
					<div className="sk-cube sk-cube9"></div>
				</div>
			</div>
		)
	}
}
document.getElementsByTagName("body")[0].classList.add("loading")
window.onload = () => {
	setTimeout(() => {
		document.getElementById("preloader").style.opacity = "0"
		document.getElementsByTagName("body")[0].classList.remove("loading")
		setTimeout(() => {
			document.getElementById("preloader").style.display = "none"
		}, 200)
	}, 250)
}

export default Preloader