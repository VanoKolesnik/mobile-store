import React, {Component} from "react"
import axios from "axios"

import Preloader from "../components/Preloader.jsx"
import Breadcrumb from "../components/Breadcrumb.jsx"
import Search from "../components/Search.jsx"
import FilterModal from "../components/FilterModal.jsx"
import PhoneList from "../components/PhoneList.jsx"

import "./styles/Catalog.scss"

class Catalog extends Component {
	constructor(props) {
		super(props)
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
			filterText: "",
			phones: [
				{
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
			]
		}
		this.handelFilterText = this.handelFilterText.bind(this)
		axios.get(`${this.state.apiURL}/select-products`)
            .then(res => {
                res.data.map((product, id) => {
                    if (id === 0) {
                        this.setState({
							phones: [
								{
									id: product.id,
									title: product.title,
									description: product.description,
									price: product.price,
									quantity: product.quantity,
									imageSource: `../images/products/${product.imgurl}`,
									manufacture: product.manufactererid,
									country: product.countryofmanufactureid,
									communicationStandart: product.communicationstandartid,
									diagonal: product.diagonalid,
									displayResolution: product.displayresolutionid,
									frontCamera: product.frontcameraid,
									backCamera: product.backcameraid,
									ram: product.ramid,
									internalMemory: product.internalmemoryid,
									operationSystem: product.operationsystemid
								}
							]
						})
					} else {
                        this.setState(prevState => ({
                            phones: [
								...prevState.phones,
								{
									id: product.id,
									title: product.title,
									description: product.description,
									price: product.price,
									quantity: product.quantity,
									imageSource: `../images/products/${product.imgurl}`,
									manufacture: product.manufactererid,
									country: product.countryofmanufactureid,
									communicationStandart: product.communicationstandartid,
									diagonal: product.diagonalid,
									displayResolution: product.displayresolutionid,
									frontCamera: product.frontcameraid,
									backCamera: product.backcameraid,
									ram: product.ramid,
									internalMemory: product.internalmemoryid,
									operationSystem: product.operationsystemid
								}
							]
                        }))
                    }
				})
			})
	}
	handelFilterText(filterText) {
		this.setState({
			filterText: filterText
		})
	}
	render() {
		return (
			<>
				<Preloader />
				
				<Breadcrumb path={this.state.breadcrumbPath} />
				<div className="d-flex
								flex-column
								flex-md-row
								justify-content-around
								align-items-center">
					<Search 	filterText={this.state.filterText}
								onFilterTextChange={this.handelFilterText} />
					<FilterModal />
				</div>
				<PhoneList 	phoneList={this.state.phones}
							filterText={this.state.filterText} />
			</>
		)
	}
}

export default Catalog