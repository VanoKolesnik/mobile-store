import React, {Component} from "react"

import Preloader from "../components/Preloader.jsx"
import Breadcrumb from "../components/Breadcrumb.jsx"

import "./styles/Product.scss"

class Product extends Component {
    constructor() {
        super()
		this.state = {
            apiURL: "http://localhost:1337",
			breadcrumbPath: [
				{
					id: 0,
					locate: "Головна",
					urlLink: "/"
				},
				{
                    id: 1,
					locate: "Каталог",
					urlLink: "/catalog"
				}
			],
			product: {
                id: 0,
                title: "Huawei P30 Pro 8",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus iste at libero perspiciatis nemo excepturi nostrum! Dolores deleniti et sed in ex? Eveniet illum blanditiis vel optio fugit iusto.",
                price: "25 000",
                quantity: "50",
                imageSource: "../images/products/huawei_p30_pro8.jpg",
                manufacture: "Huawei",
                countryOfManufacture: "Корея",
                communicationStandart: "2G/3G/4G",
                diagonal: "5.5",
                resolution: "720x1280",
                frontCamera: "5",
                backCamera: "12",
                ram: "2",
                internalMemory: "32",
                operationSystem: "Android 9"
            }
        }
        this.handleAddToCard = this.handleAddToCard.bind(this)
        localStorage.setItem("cardItems", JSON.stringify(["2", "4", "1"]))
    }
    handleAddToCard(e) {
        let cardItems = JSON.parse(localStorage.getItem("cardItems")),
            isExists = true
        cardItems.map((item, id) => {
            if (+item === +e.target.value) {
                isExists = false
            }
        })
        if (isExists) {
            cardItems.push(e.target.value)
        }
        localStorage.setItem("cardItems", JSON.stringify(cardItems))
    }
	render() {
		return (
			<div>
				<Preloader />
				
				<Breadcrumb path={this.state.breadcrumbPath} />
                <h3 className="m-4">{this.state.product.title}</h3>
				<div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-5 text-center">
                            <img className="img-product" src={this.state.product.imageSource} alt={this.state.product.title} />
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="row col-12">
                                <div className="row col-12 my-4">
                                    <h4>Опис:</h4>
                                    <p className="text-justify">{this.state.product.description}</p>
                                </div>
                                <div className="row col-12 my-4">
                                    <div className="col-6">
                                        <h5>Ціна:</h5> {this.state.product.price} грн.
                                    </div>
                                    <div className="col-6">
                                        <h5>Кіл-ть:</h5> {this.state.product.quantity} шт.
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 offset-3">
                                <button className="btn btn-block btn-outline-primary rounded-0" value={this.state.product.id} onClick={this.handleAddToCard}>Придбати</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-5">
                    <div className="row mb-3">
                        <div className="col-6 col-lg-3">Виробник:</div>
                        <div className="col-6 col-lg-6">{this.state.product.manufacture}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 col-lg-3">Країна виробництва:</div>
                        <div className="col-6 col-lg-6">{this.state.product.countryOfManufacture}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 col-lg-3">Стандарт комунікації:</div>
                        <div className="col-6 col-lg-6">{this.state.product.communicationStandart}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 col-lg-3">Діагональ:</div>
                        <div className="col-6 col-lg-6">{this.state.product.diagonal}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 col-lg-3">Роздільна здатність дисплея:</div>
                        <div className="col-6 col-lg-6">{this.state.product.resolution}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 col-lg-3">Фронтальна камера:</div>
                        <div className="col-6 col-lg-6">{this.state.product.frontCamera}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 col-lg-3">Основна камера:</div>
                        <div className="col-6 col-lg-6">{this.state.product.backCamera}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 col-lg-3">RAM:</div>
                        <div className="col-6 col-lg-6">{this.state.product.ram}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 col-lg-3">Внутрішня пам'ять:</div>
                        <div className="col-6 col-lg-6">{this.state.product.internalMemory}</div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-lg-3">Операційна система:</div>
                        <div className="col-6 col-lg-6">{this.state.product.operationSystem}</div>
                    </div>
                </div>
			</div>
		)
	}
}

export default Product