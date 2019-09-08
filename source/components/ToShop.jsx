import React, {Component} from "react"

import Button from "./Button.jsx"
import "./styles/ToShop.scss"

class ToShop extends Component {
	render() {
		return (
			<section className="container-fluid">
				<div className="row">
					<div className="buy-now-text 	col-12
													col-md-6 	d-flex
																flex-column														
																justify-content-center
																align-items-center
																text-light">
						<h1>Купуй зараз!</h1>
						<hr />
						<h4 className="text-center">В нашому інтернет-магазині можна обрати смартфон для кожного. 
							Великий асортимент 😱, лояльна ціна 💵, зручний інтерфейс 🧠.</h4>
						<p className="text-secondary">перегляд товарів безкоштовний 🤑</p>

						<img src="../images/background/buy_now_phone.jpg" alt="" className="buy-now-background" />
					</div>
					<div className="to-catalog	col-12
										col-md-6 	d-flex
													flex-column														
													justify-content-center
													align-items-center">
						<h2 className="text-secondary">Не чекай на запрошення! 🚫</h2>
						<hr />
						<h3 className="text-dark">Переходь до каталогу! 🏃‍♂</h3>
						<Button content="КАТАЛОГ ТОВАРІВ" link="/catalog" buttonType="link" />
					</div>
				</div>
			</section>
		)
	}
}

export default ToShop