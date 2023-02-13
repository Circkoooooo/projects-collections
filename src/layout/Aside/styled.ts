import styled from "styled-components"

interface AsideContainerProps {
	isCollapse?: boolean
}

export const AsideContainer = styled.div<AsideContainerProps>`
	width: ${(props) => (props.isCollapse ? "100px" : "300px")};
	height: 100%;
	background-color: rgba(0, 0, 0, 0.15);
	transition: all ease-in-out 0.10s;
`

export const AsideContainerHeader = styled.div`
	width: 100%;
	height: 40px;
	background-color: rgba(0, 0, 0, 0.3);
`
