import PropTypes from "prop-types"
import React from "react"
import "./PizzaBlock.scss"

function PizzaBlock({ name, imageUrl, price, types, sizes }) {
	const availableTypes = ["тонкое", "традиционное"]
	const availableSizes = [26, 30, 40]
	const [activeSize, setActiveSize] = React.useState(sizes[0])
	const [activeType, setActiveType] = React.useState(types[0])

	const onSelectType = index => {
		setActiveType(index)
	}
	const onSelectSize = index => {
		setActiveSize(index)
	}
	return (
		<div className="col-12 col-md-6 col-lg-3 mb-5">
			<div className="pizza-block ">
				<div className="image">
					<img src={imageUrl} alt="" />
					<div className="pizza-name">{name}</div>
					<div className="pizza-menu mb-3">
						<div className="button-top d-flex">
							{availableTypes.map((type, index) => (
								<button
									key={type}
									onClick={() => onSelectType(index)}
									className={`${activeType === index ? "mr-1 active" : "mr-1"} ${
										!types.includes(index) ? "disabled" : ""
									}`}
								>
									{type}
								</button>
							))}
						</div>
						<div className="button-bottom d-flex">
							{availableSizes.map((size, index) => (
								<button
									key={size}
									onClick={() => onSelectSize(index)}
									className={`${activeSize === index ? "mr-1 active" : "mr-1"} ${
										!sizes.includes(size) ? "disabled" : ""
									}`}
								>
									{size} см.
								</button>
							))}
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

PizzaBlock.propTypes = {
	name: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	types: PropTypes.arrayOf([PropTypes.number]).isRequired,
}

export default PizzaBlock
