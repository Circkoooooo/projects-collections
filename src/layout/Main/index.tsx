import React, { Children } from "react"
import { MainContianer } from "./styled"

interface MainProps {
	children: JSX.Element
}
const Main: React.FC<MainProps> = ({ children }) => {
	return <MainContianer>{children}</MainContianer>
}

export default Main
