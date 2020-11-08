import React from "react"
import "../Categories/Categories.scss"
import SortPopup from "../SortPopup/SortPopup"

function Categories({ items, onClickItem }) {
	const [activeItem, setActiveItem] = React.useState(null)
	const onSelectItem = index => {
		setActiveItem(index)
	}
	return (
		<div className="container mt-2">
			<div className="categories">
				<div className="line"></div>
				<div className="row jc-between">
					<div className="col-auto">
						<ul className="d-flex">
							<li
								className={activeItem === null ? "active li" : "li"}
								onClick={() => onSelectItem(null)}
							>
								Все
							</li>
							{items &&
								items.map((name, index) => (
									<li
										className={activeItem === index ? "active li" : "li"}
										onClick={() => onSelectItem(index)}
										key={`${name}_${index}`}
									>
										{name}
									</li>
								))}
						</ul>
					</div>
					<div className="col-auto mt-auto mb-auto">
						<SortPopup items={["Популярности", "Цене", "Алфавиту"]} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Categories
