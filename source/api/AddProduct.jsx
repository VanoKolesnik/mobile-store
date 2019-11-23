import React, {Component} from "react"
import axios from "axios"
import * as Yup from "yup"

import Preloader from "../components/Preloader.jsx"
import { Form, Input, Select } from "@rocketseat/unform"

class AddProduct extends Component {
	constructor() {
		super()
		this.state = {
            apiURL: "http://localhost:1337",
            product: {
                id: 0,
                title: "",
                description: "",
                price: "",
                quantity: "",
                imageSource: "",
                manufacturers: "",
                countries: "",
                communicationStandarts: "",
                diagonals: "",
                resolutions: "",
                frontCameras: "",
                backCameras: "",
                rams: "",
                internalMemories: "",
                operationSystems: ""
            },
            manufacturers: [
                {
                    id: 0,
                    title: ""
                }
            ],
            countries: [
                {
                    id: 0,
                    title: ""
                }
            ],
            communicationStandarts: [
                {
                    id: 0,
                    title: ""
                }
            ],
            diagonals: [
                {
                    id: 0,
                    title: ""
                }
            ],
            resolutions: [
                {
                    id: 0,
                    title: ""
                }
            ],
            frontCameras: [
                {
                    id: 0,
                    title: ""
                }
            ],
            backCameras: [
                {
                    id: 0,
                    title: ""
                }
            ],
            rams: [
                {
                    id: 0,
                    title: ""
                }
            ],
            internalMemories: [
                {
                    id: 0,
                    title: ""
                }
            ],
            operationSystems: [
                {
                    id: 0,
                    title: ""
                }
            ]
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)

        this.fileInput = React.createRef()
        axios.get(`${this.state.apiURL}/select-manufacture`)
            .then(res => {
                res.data.map((item, id) => {
                    if (id === 0) {
                        this.setState({
                            manufacturers: [
                                {
                                    id: item.id,
                                    title: item.name
                                }
                            ]
                        })
                    } else {
                        this.setState(prevState => ({
                            manufacturers: [
                                ...prevState.manufacturers,
                                {
                                    id: item.id,
                                    title: item.name
                                }
                            ]
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-country`)
            .then(res => {
                res.data.map((item, id) => {
                    if (id === 0) {
                        this.setState({
                            countries: [
                                {
                                    id: item.id,
                                    title: item.name
                                }
                            ]
                        })
                    } else {
                        this.setState(prevState => ({
                            countries: [
                                ...prevState.countries,
                                {
                                    id: item.id,
                                    title: item.name
                                }
                            ]
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-communicationStandart`)
            .then(res => {
                res.data.map((item, id) => {
                    if (id === 0) {
                        this.setState({
                            communicationStandarts: [
                                {
                                    id: item.id,
                                    title: item.name
                                }
                            ]
                        })
                    } else {
                        this.setState(prevState => ({
                            communicationStandarts: [
                                ...prevState.communicationStandarts,
                                {
                                    id: item.id,
                                    title: item.name
                                }
                            ]
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-diagonal`)
            .then(res => {
                res.data.map((item, id) => {
                    if (id === 0) {
                        this.setState({
                            diagonals: [
                                {
                                    id: item.id,
                                    title: item.inch
                                }
                            ]
                        })
                    } else {
                        this.setState(prevState => ({
                            diagonals: [
                                ...prevState.diagonals,
                                {
                                    id: item.id,
                                    title: item.inch
                                }
                            ]
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-displayResolution`)
            .then(res => {
                res.data.map((item, id) => {
                    if (id === 0) {
                        this.setState({
                            resolutions: [
                                {
                                    id: item.id,
                                    title: item.PPI
                                }
                            ]
                        })
                    } else {
                        this.setState(prevState => ({
                            resolutions: [
                                ...prevState.resolutions,
                                {
                                    id: item.id,
                                    title: item.PPI
                                }
                            ]
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-frontCamera`)
            .then(res => {
                res.data.map((item, id) => {
                    if (id === 0) {
                        this.setState({
                            frontCameras: [
                                {
                                    id: item.id,
                                    title: item.Mpx
                                }
                            ]
                        })
                    } else {
                        this.setState(prevState => ({
                            frontCameras: [
                                ...prevState.frontCameras,
                                {
                                    id: item.id,
                                    title: item.Mpx
                                }
                            ]
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-backCamera`)
            .then(res => {
                res.data.map((item, id) => {
                    if (id === 0) {
                        this.setState({
                            backCameras: [
                                {
                                    id: item.id,
                                    title: item.Mpx
                                }
                            ]
                        })
                    } else {
                        this.setState(prevState => ({
                            backCameras: [
                                ...prevState.backCameras,
                                {
                                    id: item.id,
                                    title: item.Mpx
                                }
                            ]
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-ram`)
            .then(res => {
                res.data.map((item, id) => {
                    if (id === 0) {
                        this.setState({
                            rams: [
                                {
                                    id: item.id,
                                    title: item.Mb
                                }
                            ]
                        })
                    } else {
                        this.setState(prevState => ({
                            rams: [
                                ...prevState.rams,
                                {
                                    id: item.id,
                                    title: item.Mb
                                }
                            ]
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-internalMemory`)
            .then(res => {
                res.data.map((item, id) => {
                    if (id === 0) {
                        this.setState({
                            internalMemories: [
                                {
                                    id: item.id,
                                    title: item.Gb
                                }
                            ]
                        })
                    } else {
                        this.setState(prevState => ({
                            internalMemories: [
                                ...prevState.internalMemories,
                                {
                                    id: item.id,
                                    title: item.Gb
                                }
                            ]
                        }))
                    }
                })
            })
        axios.get(`${this.state.apiURL}/select-operationSystem`)
            .then(res => {
                res.data.map((item, id) => {
                    if (id === 0) {
                        this.setState({
                            operationSystems: [
                                {
                                    id: item.id,
                                    title: item.name
                                }
                            ]
                        })
                    } else {
                        this.setState(prevState => ({
                            operationSystems: [
                                ...prevState.operationSystems,
                                {
                                    id: item.id,
                                    title: item.name
                                }
                            ]
                        }))
                    }
                })
            })
    }
    handleInput(e) {
        let value = e.target.value,
			name = e.target.name
		
		this.setState(prevState => ({ 
            product: {
                ...prevState.product, 
                [name]: value
            }
        }))
        
    }
    handleSelect(e) {
        const   optionId = e.target.value,
                name = e.target.name,
                value = this.state[name][optionId - 1].id
        this.setState(prevState => ({
            product: {
                ...prevState.product,
                [name]: value
            }
        }))
    }
    handleOnSubmit() {
        const   file = this.fileInput.current.files[0],
                fileName = this.state.product.title === "" ? "" : `${this.state.product.title.toLowerCase().replace(/ /g, "-")}.jpg`,
                data = new FormData()
        data.append("file", file)
        data.append("filename", fileName === "" ? file.name.replace(/\.(gif|jpeg|png)$/, ".jpg") : fileName)
        this.setState(prevState => ({
            product: {
                ...prevState.product,
                imageSource: fileName === "" ? file.name.toLowerCase().replace(/ /g, "-").replace(/\.(gif|jpeg|png)$/, ".jpg") : fileName
            }
        }))
        axios.post(`${this.state.apiURL}/upload-product-image`, data)
            .then((response) => {
                console.log(response) })
        axios.post(`${this.state.apiURL}/insert-product`, {
            product: this.state.product })
            .then((response) => {
                console.log(response) })
    }
	render() {
		return (
			<div>
                <Preloader />

                <h2 className="text-center my-5">Додати товар</h2>

                <Form onSubmit={this.handleOnSubmit} initialData={this.state.product} className="container-fluid">
                    <div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
                        <label className="col-4" htmlFor="name">Назва:</label>
                        <Input className="col-8" onChange={this.handleInput} name="title" />
                    </div>
                    <div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
                        <label className="col-4" htmlFor="description">Опис:</label>
                        <Input className="col-8" onChange={this.handleInput} name="description" />
                    </div>
                    <div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
                        <label className="col-4" htmlFor="price">Ціна:</label>
                        <Input className="col-8" onChange={this.handleInput} name="price" />
                    </div>
                    <div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
                        <label className="col-4" htmlFor="quantity">Кількість:</label>
                        <Input className="col-8" onChange={this.handleInput} name="quantity" />
                    </div>
                    <div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
                        <label className="col-4" htmlFor="manufacturers">Виробник:</label>
                        <Select name="manufacturers" options={this.state.manufacturers} onChange={this.handleSelect} />
                    </div>
                    <div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
                        <label className="col-4" htmlFor="countries">Країна виробництва:</label>
                        <Select name="countries" options={this.state.countries} onChange={this.handleSelect} />
                    </div>
                    <div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
                        <label className="col-4" htmlFor="communicationStandarts">Стандарт зв'язку:</label>
                        <Select name="communicationStandarts" options={this.state.communicationStandarts} onChange={this.handleSelect} />
                    </div>
                    <div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
                        <label className="col-4" htmlFor="diagonals">Діагональ:</label>
                        <Select name="diagonals" options={this.state.diagonals} onChange={this.handleSelect} />
                    </div>
                    <div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
                        <label className="col-4" htmlFor="resolutions">Роздільна здатність:</label>
                        <Select name="resolutions" options={this.state.resolutions} onChange={this.handleSelect} />
                    </div>
                    <div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
                        <label className="col-4" htmlFor="backCameras">Основна камера:</label>
                        <Select name="backCameras" options={this.state.backCameras} onChange={this.handleSelect} />
                    </div>
                    <div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
                        <label className="col-4" htmlFor="frontCameras">Фронтальна камера:</label>
                        <Select name="frontCameras" options={this.state.frontCameras} onChange={this.handleSelect} />
                    </div>
                    <div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
                        <label className="col-4" htmlFor="rams">Оперативна пам'ять:</label>
                        <Select name="rams" options={this.state.rams} onChange={this.handleSelect} />
                    </div>
                    <div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
                        <label className="col-4" htmlFor="internalMemories">Внутрішня пам'ять:</label>
                        <Select name="internalMemories" options={this.state.internalMemories} onChange={this.handleSelect} />
                    </div>
                    <div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
                        <label className="col-4" htmlFor="operationSystems">Операційна система:</label>
                        <Select name="operationSystems" options={this.state.operationSystems} onChange={this.handleSelect} />
                    </div>
                    <div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
                        <label className="col-4" htmlFor="imageSource">Зображення:</label>
                        <input ref={this.fileInput} type="file" />
                    </div>

                    <button type="submit" className="col-6 offset-3 btn btn-block btn-outline-primary rounded-0">Додати</button>
                </Form>
			</div>
		)
	}
}

export default AddProduct