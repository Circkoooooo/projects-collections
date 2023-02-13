import { useState } from "react"
import styled from "styled-components"
import Aside from "./layout/Aside"
import "./App.css"
import AsideProjectCard from "./components/AsideProjectCard"
import Main from "./layout/Main"
import { ProjectType } from "./types/projectType"
import ProjectCardRender from "./components/ProjectCardRender"

const AppContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`

const projects: ProjectType[] = [
	{
		projectName: "项目1",
		projectContent: "内容2",
	},
	{
		projectName: "项目2",
		projectContent: "内容2",
	},
]

function App() {
	const [currentProject, setCurrentProject] = useState<ProjectType | null>(
		null
	)

	const pickProject = (project: ProjectType) => {
		setCurrentProject(project)
	}

	return (
		<AppContainer>
			<Aside>
				{projects.map((project, index) => {
					return (
						<AsideProjectCard
							key={index}
							projectName={project.projectName}
							onClickFn={() => pickProject(project)}
						/>
					)
				})}
			</Aside>
			<Main>
				<ProjectCardRender projectInfo={currentProject} />
			</Main>
		</AppContainer>
	)
}

export default App
