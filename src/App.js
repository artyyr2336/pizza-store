import React from "react"
import { Route } from "react-router-dom"
import "./App.scss"
import { Header } from "./components/components"
import { Cart, Home } from "./components/pages/index"

const App = () => {
	const [pizzas, setPizzas] = React.useState([])

	React.useEffect(() => {
		fetch("http://localhost:3000/db.json")
			.then(resp => resp.json())
			.then(json => {
				setPizzas(json.pizzas)
			})
	}, [])
	return (
		<div className="block">
			<div className="main-page">
				<Header />
				<Route path="/" render={() => <Home items={pizzas} />} exact />
				<Route path="/Cart" component={Cart} exact />
			</div>
		</div>
	)
}

export default App
