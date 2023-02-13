import React from "react"
import { ProjectCardStyled } from "./styled"

interface AsideProjectCardProps {
	projectName: string
	onClickFn?: () => any
}

const AsideProjectCard: React.FC<AsideProjectCardProps> = ({
	projectName,
	onClickFn,
}) => {
	return (
		<ProjectCardStyled onClick={() => onClickFn && onClickFn()}>
			{projectName}
		</ProjectCardStyled>
	)
}

export default AsideProjectCard
