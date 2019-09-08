// <Button content="Submit" type="submit" buttonType="button" />

import React, {Component} from "react"

import "./styles/Button.scss"

class Link extends Component {
	constructor(props) {
		super(props)
	}
	render () {
		return (
			<a className="btn btn-block btn-outline-primary rounded-0" href={this.props.link} role="button">{this.props.content}</a>
		)
	}
}

class Bttn extends Component {
	constructor(props) {
		super(props)
	}
	render () {
		return (
			<button type={this.props.type} className="btn btn-block btn-outline-primary rounded-0">{this.props.content}</button>
		)
	}
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
			return <Bttn type={this.props.type} content={this.props.content} />
		} else if (this.buttonType === "link") {
			return <Link link={this.props.link} content={this.props.content} />
		}
	}
}

export default Button