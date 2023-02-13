import React from "react"
import { ProjectType } from "../../types/projectType"
import { ProjectCardRenderContainer } from "./styled"

interface ProjectCardRenderProps {
	projectInfo?: ProjectType | null
}

const ProjectCardRender: React.FC<ProjectCardRenderProps> = ({
	projectInfo,
}) => {
	return (
		<ProjectCardRenderContainer>
			{projectInfo?.projectName}
			{projectInfo?.projectContent}
		</ProjectCardRenderContainer>
	)
}

ProjectCardRender.defaultProps = {
	projectInfo: null,
}

export default ProjectCardRender
