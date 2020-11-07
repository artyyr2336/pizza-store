import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Switch } from "react-router-dom"
import App from "./App"
import { store } from "./redux/store"
import "./static/styles/style.scss"

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<App />
				</Switch>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
