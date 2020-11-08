import React from "react"
import arrow from "../../../static/img/icon/vector.svg"
import "./SortPopup.scss"

function SortPopup({ items }) {
	const [visiblePopup, setVisiblePopup] = React.useState(false)
	const [activeItem, setActiveItem] = React.useState(0)

	const sortRef = React.useRef()
	const sortBlock = React.useRef()

	const handleOutsideClick = e => {
		if (!e.path.includes(sortRef.current)) setVisiblePopup(false)
	}

	const activeLabel = items[activeItem]

	const onSelectItem = index => {
		setActiveItem(index)
		setVisiblePopup(false)
	}

	React.useEffect(() => {
		document.body.addEventListener("click", handleOutsideClick)
	}, [])

	return (
		<div ref={sortRef} className="sort">
			<img className={visiblePopup ? "mr-2" : "rotated mr-2"} src={arrow} alt="" />{" "}
			<span className="teg-name">Сортировка по:</span>
			<span className="teg-sort ml-2" onClick={() => setVisiblePopup(!visiblePopup)}>
				{activeLabel}
			</span>
			{visiblePopup && (
				<div ref={sortBlock} className="block-sort">
					<ul>
						{items &&
							items.map((name, index) => (
								<li
									onClick={() => onSelectItem(index)}
									className={activeItem === index ? "active-li" : ""}
									key={`${name}_${index}`}
								>
									{name}
								</li>
							))}
					</ul>
				</div>
			)}
		</div>
	)
}
export default SortPopup
