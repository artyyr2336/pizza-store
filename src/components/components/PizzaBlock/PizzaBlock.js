import React from "react"
import "./PizzaBlock.scss"

function PizzaBlock({ name, imageUrl, price, types }) {
	const typesNames = ["тонкое", "традиционное"]
	const [activeType, setActiveType] = React.useState(0)
	console.log(name, types)

	const onSelectType = index => {
		setActiveType(index)
	}
	return (
		<div className="col-12 col-md-6 col-lg-3 mb-5">
			<div className="pizza-block ">
				<div className="image">
					<img src={imageUrl} alt="" />
					<div className="pizza-name">{name}</div>
					<div className="pizza-menu mb-3">
						<div className="button-top d-flex">
							{typesNames.map((type, index) => (
								<button
									key={type}
									onClick={() => onSelectType(index)}
									className={activeType === index ? "mr-1 active" : "mr-1"}
								>
									{type}
								</button>
							))}
						</div>
						<div className="button-bottom d-flex">
							<button className="mr-1">26 см.</button>
							<button className="mr-1 ">30 см.</button>
							<button>40 см.</button>
						</div>
					</div>
					<div className="pizza-control d-flex jc-between">
						<div className="price">от {price} р.</div>
						<button className="d-flex buy-btn">
							+ Добавить <div className="circle ml-3">2</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PizzaBlock
