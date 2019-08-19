import React, {Component} from "react"
import ReactDOM from "react-dom"

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import scrollReveal from "scrollreveal"

import "../styles/index.scss"
import "normalize.css"

ReactDOM.render(
	<Header />,
	document.getElementById("header") )

ReactDOM.render(
	<Footer />,
	document.getElementById("footer") )

const scrollRevealOptions = { delay: 250 }

scrollReveal({ reset: false })
scrollReveal().reveal('.shift', scrollRevealOptions)