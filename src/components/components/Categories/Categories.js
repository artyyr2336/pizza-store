import React from "react"
import "../Categories/Categories.scss"

function Categories({ items, onClickItem }) {
	const [activeItem, setActiveItem] = React.useState(null)
	const onSelectItem = index => {
		setActiveItem(index)
	}
	return (
		<div className="container mt-2">
			<div className="categories">
				<div className="line"></div>
				<ul className="d-flex">
					<li className={activeItem === null ? "active" : ""} onClick={() => onSelectItem(null)}>
						Все
					</li>
					{items.map((name, index) => (
						<li
							className={activeItem === index ? "active" : ""}
							onClick={() => onSelectItem(index)}
							key={`${name}_${index}`}
						>
							{name}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Categories
