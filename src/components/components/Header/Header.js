import React from "react"
import Logo from "../../../static/img/header/logo.png"
import basket from "../../../static/img/icon/basket.svg"
import ButtonGlobal from "../ButtonGlobal/ButtonGlobal"
import "./Header.scss"

const Header = () => {
	const clickPoKnopke = () => {
		alert(123)
	}

	return (
		<div className="container">
			<div className="row jc-between">
				<div className="col-auto">
					<div className="logotype d-flex">
						<div className="logo m-auto">
							<img src={Logo} alt="" />
						</div>
						<div className="text">
							<div className="top ">REACT PIZZA</div>
							<div className="bottom">самая вкусная пицца во вселенной</div>
						</div>
					</div>
				</div>
				<div className="col-auto">
					<ButtonGlobal onClick={clickPoKnopke} type="basketButton">
						0 ₽ | <img src={basket} alt="" /> 0
					</ButtonGlobal>
				</div>
			</div>
		</div>
	)
}

export default Header
