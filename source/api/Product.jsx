import React, {Component} from "react"
import axios from "axios"

import Preloader from "../components/Preloader.jsx"
import Breadcrumb from "../components/Breadcrumb.jsx"

import "./styles/Product.scss"

class Product extends Component {
    constructor() {
        super()
		this.state = {
            apiURL: "https://ancient-depths-61345.herokuapp.com",
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
                title: "",
                description: "",
                price: 0,
                quantity: 0,
                imageSource: "",
                manufacture: "",
                country: "",
                communicationStandart: "",
                diagonal: "",
                displayResolution: "",
                fromCamera: "",
                backCamera: "",
                ram: "",
                internalMemory: "",
                operationSystem: ""
            }
        }
        this.handleAddToCard = this.handleAddToCard.bind(this)
        axios.get(`${this.state.apiURL}/select-products`)
            .then(res => {
                res.data.map((product, id) => {
                    if (+product.id === +localStorage.getItem("selectedProduct")) {
                        this.setState({
							product: {
                                id: product.id,
                                title: product.title,
                                description: product.description,
                                price: product.price,
                                quantity: product.quantity,
                                imageSource: `../images/products/${product.imgURL}`,
                                manufacture: product.manufactererId,
                                country: product.countryOfManufactureId,
                                communicationStandart: product.communicationStandartId,
                                diagonal: product.diagonalId,
                                displayResolution: product.displayResolutionId,
                                frontCamera: product.frontCameraId,
                                backCamera: product.backCameraId,
                                ram: product.RAMId,
                                internalMemory: product.internalMemoryId,
                                operationSystem: product.operationSystemId
							}
						})
					}
				})
            })
        axios.get(`${this.state.apiURL}/select-manufacture`)
            .then(res => {
                res.data.map((item, id) => {
                    if (+item.id === +this.state.product.manufacture) {
                        this.setState(prevState => ({
                            product: {
                                ...prevState.product,
                                manufacture: item.name
                            }
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-country`)
            .then(res => {
                res.data.map((item, id) => {
                    if (+item.id === +this.state.product.country) {
                        this.setState(prevState => ({
                            product: {
                                ...prevState.product,
                                country: item.name
                            }
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-communicationStandart`)
            .then(res => {
                res.data.map((item, id) => {
                    if (+item.id === +this.state.product.communicationStandart) {
                        this.setState(prevState => ({
                            product: {
                                ...prevState.product,
                                communicationStandart: item.name
                            }
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-diagonal`)
            .then(res => {
                res.data.map((item, id) => {
                    if (+item.id === +this.state.product.diagonal) {
                        this.setState(prevState => ({
                            product: {
                                ...prevState.product,
                                diagonal: item.inch
                            }
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-displayResolution`)
            .then(res => {
                res.data.map((item, id) => {
                    if (+item.id === +this.state.product.displayResolution) {
                        this.setState(prevState => ({
                            product: {
                                ...prevState.product,
                                displayResolution: item.PPI
                            }
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-frontCamera`)
            .then(res => {
                res.data.map((item, id) => {
                    if (+item.id === +this.state.product.frontCamera) {
                        this.setState(prevState => ({
                            product: {
                                ...prevState.product,
                                frontCamera: item.Mpx
                            }
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-backCamera`)
            .then(res => {
                res.data.map((item, id) => {
                    if (+item.id === +this.state.product.backCamera) {
                        this.setState(prevState => ({
                            product: {
                                ...prevState.product,
                                backCamera: item.Mpx
                            }
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-ram`)
            .then(res => {
                res.data.map((item, id) => {
                    if (+item.id === +this.state.product.ram) {
                        this.setState(prevState => ({
                            product: {
                                ...prevState.product,
                                ram: item.Mb
                            }
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-internalMemory`)
            .then(res => {
                res.data.map((item, id) => {
                    if (+item.id === +this.state.product.internalMemory) {
                        this.setState(prevState => ({
                            product: {
                                ...prevState.product,
                                internalMemory: item.Gb
                            }
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-operationSystem`)
            .then(res => {
                res.data.map((item, id) => {
                    if (+item.id === +this.state.product.operationSystem) {
                        this.setState(prevState => ({
                            product: {
                                ...prevState.product,
                                operationSystem: item.name
                            }
                        }))
                    }
                })
            })
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
                        <div className="col-6 col-lg-6">{this.state.product.country}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 col-lg-3">Стандарт комунікації:</div>
                        <div className="col-6 col-lg-6">{this.state.product.communicationStandart}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 col-lg-3">Діагональ:</div>
                        <div className="col-6 col-lg-6">{this.state.product.diagonal}"</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 col-lg-3">Роздільна здатність дисплея:</div>
                        <div className="col-6 col-lg-6">{this.state.product.displayResolution}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 col-lg-3">Фронтальна камера:</div>
                        <div className="col-6 col-lg-6">{this.state.product.frontCamera} Mpx</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 col-lg-3">Основна камера:</div>
                        <div className="col-6 col-lg-6">{this.state.product.backCamera} Mpx</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 col-lg-3">RAM:</div>
                        <div className="col-6 col-lg-6">{this.state.product.ram} Mb</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 col-lg-3">Внутрішня пам'ять:</div>
                        <div className="col-6 col-lg-6">{this.state.product.internalMemory} Gb</div>
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