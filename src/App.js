import axios from "axios"
import React from "react"
import { Route } from "react-router-dom"
import "./App.scss"
import { Header } from "./components/components"
import { Cart, Home } from "./components/pages/index"

const App = () => {
	const [pizzas, setPizzas] = React.useState([])

	React.useEffect(() => {
		axios.get("http://localhost:3000/db.json").then(({ data }) => {
			setPizzas(data.pizzas)
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
