import Aside from "./layout/Aside"
import "./App.css"
import AsideProjectCard from "./components/AsideProjectCard"

function App() {
	return (
		<Aside>
			<AsideProjectCard projectName="项目1" />
			<AsideProjectCard projectName="项目2" />
		</Aside>
	)
}

export default App
