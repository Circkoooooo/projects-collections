import { useState } from "react"
import { AsideContainer, AsideContainerHeader } from "./styled"

const Aside = () => {
	const [isCollapse, setIsCollapse] = useState(false)

	return (
		<AsideContainer isCollapse={isCollapse}>
			<AsideContainerHeader onClick={() => setIsCollapse(!isCollapse)} />
		</AsideContainer>
	)
}

export default Aside
