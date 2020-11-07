import React from "react"
import "./ButtonGlobal.scss"

const ButtonGlobal = ({ type, children, ...props }) => {
	let classList = ""

	if (type === "basketButton") classList += " basketButton"

	return (
		<button className={classList} {...props}>
			{children}
		</button>
	)
}

export default ButtonGlobal
