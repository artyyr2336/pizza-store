import "./App.scss"
import { Categories, Header } from "./components/components"

const App = () => {
	return (
		<div className="block">
			<div className="main-page">
				<Header />
				<Categories
					onClickItem={name => console.log(name)}
					items={["Мясные", "Вегатарианская", "Гриль", "Острые", "Закрытые"]}
				/>
			</div>
		</div>
	)
}

export default App
