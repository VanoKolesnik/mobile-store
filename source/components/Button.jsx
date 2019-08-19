// <Button content="Submit" type="submit" buttonType="button" />

import React, {Component} from "react"

import "./styles/Button.scss"

const Link = (props) => {
	return (
		<a className="btn btn-block btn-outline-primary rounded-0" href="#!" role="button">{props.content}</a>
	)
}

const Bttn = (props) => {
	return (
		<button type={props.type} className="btn btn-block btn-outline-primary rounded-0">{props.content}</button>
	)
}

class Button extends Component {
	constructor(props) {
		super(props)
		this.content 	= props.content
		this.type  		= props.type	
		this.buttonType = props.buttonType // link || button
	}
	render() {
		if (this.buttonType === "button") {
			return <Bttn content={this.content} />
		} else if (this.buttonType === "link") {
			return <Link content={this.content} />
		}
	}
}

export default Button