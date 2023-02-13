import React, { useState } from "react"
import { AsideContainer, AsideContainerHeader } from "./styled"

interface AsideProps {
	children: JSX.Element | JSX.Element[]
}
const Aside: React.FC<AsideProps> = ({ children }) => {
	const [isCollapse, setIsCollapse] = useState(false)

	return (
		<AsideContainer isCollapse={isCollapse}>
			<AsideContainerHeader onClick={() => setIsCollapse(!isCollapse)} />
			{children}
		</AsideContainer>
	)
}

export default Aside
