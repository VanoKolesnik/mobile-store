import React, {Component} from "react"
import axios from "axios"
import * as Yup from "yup"

import Preloader from "../components/Preloader.jsx"
import Breadcrumb from "../components/Breadcrumb.jsx"
import { Form, Input } from "@rocketseat/unform"

import "./styles/Orders.scss"

const schema = Yup.object().shape({
	email: Yup.string()
		.email("Невірний формат пошти. Приклад: mobilestore@gmail.com")
		.required("Вкажіть пошту"),
	name: Yup.string()
		.required("Заповніть поле"),
	lastname: Yup.string()
		.required("Заповніть поле"),
	patronymic: Yup.string()
		.required("Заповніть поле"),
	phone: Yup.string()
		.required("Заповніть поле"),
	country: Yup.string()
		.required("Заповніть поле"),
	district: Yup.string()
		.required("Заповніть поле"),
	city: Yup.string()
		.required("Заповніть поле"),
	street: Yup.string()
		.required("Заповніть поле"),
	houseNumber: Yup.string()
		.required("Заповніть поле"),
	apartmentNumber: Yup.string()
		.required("Заповніть поле")
})

class Orders extends Component {
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
					id: 2,
					locate: "Замовлення",
					urlLink: "/order"
				}
			],
			productList: [
				{
					productId: "",
					orderId: "",
				}
			],
			user: {
				id: "",
				name: "",
				lastname: "",
				patronymic: "",
				mail: "",
				phone: "",
				country: "",
				district: "",
				city: "",
				street: "",
				houseNumber: "",
				apartmentNumber: "",
				role: ""
			},
			order: {
				userId: ""
			}
		}
		this.handleOnSubmit = this.handleOnSubmit.bind(this)
		this.handleInput = this.handleInput.bind(this)
		axios.get(`${this.state.apiURL}/select-users`)
			.then(res => {
				res.data.map(user => {
					if (user.id === JSON.parse(sessionStorage.getItem("userId"))) {
						this.setState({
							user: {
								id: user.id,
								name: typeof user.name === "undefined" ? null : user.name,
								lastname: typeof user.lastname === "undefined" ? null : user.lastname,
								patronymic: typeof user.patronymic === "undefined" ? null : user.patronymic,
								mail: typeof user.mail === "undefined" ? null : user.mail,
								phone: typeof user.phone === "undefined" ? null : user.phone,
								country: typeof user.country === "undefined" ? null : user.country,
								district: typeof user.district === "undefined" ? null : user.district,
								city: typeof user.city === "undefined" ? null : user.city,
								street: typeof user.street === "undefined" ? null : user.street,
								houseNumber: typeof user.houseNumber === "undefined" ? null : user.houseNumber,
								apartmentNumber: typeof user.apartmentNumber === "undefined" ? null : user.apartmentNumber,
								role: user.role
							},
							order: {
								userId: user.id
							}
						})
					}
				}
			)})
	}
	UNSAFE_componentWillMount() {
		axios.get(`${this.state.apiURL}/last-order-id`)
			.then(res => {
				JSON.parse(localStorage.getItem("cartItems")).map((product, id) => {
					if (id === 0) {
						this.setState({
							productList: [
								{
									productId: product,
									orderId: res.data[0].id + 1,
								}
							]
						})
					} else {
						this.setState(prevState => ({
							productList: [
								...prevState.productList,
								{
									productId: product,
									orderId: res.data[0].id + 1,
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
            user: {
                ...prevState.user, 
                [name]: value
            }
        }))
	}
	handleOnSubmit() {
		let isValid = true
		for (const key in this.state.user) {
			if (this.state.user.hasOwnProperty(key)) {
				const item = this.state.user[key];
				if (item === "" || item === null) {
					isValid = false
				}
			}
		}
		if (isValid) {
			localStorage.setItem("cartItems", JSON.stringify(["0"]))
			axios.post(`${this.state.apiURL}/insert-order`, {
				user: this.state.user,
				productList: this.state.productList,
				order: this.state.order	})
				.then(res => {
					location.reload() })
				.cath(error => {
					console.log(err) })
		}
	}
	render() {
		return (
			<div>
				<Preloader />
				
				<Breadcrumb path={this.state.breadcrumbPath} />
				{JSON.parse(localStorage.getItem("cartItems") === ["0"]) ? (
					<Form onSubmit={this.handleOnSubmit} schema={schema} initialData={this.state.user} className="container-fluid">
						<div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
							<label className="col-4" htmlFor="name">Ім'я</label>
							<Input className="col-8" onChange={this.handleInput} name="name" />
						</div>
						<div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
							<label className="col-4" htmlFor="lastname">Прізвище</label>
							<Input className="col-8" onChange={this.handleInput} name="lastname" />
						</div>
						<div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
							<label className="col-4" htmlFor="patronymic">По батькові</label>
							<Input className="col-8" onChange={this.handleInput} name="patronymic" />
						</div>
						<div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
							<label className="col-4" htmlFor="mail">Електронна пошта</label>
							<Input className="col-8" onChange={this.handleInput} name="mail" />
						</div>
						<div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
							<label className="col-4" htmlFor="phone">Телефон</label>
							<Input className="col-8" onChange={this.handleInput} name="phone" />
						</div>
						<div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
							<label className="col-4" htmlFor="country">Країна</label>
							<Input className="col-8" onChange={this.handleInput} name="country" />
						</div>
						<div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
							<label className="col-4" htmlFor="district">Область</label>
							<Input className="col-8" onChange={this.handleInput} name="district" />
						</div>
						<div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
							<label className="col-4" htmlFor="city">Місто</label>
							<Input className="col-8" onChange={this.handleInput} name="city" />
						</div>
						<div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
							<label className="col-4" htmlFor="street">Вулиця</label>
							<Input className="col-8" onChange={this.handleInput} name="street" />
						</div>
						<div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
							<label className="col-4" htmlFor="houseNumber">Будинок</label>
							<Input className="col-8" onChange={this.handleInput} name="houseNumber" />
						</div>
						<div className="row col-6 offset-3 d-flex flex-row justify-content-between mb-3">
							<label className="col-4" htmlFor="apartmentNumber">Квартира</label>
							<Input className="col-8" onChange={this.handleInput} name="apartmentNumber" />
						</div>

						<button type="submit" className="col-6 offset-3 btn btn-block btn-outline-primary rounded-0" onClick={this.handleOnSubmit}>Підтвердити</button>
					</Form>
				) : (
					<div className="container-fluid">
						<div className="col-12 text-center">Додайте товар до кошику. 😄</div>
					</div>
				)}
			</div>
		)
	}
}

export default Orders