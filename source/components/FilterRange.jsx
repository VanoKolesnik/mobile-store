import React, {Component} from "react"
import Slider, { Range } from "rc-slider"

import "./styles/FilterRange.scss"
import "rc-slider/assets/index.css"

class FilterRange extends Component {
	constructor() {
		super()
		this.state = {
			minValue: 0,
			maxValue: 1,
			minSlider: 0,
			maxSlider: 30
		}
		this.setValues = this.setValues.bind(this)
	}
	setValues(value) {
		this.setState({
			minValue: value[0],
			maxValue: value[1]
		})
	}
	render() {
		return (
			<div>
				<p>Ціна</p>
				<div className="container row">
					<p className="col text-center">
						Від: {this.state.minValue}
					</p>
					<p className="col text-center">
						До: {this.state.maxValue}
					</p>
				</div>
				<Range  min={this.state.minSlider}
						max={this.state.maxSlider} 
						allowCross={false}
						onChange={this.setValues}
						value={[this.state.minValue, this.state.maxValue]} />
			</div>
		)
	}
}

export default FilterRange