import React from "react"
import Categories from "../components/Categories/Categories"
import { PizzaBlock } from "../components/index"
import "./Home.scss"

function Home({ items }) {
	return (
		<>
			<Categories
				onClickItem={name => console.log(name)}
				items={["Мясные", "Вегатарианская", "Гриль", "Острые", "Закрытые"]}
			/>
			<div className="container">
				<h2 className="teg-PizzasBlock">Все пиццы</h2>
				<div className="row">
					{items.map(obj => (
						<PizzaBlock key={obj.id} {...obj} />
					))}
				</div>
			</div>
		</>
	)
}

export default Home
