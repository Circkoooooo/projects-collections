import React from "react"
import { ProjectCardStyled } from "./styled"

interface AsideProjectCardProps {
	projectName: string
}

const AsideProjectCard: React.FC<AsideProjectCardProps> = ({ projectName }) => {
	return <ProjectCardStyled>{projectName}</ProjectCardStyled>
}

export default AsideProjectCard
